<template>
  <!-- 下方分页导航的单个元素插槽 -->
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="slot-img"></slot>
    <slot v-else name="slot-active-img"></slot>
    <div :style="activeStyle">
      <slot name="slot-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tab-bar-item",
  data() {
    return {};
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      // console.log(this.path);
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style scoped>
/*@import "../../assets/css/base.css";*/
/* .tab-bar-item {
  text-align: center;
  height: 49px;
} */

.tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>
