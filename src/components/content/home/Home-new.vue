<template>
  <div class="home-new">
    <div class="home-new-item" v-for="item in newCloth">
      <a :href="item.link">
        <div class="home-new-img">
          <img :src="item.show.img" alt="">
        </div>
        <div class="home-description">{{item.title}}</div>
        <div class="home-price">{{item.orgPrice}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  import {getHomedata} from "@/network/home";
  import $ from 'jquery';
  import vue_falls from 'vue-falls'
  import {getHomeNewdata} from "../../../network/home";

  export default {
    name: "Home-new",
    components: {
      vue_falls
    },
    data() {
      return {
        newCloth: [],
        ArrayList: []

      }
    },
    created() {
      // getHomedata().then(res => {
      //   // this.result = res
      //   this.newCloth = (res.data.list).filter(newCloth => {
      //     return newCloth.sale < 3000 && newCloth.sale > 1000
      //   })
      //   // console.log(res)
      //   console.log((res.data.list).filter(newCloth => {
      //     return newCloth.sale < 3000 && newCloth.sale > 1000
      //   }))
      // })
      getHomeNewdata().then(res => {
        this.newCloth = res.data.list
      })
    },
    methods: {}

  }
</script>

<style scoped>
  .home-new {
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    padding-top: 2vh;
    background-color: #f6f6f6;
    overflow: hidden;

  }

  .home-new-img {
    text-align: center;
    overflow: hidden;
    border-top-left-radius: 2vw;
    border-top-right-radius: 2vw;
  }

  .home-new-img img {
    width: 100%;
    /*padding-top: 1vh;*/

  }

  /*.home-new-item > div {*/
  /*  width: 45vw;*/
  /*}*/

  .home-new-item {
    width: 48%;
    margin: 1vh 1vw;
    /*margin: 1vh 1vw;*/
    /*padding-bottom: 2vh;*/

  }

  .home-description {
    height: 5vh;
    overflow: hidden;
    line-height: 5vh;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #fff;

  }

  .home-price {
    font-size: 5vw;
    font-weight: 400;
    color: #ff8198;
    background-color: #fff;

  }
</style>
