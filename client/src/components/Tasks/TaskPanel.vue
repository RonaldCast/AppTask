<template>
  <div class="container mt-4">
      <div class="row">
          <div class="col-md-3">
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
  mounted(){
 
  },
  data() {
    return {
      listAllArray: [],
      filterSearch: '',
      filterTag: '',
      listFilterArray: []
    };
  },
  methods: {

  },
  computed: {
    
      getAllTask() {
      let arrayGrid = [];
      this.listAllArray =  this.listTask;
      let filterTask = this.listAllArray.filter(item => {
          if(item.tag.includes(this.filterTag) && item.title.toUpperCase().includes(this.filterSearch.toUpperCase())){
              return item
          } 
        })
        // console.log(filterTask)
      let countArray = filterTask.length;
      let divide = countArray / 4 ;
      let startArray = 0
      let endArray =  divide

      for(let i = 0; i < 4; i++){
        arrayGrid[i] = filterTask.slice(startArray, endArray);
        startArray = endArray;
        console.log(arrayGrid[i]);
        endArray += divide 
        
      }
      console.log(arrayGrid);
      return arrayGrid;
    }
  },

};
</script>
<style scoped>

</style>
