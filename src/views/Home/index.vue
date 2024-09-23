<script setup>
// 使用 import.meta.glob 动态导入 assets/carousel 文件夹中的图片
const images = Object.values(
  import.meta.glob("@/assets/carousel/*", { eager: true, import: "default" })
);
// 无限加载
import { ref } from "vue";
const count = ref(0);
const load = () => {
  count.value += 2;
};
</script>


<template>
  <!-- Scroll down to see the bottom-right button. -->
  <el-backtop :right="100" :bottom="100" />

  <header class="app-header">
    <el-card>
      <div class="container">
        <!-- 轮播图 -->
        <div class="lbt">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(image, index) in images" :key="index">
              <img
                :src="image"
                alt="轮播图"
                style="width: 100%; height: 100%"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 无限加载 -->
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </el-card>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background: #fff;
  .lbt {
    padding-top: 25px;
    width: 1240px;
    height: 300px;
  }
  .infinite-list {
    width: 1240px;
    height: 1000px;
    padding: 0;
    margin: 0 auto;
    list-style: none;
  }
  .infinite-list .infinite-list-item {
    border: 1px solid black;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    color: var(--el-color-primary);
  }
  .infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
  }
  /* 自定义滚动条样式 */
  .infinite-list::-webkit-scrollbar {
    width: 20px; /* 滚动条的宽度 */
  }

  .infinite-list::-webkit-scrollbar-track {
    background: white; /* 滚动条轨道背景 */
  }

  .infinite-list::-webkit-scrollbar-thumb {
    background: #888; /* 滚动条滑块背景 */
    border-radius: 4px; /* 滚动条滑块圆角 */
  }

  .infinite-list::-webkit-scrollbar-thumb:hover {
    background: #555; /* 滚动条滑块悬停时的颜色 */
  }
}
</style>