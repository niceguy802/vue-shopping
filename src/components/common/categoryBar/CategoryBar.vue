<template>
  <div class="category">
    <div class="CategoryBar">
      <ul>
        <li v-for="(item,index) in categoryBar" :key="index" :class="[currentIndex === index ? 'page-select' : '']"
            @click="itemClick(index),keyClick(item.maitKey)">
          <router-link :to="'/category/popular'+'?maitKey'+item.maitKey">
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
<!--    &lt;!&ndash;    商品&ndash;&gt;-->
<!--    <div class="CatogoryMain">-->
<!--      <div>{{goods[currentIndex]}}</div>-->

<!--    </div>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import CategoryBarIem from '@/components/common/categoryBar/CategoryBar-item'
  import HomeCategory from '@/components/content/home/Home-category'

  export default {
    name: "CategoryBar",
    components: {
      CategoryBarIem,
      HomeCategory
    },
    data() {
      return {
        currentIndex: 0,//选中的index,默认0
        goods: ['正在流行哟', '上衣哟', '裤子哟', '裙子哟'],
        goodsList: [],
        path: null
      }
    },
    props: {
      categoryBar: {
        type: Array
      }
    },
    methods: {
      keyClick(key) {
        this.path = '/category/popular'+'?maitKey' + key
        console.log(this.path)
        this.$router.push(this.path);
      },
      itemClick(index) {
        this.currentIndex = index
        console.log(this.path);

        // console.log(index)
      },


    }

  }
</script>

<style scoped>
  .category {
    display: flex;
  }

  .CategoryBar {
    width: 20vw;
    background-color: #e5e3e3;
    text-align: center;
  }

  .CatogoryMain {
    width: 80vw;
    display: flex;
    justify-content: center;
    /*align-items: center;*/
  }

  .CatogoryMain > ul > li {
    padding: 2.5vh 0;
    list-style: none;
    background-color: lightgreen;
  }

  .CategoryBar > ul > li {
    padding: 2.5vh 0;
    border-bottom: 1px solid #ccc;
    /*border-left: 3px solid #d4237a;*/
  }

  .page-select {
    color: #d4237a;
    background-color: #fff;
    border-left: 3px solid #d4237a;

  }


</style>
