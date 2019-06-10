<template>
  <div class="container mt-4">
      <div class="row">
          <div class="col-md-3">
            <div v-for="tasks in getAllTask[0]" v-bind:key="tasks.id">
              <TaskCard :task="tasks"></TaskCard> 
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

export default {
  components: {
    TaskCard
  },
  props: ["listTask"],
  mounted() {},

  data() {
    return {
      listAllArray: [],
      ori: ""
    };
  },
  methods: {},
  computed: {
    getAllTask() {
     
      let arrayGrid = [];
      let counter = 0;
      this.listAllArray = this.listTask;
      let countArray = this.listAllArray.length;
      let divide = Math.floor(countArray / 4) ;
      let num = countArray;

      while (true) {
        if (counter == 3) {
          arrayGrid[counter] = this.listAllArray ;
          console.log("if",arrayGrid[counter])
          break;
        } else {

          arrayGrid[counter] = this.listAllArray.splice(0, divide);
          console.log("else",arrayGrid[counter])
          num = num - divide;
        }
        counter++;
      }
      console.log("EndConsole", arrayGrid)
      return arrayGrid;
    }
  }
};
</script>
<style>
</style>
