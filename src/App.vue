<template>
<div>
  <Tabbar></Tabbar>
  <router-view/>
</div>
</template>

<script>
  import Tabbar from "./components/common/tabbar/Tabbar";
  export default {
    name: "App",
    components:{
      Tabbar,
    }
  }
</script>

<style scoped>
@import "assets/css/base.css";
</style>
