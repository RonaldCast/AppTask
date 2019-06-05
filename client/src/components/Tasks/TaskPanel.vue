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
        if (num < divide) {
          arrayGrid[counter] = this.listAllArray ;
          break;
        } else {
          console.log("h");
          arrayGrid[counter] = this.listAllArray.splice(0, divide);
          num = num - divide;
        }
        counter++;
      }
      return arrayGrid;
    }
  }
};
</script>
<style>
</style>
