<template>
  <div>
    <nav class="navbar navbar-light navegation">
      <div>
        <a class="navbar-brand">TasksOmbe</a>
      </div>
      <div class="row">
        <form class="form-inline my-2 my-lg-0 col-5">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search tasks"
            aria-label="Search"
            v-model="searchTask"
          >
        </form>
        <div class="info-user col-7">
            <p class="mt-3">{{emailUser}}</p>
            <p class="ml-4 mt-3 sign-off">Sign off</p>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>


export default {
    components:{
      
    },
    props:[
        "emailUser"
    ],
    data(){
        return{
            searchTask: ''
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
.info-user p {
    cursor: pointer;
    transition: color 0.2s ease;

}
.info-user p:hover{
    color:rgba(255, 255, 255,0.5);
}

</style>
