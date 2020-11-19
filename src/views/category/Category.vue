<template>
  <div class="category">
    <NavBar class="category-bar">
      <template v-slot:center>
        商品分类
      </template>
    </NavBar>
      <CategoryBar :categoryBar="categoryList"></CategoryBar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  import {getCategorydata} from "@/network/category";
  import CategoryBar from "@/components/common/categoryBar/CategoryBar";
  import CategoryContent from '@/components/content/category/Category-content'

  export default {
    name: "Category",
    components: {
      NavBar,
      CategoryBar,
      CategoryContent
    },
    data() {
      return {
        categoryList: []
      }
    },
    created() {
      getCategorydata().then(res => {
        console.log(res)
        this.categoryList = res.data.category.list
      })
    }

  }
</script>

<style scoped>
  .category-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .category {
    margin: 44px 0;
  }

</style>
