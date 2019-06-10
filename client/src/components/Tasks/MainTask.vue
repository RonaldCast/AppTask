<template>
    <div>
        <NavPriority></NavPriority>
        <TaskPanel :listTask="fetchArray"></TaskPanel>
        <ButtonRadius></ButtonRadius>
    </div>
</template>
<script>

import ButtonRadius from '../CommondComponent/ButtonRadius'
import NavPriority from '../CommondComponent/NavPriority'
import TaskPanel from '../Tasks/TaskPanel'

import TaskProof from '../../proof/task.json'

export default {
    components:{
        ButtonRadius,
        NavPriority,
        TaskPanel
    },
    data() {
        return {
            fetchArray: [], 
        }
    },

    mounted() {
        this.fetchArray = this.getAllTask()
    },
    methods:{
        getAllTask(){
        return TaskProof.tasks
        }
    },
}
</script>
<style scoped>

</style>
