<template>
<div>
  <Tabbar></Tabbar>
</div>
  <router-view/>
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
