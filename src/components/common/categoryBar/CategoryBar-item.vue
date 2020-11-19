<template>
  <div @click="itemClick">
   <slot name="slot-category"></slot>
  </div>
</template>

<script>
  export default {
    name: "CategoryBar-item",
    methods:{
      itemClick(){
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>

</style>
