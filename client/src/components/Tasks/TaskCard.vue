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
             <div class="card-footer--date">
                <input  type="date" :min="dateNow" v-model="dateStart" :disabled="!updateTask" required/>
                <input type="date" :min="dateNow" v-model="dateEnd" :disabled="!updateTask" required/>

             </div>
             <div class="card-footer--tag">
                 <select name="" id="" v-model="tag" :disabled="!updateTask">
                     <option>Low</option>
                     <option>Medium</option>
                     <option>High</option>
                 </select>
                 <span v-show="updateTask" class="fa fa-trash"></span>
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
            title:'Task empty',
            description: '',
            dateStart: new Date().toISOString().substr(0, 10),
            dateEnd: new Date().toISOString().substr(0, 10),
            tag: 'Low',
            updateTask:false,
            dateNow: ''
            
        }
    },
    mounted() {
        this.fillCardTask()
        let date = new Date().toISOString().substr(0, 10);
        this.dateNow = date
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
    .card-footer--date > input[type="date"]{
        border: none;
        background:none;
        display: block;
        font-size: 0.75rem;
        outline: none;
        color: #fff ;
        position: relative;
        text-align: center;
        border-radius: 5px 5px 5px 5px;
        margin: 2px;
        cursor: pointer;
    }

    .card-footer--date > input[type="date"]:first-child{
        background:#009688;
    }

     .card-footer--date > input[type="date"]:first-child:hover{
        background:rgba(0, 150, 136,0.4);
    }

    .card-footer--date > input[type="date"]:last-child{
         background:#f44336;
    }

    .card-footer--date > input[type="date"]:last-child:hover {
         background:rgba(244, 67, 54,0.8);
    }


    .card-footer--date > input[type="date"]::-webkit-calendar-picker-indicator{
        color:transparent;
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
    }
    .card-footer--date > input[type="date"]::-webkit-calendar-picker-indicator:hover{
        background: transparent;
    }
    .card-footer--date > input[type="date"]::-webkit-calendar-picker-indicator:hover{
       background-color:none;
    }
    .card-footer--date > input[type="date"]::-webkit-inner-spin-button{
        display: none
    }

    .card-footer--date > input[type="date"]::-webkit-clear-button{
        display: none;
    }

    div.card-footer--tag{
        text-align: right;
    }
    div.card-footer--tag span{
        margin-left: 5px;
        color:#d33125
    }

    div.card-footer--tag select{
        border:  none;
        outline: none;
        font-size: 0.8rem;
        color: #fff;
        background: #607D8B;
    }
    


</style>



