<template>
    <div>
        <div class="task-card card rounded mt-3">
             <input type="text" class="card-header"  v-model="title">
             <!-- <textarea ref="textId" name="" class="card-body"  v-model="description"></textarea> -->
            <div class="card-body" >
                <p >{{description}}</p>
            </div>
            <div class="card-footer mt-2">
             <div class="">
                <span class="badge badge-primary">{{dateStart}}</span>
                 <span class="badge badge-primary ml-1">{{dateEnd}}</span>
             </div>
             <div >
                 <span class="badge badge-danger">{{tag}}</span>
             </div>
            </div>
 
        </div>
    </div>
</template>
<script>
export default {
    props:["task"],
    data(){
        return{
            title:'',
            description: '',
            dateStart: '',
            dateEnd: '',
            tag: ''
            
        }
    },
    mounted() {
        this.fillCardTask()

    },
    methods: {
        fillCardTask(){
            this.title = this.task.title
            this.description = this.task.description
            this.dateStart = this.task.dateStart
            this.dateEnd = this.task.dateEnd
            this.tag = this.task.tag
        },

    },

}
</script>
<style scoped>

    div.card-footer{
        padding: 6px;
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        background-color: #fff;

    }
    

    div.card{
        -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
        cursor:pointer
    }
    input.card-header{
        padding: 10px;
        font-weight: bold;
        border:none;
        color:#607D8B;
        outline: none;
        background-color: #fff;
    }

    .task-card .card-body{
        max-height: 500px; 
        overflow: hidden;
    }

    /* textarea.card-body{
        padding: 5px 10px;
        display: block;
        overflow: none;
        color:red;
        border:none;
        resize: none;
        min-height: auto;
        max-height: 300px;
        overflow-y: hidden;
        outline: none;
        -webkit-appearance: none;
    } */

    /* textarea {  
        box-sizing: padding-box; 
        overflow:hidden; 
    } */


</style>