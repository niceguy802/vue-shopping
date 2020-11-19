<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    width: 100vw;
    display: flex;
    line-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    /*background-color: lightblue;*/
  }

  .left, .right {
    width: 60px;
    /*background-color: #ff8176;*/
  }

  .center {
    flex: 1;
    color: #fff;
    text-align: center;
    /*background-color: lightgreen;*/
  }

</style>
