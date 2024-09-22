<script setup>
// 使用 import.meta.glob 动态导入 assets/carousel 文件夹中的图片
const images = Object.values(
  import.meta.glob("@/assets/carousel/*", { eager: true, import: "default" })
);
</script>


<template>
  <header class="app-header">
    <div class="container">
      <!-- 轮播图 -->
      <div class="lbt">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(image, index) in images" :key="index">
            <img :src="image" alt="轮播图" style="width: 100%; height: 100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background: #fff;
  .lbt {
    padding-top: 25px;
    width: 1200px;
    height: 400px;
  }
}
</style>