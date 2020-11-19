<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <Xswiper :banner="bannerList"></Xswiper>
    <HomeCategory :resultCategory="homeCategory"></HomeCategory>
<!--      嵌套导航-->
    <CenterBar></CenterBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import {getHomeMultidata} from "@/network/home";
  import Xswiper from '@/components/common/Swiper';
  import HomeCategory from '@/components/content/home/Home-category'
  import {getHomedata} from "@/network/home";
  import HomeCloth from '@/components/content/home/Home-cloth';
  import CenterBar from "@/components/common/centerBar/CenterBar";

  export default {
    name: "Home",
    data: {},
    components: {
      NavBar,
      Xswiper,
      HomeCategory,
      HomeCloth,
      CenterBar
    },
    data() {
      return {
        // result: null,
        //图片路径
        bannerList: [],
        //  home 分类的数据
        homeCategory: [
          {
            text: '上衣',
            image: 'https://s10.mogucdn.com/mlcdn/c45406/191021_10ba435l8ffa822hh22l1467c75d9_135x135.jpg_640x640.v1cAC.40.webp'
          },
          {
            text: '裙子',
            image: 'https://s10.mogucdn.com/mlcdn/c45406/201112_4kgic58fk7edcediic8b9jcgh641e_135x135.png_640x640.v1cAC.40.webp'
          },
          {
            text: '裤子',
            image: 'https://s10.mogucdn.com/mlcdn/c45406/201117_7gj6jc6jijg9fbckeaj73bag0d2f4_135x135.png_640x640.v1cAC.40.webp'
          },
          {
            text: '套装',
            image: 'https://s10.mogucdn.com/mlcdn/c45406/200327_53b3db6jf13f45j990bfb9759e4ca_135x135.jpg_640x640.v1cAC.40.webp'
          },
          {
            text: '女鞋',
            image: 'https://s10.mogucdn.com/mlcdn/c45406/201029_3l9fd1heda8e7il42l936efclch0g_135x135.png_640x640.v1cAC.40.webp'
          },
          {
            text: '包包',
            image: 'https://s10.mogucdn.com/mlcdn/c45406/201102_3313di64i2bag69fek5ddbi76ka17_135x135.jpg_640x640.v1cAC.40.webp'
          },
          {
            text: '男装',
            image: 'https://s10.mogucdn.com/mlcdn/c45406/201111_4de8f2d7h7a686fa0d10803dk22i4_135x135.jpg_640x640.v1cAC.40.webp'
          },
          {
            text: '男鞋',
            image: 'https://s10.mogucdn.com/mlcdn/c45406/200327_8bjdidg5be4k6ak5ba9398idil3a5_135x135.jpg_640x640.v1cAC.40.webp'
          },
          {
            text: '母婴',
            image: 'https://s10.mogucdn.com/mlcdn/c45406/201102_4il4i7b4kb68dlf432a1di0fjaljb_135x135.jpg_640x640.v1cAC.40.webp'
          },
        ],
        //  cloth 商品的数据
        homeCloth: [],
      }
    },
    created() {
      getHomeMultidata().then(res => {
        // this.result = res
        this.bannerList = res.data.banner.list
        // this.homeCategory=res.data.recommend.list
        // console.log(res)
      })
      getHomedata().then(res => {
        this.result = res
        this.homeCloth = res.data.list
        console.log(res)
        console.log(res.data.list)
      })
    },
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
