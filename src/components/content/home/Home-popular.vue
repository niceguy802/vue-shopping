<template>
  <div class="home-popular">
    <div class="home-popular-item" v-for="item in popularCloth">
      <a :href="item.link">
        <div class="home-popular-img">
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
  import vue_falls from 'vue-falls'
  import {getHomePopdata} from "../../../network/home";

  export default {
    name: "Home-popular",
    components: {
      vue_falls
    },
    data() {
      return {
        popularCloth: [],
        ArrayList: []

      }
    },
    created() {
      // getHomedata().then(res => {
      //   this.popularCloth = (res.data.list).filter(popuplar=>{
      //     return popuplar.sale>0
      //   })
      //   // console.log(res)
      //   console.log((res.data.list).filter(popuplar=>{
      //     return popuplar.sale>0
      //   }))
      // })

      getHomePopdata().then(res => {
        console.log('pop')
        this.popularCloth = res.data.list
        console.log(res)
      })
    },
    methods: {}

  }
</script>

<style scoped>
  .home-popular {
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    padding-top: 2vh;
    background-color: #f6f6f6;
    overflow: hidden;

  }

  .home-popular-img {
    text-align: center;
    overflow: hidden;
    border-top-left-radius: 2vw;
    border-top-right-radius: 2vw;
  }

  .home-popular-img img {
    width: 100%;
    /*padding-top: 1vh;*/

  }

  /*.home-popular-item > div {*/
  /*  width: 45vw;*/
  /*}*/

  .home-popular-item {
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
