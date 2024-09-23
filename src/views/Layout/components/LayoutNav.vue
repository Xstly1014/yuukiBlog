<script setup>
import { ref } from "vue";

// 使用 import 语法导入图片
const avatarSrc = new URL(
  "@/assets/images/dfa42d3fa428185c05d5670da7f85c8.jpg",
  import.meta.url
).href;

const handleClick = () => {
  console.log("前往主页");
};
const confirmLogout = () => {
  console.log("已退出登录");
};
</script>

<template>
  <header class="navbar">
    <div class="container">
      <template v-if="true">
        <el-dropdown split-button @click="handleClick">
          <span class="el-dropdown-link">
            <RouterLink to="/">个人主页</RouterLink>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Github</el-dropdown-item>
              <el-dropdown-item>Bilibili</el-dropdown-item>
              <el-dropdown-item>Tiktok</el-dropdown-item>
              <el-dropdown-item>Redbook</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <nav class="nav-links">
          <ul>
            <li>
              <RouterLink to="/category/music">播放音乐</RouterLink>
            </li>
            <li>
              <RouterLink to="/category/vedio">播放视频</RouterLink>
            </li>
            <li>
              <RouterLink to="/category/contact">联系方式</RouterLink>
            </li>
          </ul>
        </nav>

        <nav class="user-actions">
          <ul>
            <li>
              <el-badge :value="1" :offset="[-4, -2]" class="item">
                <RouterLink to="/category/note">笔记</RouterLink>
              </el-badge>
            </li>
            <li>
              <el-badge :value="1" :offset="[-4, -2]" class="item">
                <RouterLink to="/category/diary">日记</RouterLink>
              </el-badge>
            </li>
            <li>
              <el-popconfirm
                @confirm="confirmLogout"
                title="是否退出登录？"
                confirm-button-text="确认"
                cancel-button-text="取消"
              >
                <template #reference>
                  <span>
                    <el-avatar :src="avatarSrc" />
                  </span>
                </template>
              </el-popconfirm>
            </li>
          </ul>
        </nav>
      </template>

      <!-- 未登录不展示状态 -->
      <!-- <template v-else>
        <nav class="nav-links">
          <a href="javascript:;">点击登录</a>
        </nav>
      </template> -->
    </div>
  </header>
</template>

<style scoped lang="scss">
/* 基础样式 */
.navbar {
  background-color: #333;
  color: white;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.el-dropdown-link a {
  color: black;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding: 0 15px;
}

.nav-links ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  transition: background 0.3s;
}

.nav-links a:hover {
  background-color: #444;
  border-radius: 4px;
}

.user-actions ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.user-actions li {
  margin-left: 15px;
}

.user-actions a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  transition: background 0.3s;
}
.user-actions span {
  margin-left: 10px;
}
.user-actions span:hover {
  cursor: pointer;
}

.user-actions a:hover {
  background-color: #444;
  border-radius: 4px;
}
</style>
