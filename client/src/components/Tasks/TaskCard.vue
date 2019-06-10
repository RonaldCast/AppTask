<template>
    <div  :class="{'task--edit':updateTask}" @click="handleUpdateTaskClick">
        <div class="task-card card rounded mt-3" >
             <input type="text" class="card-header"  v-model="title" :disabled="!updateTask">
             <template v-if="updateTask">
                <textarea name="" class="textatera--edit card-body"  v-model="description"></textarea> 
             </template>
             <template v-else>
                <div class="card-body" >
                    <p >{{description}}</p>
                </div> 
             </template>   
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
            tag: '',
            updateTask:false
            
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

        handleUpdateTaskClick(e){
             let element = e.toElement
            if(element.getAttribute('class') == 'task--edit'){
                this.updateTask = false
            }else{
                this.updateTask = true
            }
            
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
    .task-card{
        transition: all 0.8s ease-in-out;
    }

    .task-card .card-body{
        max-height: 500px; 
        overflow: hidden;
    }

    /* .task-card modal click */
    .task--edit{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background:  rgba(0,0,0,0.5);
        z-index: 1000;
        top:0;
        left:0;
        cursor: pointer;
        transition: all 0.8s ease-in-out;

    }
    .task--edit .task-card{
        margin-top: 40px;
        max-width: 450px;
        width: 85%;
        height: 75%;
        
        top:50px;
        margin: 0 auto;
       
    }
    .task--edit .card-body{
        overflow: auto;
    }
    .textatera--edit{
        resize: none;
        border:none;
        outline: none
    }


</style>