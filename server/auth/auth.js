'use strict'
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const UserModel = require('../Models/User')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('../Config/config');

passport.use('signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
}, async (req ,email, password,done) => {
    try{
   
        let exist = await UserModel.findOne({ email })
    
        if(exist){
            
            return done(null, false, {message : 'The email exist'})

        }else{

            const user = await UserModel.create({
                name : req.body.name, 
                lastName : req.body.lastName,
                email : email, 
                password : password
            })
           
            return done(null, user)
        }
    } catch (e){
        done(e)
    }
}))

passport.use('login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password'
}, async (email, password, done) =>{
    try {

        let user = await UserModel.findOne({email}) 

        if(!user){
            return done(null, false, {message : 'User no found'})
        }
    
        let isValide = await user.isValidPassword(password)

        if(isValide){
            return done(null, user, { message : 'Logged in successfully '})
         }
    } catch (e) {
        return done(e)
    }
   
}))

// verificar el password

passport.use(new JWTStrategy({
    secretOrKey : config.SECRETEKEY,
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt')
}, async (token, done) => {
    try {
        return done(null, token.user)
        
    } catch (e) {
        done(e)
    }
}))
