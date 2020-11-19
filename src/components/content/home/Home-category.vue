<template>
  <div class="home-category">
    <div class="home-img" v-for="item in resultCategory">
      <a href="">
        <img :src="item.image" alt="">
        <p>{{item.text}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home-category",
    components: {
    },
    data() {
      return {
        resultCategory: []
      }
    },
    props: {
      resultCategory: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .home-category {
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    text-align: center;
    padding-bottom: 3vh;
    background-color: #fff;
    /*float: left;*/
  }
  .home-img{
    width: 20%;
    /*margin: 1vw 1vw;*/
  }

  .home-img img {
    width: 15vw;
  }
</style>
