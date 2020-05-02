<template>
  <div class="container mt-4  container--task-panel">
      <div class="row">
          <div class="col-md-3 display-flex">
            
          <div v-for="tasks in getAllTask[0]" v-bind:key="tasks.id">
                <TaskCard :task="tasks" ></TaskCard> 
            </div>
          </div>
           <div class="col-md-3">
            <div v-for="tasks in getAllTask[1]" v-bind:key="tasks.id">
              <TaskCard :task="tasks"></TaskCard> 
            </div>
          </div>
           <div class="col-md-3">
            <div v-for="tasks in getAllTask[2]" v-bind:key="tasks.id">
              <TaskCard :task="tasks"></TaskCard> 
            </div>
          </div>
           <div class="col-md-3">
            <div v-for="tasks in getAllTask[3]" v-bind:key="tasks.id">
              <TaskCard :task="tasks"></TaskCard> 
            </div>
          </div>
      </div>
  </div>
</template>
<script>

import TaskCard from "./TaskCard";
import eventBus from '../../eventBus'

export default {
  components: {
    TaskCard
  },
  props: ["listTask"],
  created(){
    eventBus.$on('filterTaskEvent', (search, tag) =>{
      this.filterSearch = search
      this.filterTag = tag
    })
  },

  data() {
    return {
      filterSearch: '',
      filterTag: ''
    };
  },

  computed: {
      getAllTask() {
      let arrayGrid = [];
      eventBus.$emit("countTask", this.listTask.length)
      let filterTask = this.listTask.filter(item => {
          
              return   item.title.toUpperCase().includes(this.filterSearch.toUpperCase().trim()) && item.tag.includes(this.filterTag)
        })
      let countArray = filterTask.length;
      let divide = (countArray / 4) > 0 && divide <= 1 ? 1 : (countArray / 4) ;
      let startArray = 0
      let endArray =  divide 

      for(let i = 0; i < 4; i++){
        arrayGrid[i] = filterTask.slice(startArray, endArray);
        startArray = endArray;
        endArray += divide 
      }
  
      return arrayGrid.reverse();
    }
      
  },


};
</script>
<style scoped>
  .container--task-panel{
      margin-bottom: 60px;
  }
</style>



  