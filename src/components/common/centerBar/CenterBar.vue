<template>
  <div>
    <div class="CenterBar">
      <slot>
        <CenterBarItem path="/home/popular" active-color="#d4237a">
          <template v-slot:slot-text>
            <div>流行</div>
          </template>
        </CenterBarItem>
        <CenterBarItem path="/home/new" active-color="#d4237a">
          <template v-slot:slot-text>
            <div>新款</div>
          </template>
        </CenterBarItem>
        <CenterBarItem path="/home/explosions" active-color="#d4237a">
          <template v-slot:slot-text>
            <div>精选</div>
          </template>
        </CenterBarItem>
      </slot>
    </div>
  </div>
</template>

<script>
  import CenterBarItem from './CenterBar-item'

  export default {
    name: "CenterBar",
    components: {
      CenterBarItem
    },
    data(){
      return{}
    },
  }
</script>

<style scoped>
  .CenterBar {
    width: 100vw;
    display: flex;
    justify-content: space-around;
  }
</style>
