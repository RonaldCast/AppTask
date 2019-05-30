'use strict'

/*****************************************************************/
/*                  server configuration run                     */
/*****************************************************************/

const express = require('express')
const morgan = require('morgan')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const chalk = require('chalk');


const app = express()

require('./database/connection');

require('./auth/auth')
//meddleware 

app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended : true }) );
app.use(cors({
    "origin" : "*",
    "methods" : "GET, PUT, POST, DELETE",
    "preflightContinue" : false,
    "optionsSuccessStatus" : 204
})) 

app.use(morgan('dev'))
 
// rutas 
const authRouter = require('./Controllers/auth');
const taskRouter = require('./Controllers/task');
const userRouter = require('./Controllers/user')

app.use('/', authRouter)
app.use('/task', passport.authenticate('jwt', {session : false}), taskRouter)
app.use('/user', passport.authenticate('jwt', {session : false}), userRouter)


// run server

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(chalk.yellow(`Server run in port ${app.get('port')} in the route http://localhost:${app.get('port')}`))
})
