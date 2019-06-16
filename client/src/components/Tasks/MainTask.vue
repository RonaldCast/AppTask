<template>
    <div class="main--task">
        <NavPriority></NavPriority>
        <TaskPanel :listTask="fetchArray"></TaskPanel>
        <ButtonRadius @createTask="newTask()"></ButtonRadius>
        <TaskCard  v-show="createTask" :task="createdTask" @createTask="createTask = false"></TaskCard>
    </div>
</template>
<script>

import ButtonRadius from '../CommondComponent/ButtonRadius'
import NavPriority from '../CommondComponent/NavPriority'
import TaskPanel from '../Tasks/TaskPanel'
import TaskCard from '../Tasks/TaskCard'

import axios from 'axios'
import eventBus from '../../eventBus'

export default {
    components:{
        ButtonRadius,
        NavPriority,
        TaskPanel,
        TaskCard
    },
    data() {
        return {
            fetchArray: [], 
            createTask: false,
            createdTask: {
                _id:0,
                title: "New Task",
                description: "Description",
                dateStart: new Date().toISOString().substr(0, 10),
                dateEnd: new Date().toISOString().substr(0, 10),
                tag: "Low",
                updateTask: true
            }
        }
    },
    created(){
         this.getAllTask(); 
         eventBus.$on('updateTaskList',(d)=>{
             this.getAllTask()
         })

    },
    methods:{
        getAllTask(){


            axios({
                method: "get",
                url: "http://localhost:3000/task",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : localStorage.getItem('jwt')
                }
            })
            .then((response) =>{
                this.fetchArray = response.data.tasks
            }).catch((err) =>{
                console.log(err)
            })
        },
        newTask(bool){
            this.createdTask = {
                _id:0,
                title: "New Task",
                description: "Description",
                dateStart: new Date().toISOString().substr(0, 10),
                dateEnd: new Date().toISOString().substr(0, 10),
                tag: "Low",
                updateTask: false
            }
            this.createTask = true
    
        }   

    },
}
</script>
<style scoped>

</style>
