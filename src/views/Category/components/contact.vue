<template>
  <el-card>
    <div class="contact">
      <el-descriptions
        title="Width vertical list"
        direction="vertical"
        border
        style="margin-top: 20px"
      >
        <el-descriptions-item
          :rowspan="2"
          :width="140"
          label="头像"
          align="center"
        >
          <el-image style="width: 100px; height: 100px" :src="avatarSrc" />
        </el-descriptions-item>
        <el-descriptions-item label="昵称">Yuuki</el-descriptions-item>
        <el-descriptions-item label="电话">无</el-descriptions-item>
        <el-descriptions-item label="地址">深圳</el-descriptions-item>
        <el-descriptions-item label="大学">
          <el-tag size="small">深圳大学</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="详细地址">
          广东省深圳市南山区粤海街道深圳大学
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </el-card>
</template>

<script setup>
const avatarSrc = new URL(
  "@/assets/images/1a63c036c8e339a729f41b2543e7d3e.jpg",
  import.meta.url
).href;
</script>


<style scoped>
.contact {
  margin: 0 auto;
  padding: 100px 0;
  width: 1240px;
  height: 604.51px;
  background-color: white;
}
</style>