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
                        <input type="email" name="" id="" class="form-control col-10 offset-1" :value="email" placeholder="Email">
                    </div>
                    <div class="form-group text-center">
                        <input type="password" name="" id="" class="form-control col-10  offset-1" :value="password" placeholder="password">
                    </div>
                    <div class="text-center">
                        <button type="submit" class=" btn btn-primary  pl-4 pr-4">
                            Signin
                        </button>
                        <div class="mt-2 signup">
                            <p>New to TasksOmbe?</p>
                            <a class="" @click="pushSignup">Create account</a>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email : '',
            password : ''
        }
    },
    methods:{
        submit(){
            alert("hello")
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
