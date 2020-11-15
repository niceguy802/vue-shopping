<template>
  <!-- 下方分页导航 -->
  <div>
    <div id="tabbar">
      <!-- 插槽 -->
      <slot>
        <TabBarItem path="/home" active-color="#d4237a">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/home-active.svg" alt="" />
        </template>
        <template v-slot:slot-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category" active-color="#d4237a">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/category-active.svg" alt="" />
        </template>
        <template v-slot:slot-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/shopcart" active-color="#d4237a">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/cart-shop.svg" alt="" />
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/cart-shop-active.svg" alt="" />
        </template>
        <template v-slot:slot-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/profile" active-color="#d4237a">
        <template v-slot:slot-img>
          <img src="@/assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:slot-active-img>
          <img src="@/assets/img/tabbar/profile-active.svg" alt="" />
        </template>
        <template v-slot:slot-text>
          <div>我的</div>
        </template>
      </TabBarItem>
      </slot>
    </div>
  </div>
</template>
<script>
  import TabBarItem from "./Tab-bar-item";
  export  default {
    name:'TabBar',
    components:{
      TabBarItem
    }

  }
</script>
<style>
#tabbar {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
.tab-bar-item {
  text-align: center;
  height: 49px;
  font-size: 12px;
}

.tab-bar-item img {
  width: 24px;
}
</style>
