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

import TaskProof from '../../proof/task.json'

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
                id:0,
                title: "New Task",
                description: "Description",
                dateStart: new Date().toISOString().substr(0, 10),
                dateEnd: new Date().toISOString().substr(0, 10),
                tag: "Low",
                updateTask: true
            }
        }
    },

    mounted() {
        this.fetchArray = this.getAllTask()
    },
    methods:{
        getAllTask(){
            return TaskProof.tasks
        },
        newTask(bool){
            this.createdTask ={
                id:0,
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
