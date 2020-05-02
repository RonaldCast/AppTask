<template>
    <div>
        <Navegation></Navegation>
        <router-view></router-view>
    </div>
</template>
<script>
import Navegation from './CommondComponent/Navegation'

export default {
    components:{
        Navegation
    }

}
</script>
<style scoped>

</style>
