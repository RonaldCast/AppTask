<template>
  <div>
    <nav class="navbar navbar-light navegation">
      <div>
        <a class="navbar-brand">TasksOmbe<span class="badge badge-secondary ml-1">{{countTask}}</span></a>
      </div>
      <div class="row">
        <div class="info-user col-12">
          <ul class="mt-2">

            <router-link 
              :to="{name: 'task'}" 
              exact  
              class="mt-3 mr-3" 
              tag="li"  
              active-class="active">
              <a>Tasks</a>
            </router-link>

            <router-link 
              :to="{name: 'user'}" 
              class="mt-3" 
              tag="li" 
              active-class="active">
              <a>{{emailUser}}</a>
            </router-link>
            
            <li class="sign-off ml-2">
              <a>Sign off</a>  
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import eventBus from '../../eventBus'

export default {
    components:{
      
    },
    props:[
        "emailUser"
    ],
    data(){
        return{
            searchTask: '',
            routerActual: '',
            countTask: 0
        }
    }, 
    created(){
      eventBus.$on('countTask', (count)=>{
        this.countTask = count
      })
    },
    methods: {
      proof(){
        console.log(this.$route)
      }
    },


};
</script>
<style scoped>
.navegation {
  background: #005aa7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fffde4,
    #005aa7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fffde4,
    #005aa7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.3);
}
.info-user{
    color:#fff;
    display: flex;
    
}
.info-user a{
  color: #fff;
  text-decoration: none
}
.info-user p,.info-user a  {
    cursor: pointer;
    transition: color 0.2s ease;

}
.info-user p:hover, .info-user a:hover{
    color:rgba(255, 255, 255,0.5);
}

.active a{
  color:rgba(255, 255, 255,0.5);
}

.info-user li{
  display: inline;
  list-style: none;
}

</style>
