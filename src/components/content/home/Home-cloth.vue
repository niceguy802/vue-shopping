<template>
  <div class="home-cloth">
    <div class="home-cloth-item" v-for="item in cloth">
      <div class="home-cloth-img">
        <img :src="item.show.img" alt="">
      </div>
      <div class="home-description">{{item.title}}</div>
      <div class="home-price">{{item.orgPrice}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home-cloth",
    data() {
      return {
        cloth: []
      }
    },
    props: {
      cloth: {
        type: Array
      }
    }

  }
</script>

<style scoped>
  .home-cloth {
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    padding-top: 5vh;
    overflow: hidden;
    background-color: #f5f4f4;
    border-top-left-radius: .06rem;
    border-top-right-radius: .06rem;
  }

  .home-cloth-img {
    text-align: center;
  }

  .home-cloth-img img {
    width: 95%;
  }

  /*.home-cloth-item > div {*/
  /*  width: 45vw;*/
  /*}*/

  .home-cloth-item {
    width: 50%;


  }

  .home-description {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .home-price {
    font-size: 5vw;
    font-weight: 400;
    color: #ff8198;
  }
</style>
