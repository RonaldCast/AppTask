<template>
  <div class="container mt-4">
      <div class="row">
          <div class="col-md-3">
            <template v-for="tasks in getAllTask[0]" >
              <TaskCard :task="tasks" v-bind:key="tasks.id"></TaskCard> 
            </template>
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

export default {
  components: {
    TaskCard
  },
  props: ["listTask"],
  mounted() {},

  data() {
    return {
      listAllArray: []
    };
  },
  methods: {},
  computed: {
    getAllTask() {
     
      let arrayGrid = [];
      this.listAllArray = this.listTask;
      let countArray = this.listAllArray.length;
      let divide = Math.floor(countArray / 4) ;
      let startArray = 0
      let endArray =  divide

      for(let i = 0; i < 4; i++){
        arrayGrid[i] = this.listAllArray.slice(startArray, endArray);
        startArray = endArray;
        endArray += divide 
        
      }

      return arrayGrid;
    }
  }
};
</script>
<style scoped>

</style>
