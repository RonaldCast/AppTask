<template>
    <div class="main">

        <div class="container">

            <div class="row">
                <div class="col-md-10  rounded offset-md-1 container--img-form ">
                    <div class="alert-danger mt-3 alert" v-show="messageBool">
                        {{message}}
                    </div>
                    <div class="row p-3 pb-4">
                        <div class="col-md-5">
                          <img src="../../assets/signup.jpg" class="img-thumbnail mt-3" alt="">
                        </div>
                        <div class="col-md-7 ">
                            <div class="text-center">
                                <h3 class="pb-4">Create account</h3>
                            </div>

                            <form @submit.prevent="submit" class="">
                                <div class="row">
                                    <div class="col">
                                        <input type="text" name="" id="" class="form-control" placeholder="Name" v-model="userSignug.name">
                                    </div>
                                    <div class="col"> 
                                        <input type="text" name="" id="" class="form-control" placeholder="Lastname" v-model="userSignug.lastName">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control mt-3" placeholder="Email" v-model="userSignug.email"> 
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="password" name="" id="" class="form-control" placeholder="Password" v-model="userSignug.password"> 
                                    </div>
                                    <div class="col"> 
                                        <input type="password" name="" id="" class="form-control" placeholder="Confirm Password" v-model="userSignug.passwordConfirm">
                                    </div>
                                </div>
                                <div class="text-center mt-3">
                                    <button class="btn btn-primary  pl-4 pr-4" type="submit">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    
    data(){
        return{
            messageBool : false,
            message : '',
            userSignug : {
                name : '',
                email : '',
                password : '',
                passwordConfirm : ''
            } 

        }
    },
    
    methods: {
        submit(){

            if(this.isValidInfo()){
                axios({
                    method: 'post',
                    url:'http://localhost:3000/signup',
                    data:{
                        name : this.userSignug.name, 
                        lastName : this.userSignug.lastName,
                        email : this.userSignug.email,
                        password : this.userSignug.password
                    },
                    headers:{

                    }
                })
                .then((response) =>{
                    this.$router.push("/signin")
                })
                .catch((error) =>{
                    
                    this.showMessage('The information is invalid')
                })
            }
        },

        isValidInfo(){
            if(this.userSignug.name !== '' || this.userSignug.email !== '' ||
             this.userSignug.password !== '' || this.userSignug.passwordConfirm !== ''){
                if(this.userSignug.password == this.userSignug.passwordConfirm){

                    if(this.userSignug.password.length > 8){
                        return true
                    }else{
                        this.showMessage('the password must be greater than 8 characters')
                        return false
                    }
                }
                else{
                    this.showMessage('the passwords are not similar')
                    return false
                }
            }else{
                this.showMessage('must fill all the fields')
                return false
            }
        },
        showMessage(message){
            this.message  = message
            this.messageBool = true
            setTimeout(()=>{
                 this.message = ''
                 this.messageBool = false
            },2200)
        }

    },
}
</script>
<style scoped>
    .container--img-form{
        background: #fff;
        box-shadow: 0px 0px 3px 0.5px #000;
    }

</style>
