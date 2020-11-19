<template>
  <div class="CenterBar-item" @click="itemClick">
    <div class="centerBar-item" :style="activeStyle">
      <slot name="slot-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CenterBar-item",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "red",
      },
      activeBorder:{
        type:String,
        default:'2px solid #ff8198'
      },
      activeColor:{
        type:String,
        // default:''
      }
    },
    methods: {
      itemClick() {
        // console.log(this.path);
        this.$router.push(this.path);
      },
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor,borderBottom:this.activeBorder } : {};
      },
    },
  }
</script>

<style scoped>
  .centerBar-item {
    font-size: 16px;
  }
</style>
