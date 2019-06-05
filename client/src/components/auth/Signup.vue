<template>
    <div class="main">

        <div class="container">

            <div class="row">
                <div class="col-md-10  rounded offset-md-1 container--img-form ">
                    <div :class="[{'alert-danger':fialFormSend}, 'mt-3', 'alert', {'alert-success':successFormSend}]" v-show="message">
                        messages
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
                                        <input type="text" name="" id="" class="form-control" placeholder="Name">
                                    </div>
                                    <div class="col"> 
                                        <input type="text" name="" id="" class="form-control" placeholder="Lastname">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control mt-3" placeholder="Email">
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="password" name="" id="" class="form-control" placeholder="Password">
                                    </div>
                                    <div class="col"> 
                                        <input type="password" name="" id="" class="form-control" placeholder="Confirm Password">
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
export default {
    
    data(){
        return{
            failFormSend :false,
            successFormSend :false,
            message : false,
            userSignug : {
                name : '',
                email : '',
                password : ''
            } 

        }
    },
    
    methods: {
        submit(){

        }
    },
}
</script>
<style scoped>
    .container--img-form{
        background: #fff;
        box-shadow: 0px 0px 3px 0.5px #000;
    }



 /*name:{
        type : String,
    },
    lastName:{
        type : String 
    },
    email:{
        type : String,
        unique : true,
        required: true
    },
    password:{
        type : String,
        required : true
    }*/
</style>
