<template>
  <div id="app">
    <Navegation :emailUser="'ronaldcastillo@gmailcom'"></Navegation>
    <NavPriority></NavPriority>
    <TaskPanel :listTask="fetchArray"></TaskPanel>
    <ButtonRadius></ButtonRadius>
  </div>
</template>

<script>

import Navegation from './components/CommondComponent/Navegation'
import ButtonRadius from './components/CommondComponent/ButtonRadius'
import NavPriority from './components/CommondComponent/NavPriority'
import TaskPanel from './components/Tasks/TaskPanel'

//proof
import TaskProof from './proof/task.json'

export default {
  name: 'app',
  components: {
    Navegation,
    ButtonRadius,
    TaskPanel,
    NavPriority
  },
  data(){
    return{
       fetchArray: [],
      //  counTask: 0
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
  computed: {
    
  },

}
</script>

<style>
      .main{
        height: 100vh;
        display: flex;
        align-items: center;
        background: #005AA7;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #FFFDE4, #005AA7);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #FFFDE4, #005AA7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>


