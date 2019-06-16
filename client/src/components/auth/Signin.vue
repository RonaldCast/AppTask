<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <form class="col-md-4 form-signin pt-4 pb-4 rounded-lg  col-sm-7" @submit.prevent="submit" >
                    <div class="text-center mb-4">
                        <h3 class="font-weight-normal font-italic mb-1">TasksOmbe</h3>
                        <h4 class="font-weight-light font-size">Login</h4>
                    </div>
                    <div class="form-group  text-center">
                        <input type="email" class="form-control col-10 offset-1" v-model="email" placeholder="Email">
                    </div>
                    <div class="form-group text-center">
                        <input type="password" class="form-control col-10  offset-1" v-model="password" placeholder="password">
                    </div>
                    <div class="text-center">
                        <button type="submit" class=" btn btn-primary  pl-4 pr-4">
                            Signin
                        </button>
                        <div class="mt-2 signup">
                            <p>New to TasksOmbe?</p>
                            <a class="" @click="pushSignup">Create account</a>
                            <p class="text-danger">{{error}}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            email : '',
            password : '',
            error: ''
        }
    },
    methods:{
        submit(){
            axios({
                method: 'post',
                data:{
                    email : this.email,
                    password : this.password
                },
                url: 'http://localhost:3000/login',
                headers: {
                    'Contect-Type': 'application/json'
                }
            })
            .then((response)=>{
                console.log(response.data.error)
                if(response.data.error == true){
                     this.error = response.data.message
                     
                }else{
                    localStorage.setItem("jwt",`jwt ${response.data.token}`)
                    this.$router.push('/')
                  
                }
            
            }).catch((err) =>{
               this.error = err.message
               console.log(err)
            })
        },
        pushSignup(){
            this.$router.push('/signup')
        }
    }

}
</script>
<style scoped>

    .form-signin{
        background: #fff;
        margin: 0 auto;
        box-shadow: 0px 0px 3px 0.5px #000;
         background: rgba(255, 255, 255, 0.5)

    }
   .form-group > input{
        background: rgba(255, 255, 255, 0.2)
    }

    .signup p{
        margin-bottom: -5px;
    }
    
    .signup a{
        cursor: pointer;
        color: #007bff;
    }
    .signup{
        font-size: 0.95rem;
    }
</style>
