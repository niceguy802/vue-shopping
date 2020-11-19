<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!--具名插槽，存放具体轮播内容-->
      <div class="swiper-slide" v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
      <!--<img src="@/assets/img/2.jpg" alt="">-->
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'Swiper',
    props: {
      banner: {
        type: Array
      }
    },
    data() {
      return {}
    },
    //
    updated() {
      var mySwiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: 2000,
        loop: true,
      })
    },
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    /*height: 100px;*/
    margin-top: 44px;
    /*background-color: lightgreen;*/
    swiper-theme-color: #ff6600;
  }

  .swiper-slide a img {
    width: 100%;
  }

</style>
