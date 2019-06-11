<template>
    <div class="container mt-4">
       <div class="row">
           <div class="col-md-12">
               <input class="form-control search" type="text" placeholder="Search task for title" v-model="search">
           </div>
            <div class="col-md-12 mt-3 text-center">
                <button class="btn btn-sm btn-primary ml-1" @click="tagSelect('')">All Task</button>
                <button class="btn btn-sm btn-info ml-1" @click="tagSelect('Low')">Low</button>
                <button class="btn btn-sm btn-warning ml-1" @click="tagSelect('Medium')">Medium</button>
                <button class="btn btn-sm btn-danger ml-1" @click="tagSelect('High')">High</button>
            </div>
       </div>
    </div>
</template>
<script>

import eventBus from '../../eventBus'
export default {
    data(){
        return{
            search: '',
            tag: ''
        }
    },
    methods: {
        tagSelect(tag){
            this.tag = tag
        }
    },
    watch:{
        search(){
            eventBus.$emit('filterTaskEvent',this.search, this.tag)
        },
        tag(){
            eventBus.$emit('filterTaskEvent',this.search, this.tag)
        }
    }
}
</script>
<style scoped>
    .search{
        border: none;
        border-bottom: 1.5px solid grey;
        outline: none;
    }
</style>
