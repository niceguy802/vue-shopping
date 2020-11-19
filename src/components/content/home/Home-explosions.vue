<template>
  <div class="home-explosions">
    <div class="home-explosions-item" v-for="item in explosionsCloth">
      <a :href="item.link">
        <div class="home-explosions-img">
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
  import {getHomeExpdata} from "../../../network/home";

  export default {
    name: "Home-explosions",
    data() {
      return {
        explosionsCloth: []
      }
    },
    // props: {
    //   explosionsCloth: {
    //     type: Array
    //   }
    // },
    created() {
      // getHomedata().then(res => {
      //   // this.result = res
      //   this.explosionsCloth = (res.data.list).filter(thisCloth => {
      //     return thisCloth.sale < 2000
      //   })
      //   console.log((res.data.list).filter(thisCloth => {
      //     return thisCloth.sale < 2000
      //   }))
      // })
      getHomeExpdata().then(res => {
        this.explosionsCloth = res.data.list
      })
    },
  }
</script>

<style scoped>
  .home-explosions {
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    padding-top: 2vh;
    background-color: #f5f4f4;
    border-top-left-radius: 1vw;
    border-top-right-radius: 1vw;
    overflow: hidden;
  }

  .home-explosions-img {
    text-align: center;
  }

  .home-explosions-img img {
    width: 95%;
  }

  /*.home-explosions-item > div {*/
  /*  width: 45vw;*/
  /*}*/

  .home-explosions-item {
    width: 50%;
    padding-bottom: 2vh;

  }

  .home-description {
    height: 5vh;
    overflow: hidden;
    line-height: 5vh;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .home-price {
    font-size: 5vw;
    font-weight: 400;
    color: #ff8198;
  }
</style>

