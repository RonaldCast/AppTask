<template>
    <div class="container">
       <div class="row">
           <div class="col-md-4 offset-md-4">
               <div>
                   <div class="text-center user-img"> 
                       <img class="img-fluid" src="../../assets/user.png" alt="user">
                   </div>
                   <div class="info-user text-center">
                       <p>Ronald Castillo</p>
                       <p>ronaldcastillo789@gmail.com</p>
                   </div>
                    <form class="form-update-info" action="" @submit.prevent="updatedProfile()">
                        <p>Update information</p>
                            <div class="form-group">
                                <input class="form-control" type="text" v-model="name" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" v-model="lastName" placeholder="Lastname" required>
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
export default {
    props:["user"],
    data(){
        return{
            name : '',
            lastName : ''
        }
    },
    methods: {
        updatedProfile(){
            console.log("update")
        },
        cleanInput(){
            this.name = '',
            this.lastName = ''
        }
    },
}
</script>
<style scoped>
    .info-user p{
        font-weight: 500;
    } 
    .info-user p:first-child{
        font-size: 1.4em;
    }

    .info-user p:last-child{
       margin-top: -20px;
       color:rgba(33, 152, 196, 0.748)
    }
    .form-update-info p{
        font-weight: 500;
        border-bottom: 2px solid black;
        padding-bottom: 5px;
        font-size: 1.2em;
    }
</style>
