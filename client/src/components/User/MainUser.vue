<template>
    <div class="container">
       <div class="row">
           <div class="col-md-4 offset-md-4">
               <div>
                   <div class="text-center user-img"> 
                       <img class="img-fluid" src="../../assets/user.png" alt="user">
                   </div>
                   <div class="info-user text-center">
                       <p>{{userInfo.name}} {{userInfo.lastName}}</p>
                       <p>{{userInfo.email}}</p>
                   </div>
                    <form class="form-update-info" action="" @submit.prevent="updatedProfile()">
                        <p>Update information</p>
                        <p :class="[{'text-danger':error}, {'text-success':error == false}]">{{message}}</p>
                            <div class="form-group">
                                <input class="form-control" type="text" v-model.trim="name" placeholder="Name" >
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" v-model.trim="lastName" placeholder="Lastname" >
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-success mr-2" >Update data</button>
                                <button type="button" class="btn btn-danger ml-2" @click="cleanInput()"> Clean field</button>
                            </div>
                    </form>
               </div>
               
           </div>
       </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    props:["user"],
    data(){
        return{
            name : '',
            lastName : '',
            message: '',
            userInfo: {},
            error:false
        }
    },
    created(){
        this.loadData()
    },
    methods: {
        updatedProfile(){
            if(this.name !=='' && this.lastName !== ''){
                axios({
                    method: 'put',
                    url:'http://localhost:3000/user',
                    data:{
                        name: this.name,
                        lastName: this.lastName
                    },
                    headers:{
                        'Content-Type' : 'application/json',
                        Authorization : localStorage.getItem('jwt')
                    }
                })
                .then((response) => {
                    this.loadData()
                    this.showMessage(response.data.message, false)
                    this.name =''
                    this.lastName =''
                })
                .catch((error) =>{
                     this.showMessage(response.data.message, true)
                })

            }
            else{
                this.showMessage('must complete the fields', true)
            }
        },

        showMessage(message,error){
            this.error = error
            this.message = message
            setTimeout(()=>{
                this.message = ''
            },2000)
        },

        loadData(){
            axios({
                method: 'get',
                url: 'http://localhost:3000/user',
                headers:{
                    Authorization : localStorage.getItem('jwt')
                }
            })
            .then((response) =>{
                this.userInfo = response.data.user
            })
            .catch((error) => {

            })
        },
        cleanInput(){
            this.name = '',
            this.lastName = ''
        }
    },
}
</script>
<style scoped>
    .info-user p:first-child{
        font-weight: 500;
    } 
    .info-user p:first-child{
        font-size: 1.4em;
    }

    .info-user p:last-child{
       margin-top: -20px;
       color:rgba(33, 152, 196, 0.748)
    }
    .form-update-info p:first-child{
        font-weight: 500;
        border-bottom: 2px solid black;
        padding-bottom: 5px;
        font-size: 1.2em;
    }
</style>
