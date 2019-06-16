<template>
    <div  :class="{'task--edit':updateTask}" @click="handleUpdateTaskClick">
        <div class="task-card card rounded mt-3" >
             <input type="text" class="card-header"  v-model.trim="task.title" :disabled="!updateTask">
             <template v-if="updateTask">
                <textarea name="" class="textatera--edit card-body"  v-model.trim="task.description"></textarea> 
             </template>
             <template v-else>
                <div class="card-body" >
                    <p >{{task.description}}</p>
                </div> 
             </template>   
            <div class="card-footer mt-2">
             <div class="card-footer--date">
                <input  type="date" :min="dateNow"  v-model="dateStart" :disabled="!updateTask" required/>
                <input type="date" :min="dateNow" v-model="dateEnd" :disabled="!updateTask" required/>

             </div>
             <div class="card-footer--tag">
                 <select name="" id="" v-model="task.tag" :disabled="!updateTask">
                     <option>Low</option>
                     <option>Medium</option>
                     <option>High</option>
                 </select>
                 <span v-show="updateTask && task._id"  class="fa fa-trash" @click="deleteTask()"></span>
             </div>

            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
import eventBus from '../../eventBus'

export default {
    props:["task"],
    data(){
        return{
            updateTask:false,
            dateNow: '',
            dateStart: new Date(this.task.dateStart).toISOString().substr(0, 10),
            dateEnd : new Date(this.task.dateEnd).toISOString().substr(0, 10)
        }
    },

    mounted() {
        this.updateTask = this.task.updateTask == null ? false : true
        let date = new Date().toISOString().substr(0, 10);
        this.dateNow = date
    },
    updated(){
         if(this.task._id == 0){
        this.updateTask = this.task.updateTask == null ? false : true
         }
    },
 
    methods: {
        handleUpdateTaskClick(e){
             let element = e.toElement
            if(element.getAttribute('class') == 'task--edit'){
                
                
                if(this.task._id == 0){
                   this.$emit("createTask")

                   axios({
                       method: 'post',
                       url: 'http://localhost:3000/task',
                       data:{
                            title: this.task.title,
                            description:this.task.description,
                            tag: this.task.tag,
                            dateStart:this.dateStart,
                            dateEnd: this.task.dateEnd
                       },
                       headers:{
                           'Content-Type': 'application/json',
                           Authorization : localStorage.getItem('jwt')
                       }
                   })
                   .then((response) =>{
                    //    console.log(response.data)
                            eventBus.$emit('updateTaskList')
                   })
                   .catch((error) =>{
                    //    console.log(error)
                   })
                   return;
                 
                }
                else if(this.task.title !== ''){
                    axios({
                        method: 'put',
                        data: {
                                title: this.task.title,
                                description:this.task.description,
                                tag: this.task.tag,
                                 dateStart:this.dateStart,
                                dateEnd: this.task.dateEnd
                        },
                        url: `http://localhost:3000/task/${this.task._id}`,
                        headers:{
                            'Content-Type': 'application/json',
                            Authorization : localStorage.getItem('jwt')
                        }

                    })
                    .then((response) => {
                        this.updateTask = false
                    })
                    .catch((err) =>{
                        console.log(err)
                    })   
                }
                
            }else{
                this.updateTask = true
                
            }
        },

        deleteTask(){
            if(confirm("Do you want to delete this task")){
                axios({
                method: 'delete',
                url:`http://localhost:3000/task/${this.task._id}`,
                headers:{
                    'Content-Type' : 'application/json',
                    Authorization : localStorage.getItem('jwt')
                }

            })
            .then((response) => {
                 eventBus.$emit('updateTaskList')
                 this.updateTask = false
            })
            .catch((error) => {

            })
        }
            }
            
    }
}
</script>
<style scoped>

    div.card-footer{
        padding: 6px;
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        background-color: #fff;

    }
    div.card{
        -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
        cursor:pointer
    }
    input.card-header{
        padding: 10px;
        font-weight: bold;
        border:none;
        color:#607D8B;
        outline: none;
        background-color: #fff;
    }
    .task-card{
        transition: all 0.8s ease-in-out;
    }
    .task-card .card-body{
        max-height: 500px; 
        overflow: hidden;
    }
    /* .task-card modal click */
    .task--edit{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background:  rgba(0,0,0,0.5);
        z-index: 1000;
        top:0;
        left:0;
        cursor: pointer;
        transition: all 0.8s ease-in-out;

    }
    .task--edit .task-card{
        margin-top: 40px;
        max-width: 450px;
        width: 85%;
        height: 75%;
        
        top:50px;
        margin: 0 auto;
       
    }
    .task--edit .card-body{
        overflow: auto;
    }
    .textatera--edit{
        resize: none;
        border:none;
        outline: none
    }
    .card-footer--date > input[type="date"]{
        border: none;
        background:none;
        display: block;
        font-size: 0.75rem;
        outline: none;
        color: #fff ;
        position: relative;
        text-align: center;
        border-radius: 5px 5px 5px 5px;
        margin: 2px;
        cursor: pointer;
    }

    .card-footer--date > input[type="date"]:first-child{
        background:#009688;
    }

     .card-footer--date > input[type="date"]:first-child:hover{
        background:rgba(0, 150, 136,0.4);
    }

    .card-footer--date > input[type="date"]:last-child{
         background:#f44336;
    }

    .card-footer--date > input[type="date"]:last-child:hover {
         background:rgba(244, 67, 54,0.8);
    }


    .card-footer--date > input[type="date"]::-webkit-calendar-picker-indicator{
        color:transparent;
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
    }
    .card-footer--date > input[type="date"]::-webkit-calendar-picker-indicator:hover{
        background: transparent;
    }
    .card-footer--date > input[type="date"]::-webkit-calendar-picker-indicator:hover{
       background-color:none;
    }
    .card-footer--date > input[type="date"]::-webkit-inner-spin-button{
        display: none
    }

    .card-footer--date > input[type="date"]::-webkit-clear-button{
        display: none;
    }

    div.card-footer--tag{
        text-align: right;
    }
    div.card-footer--tag span{
        margin-left: 5px;
        color:#d33125
    }

    div.card-footer--tag select{
        border:  none;
        outline: none;
        font-size: 0.8rem;
        color: #fff;
        background: #607D8B;
    }
    


</style>



