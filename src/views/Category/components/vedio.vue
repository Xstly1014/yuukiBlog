<script setup>
import { ref, watch, onMounted } from "vue";

// 视频列表
const videos = ref([
  {
    title: "道枝骏佑",
    url: new URL("@/assets/videos/video1.mp4", import.meta.url).href,
  },
  {
    title: "告五人",
    url: new URL("@/assets/videos/video2.mp4", import.meta.url).href,
  },
  {
    title: "东山奈央",
    url: new URL("@/assets/videos/video3.mp4", import.meta.url).href,
  },
]);

// 当前播放的视频索引
const currentVideoIndex = ref(0);
const volume = ref(1);
const currentVideo = ref(videos.value[currentVideoIndex.value]);
const currentTime = ref(0);
const duration = ref(0);

// 视频元素引用
const video = ref(null);

// 播放函数
const play = () => {
  if (video.value) {
    video.value.play().catch((error) => {
      console.error("Error in play:", error);
    });
  }
};

// 暂停函数
const pause = () => {
  if (video.value) {
    video.value.pause();
  }
};

// 下一部视频
const nextVideo = () => {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.value.length;
  updateVideo();
};

// 上一部视频
const previousVideo = () => {
  currentVideoIndex.value =
    (currentVideoIndex.value - 1 + videos.value.length) % videos.value.length;
  updateVideo();
};

// 设置音量
const setVolume = () => {
  if (video.value) {
    video.value.volume = volume.value;
  }
};

// 更新当前播放的视频
const updateVideo = () => {
  if (video.value) {
    pause(); // 停止当前播放
    video.value.load(); // 重新加载视频文件
    video.value.oncanplay = () => {
      duration.value = video.value.duration; // 获取视频总时长
    };
  }
  currentVideo.value = videos.value[currentVideoIndex.value];
};

// 更新播放进度
const updateProgress = () => {
  if (video.value) {
    currentTime.value = video.value.currentTime; // 获取当前播放时间
  }
};

// 设置当前播放时间
const setCurrentTime = (newTime) => {
  if (video.value && isFinite(newTime)) {
    video.value.currentTime = newTime; // 设置当前播放时间
  }
};

// 设置总时长
const setDuration = () => {
  if (video.value) {
    duration.value = video.value.duration; // 获取视频总时长
  }
};

// 监听视频变化，确保更新正确的视频源
watch(currentVideo, () => {
  updateVideo();
});

// 组件挂载时执行
onMounted(() => {
  if (video.value) {
    setVolume(); // 设置初始音量
    updateVideo(); // 更新视频
  }
});
</script>

<template>
  <div class="video-player">
    <el-card>
      <div class="video" v-loading="true" element-loading-text="正在获取资源">
        <video
          ref="video"
          :src="currentVideo.url"
          @ended="nextVideo"
          @timeupdate="updateProgress"
          @loadedmetadata="setDuration"
          controls
          style="width: 400px; height: 400px"
        ></video>
      </div>
      <h2>{{ currentVideo.title }}</h2>

      <!-- 播放进度条 -->
      <el-slider
        v-model="currentTime"
        :min="0"
        :max="duration"
        @input="setCurrentTime"
      />

      <!-- 控制按钮 -->
      <div class="controls">
        <el-button @click="play" type="primary">播放</el-button>
        <el-button @click="pause" type="danger">暂停</el-button>
        <el-button @click="previousVideo">上一部</el-button>
        <el-button @click="nextVideo">下一部</el-button>
      </div>

      <!-- 音量控制 -->
      <el-slider
        v-model="volume"
        :min="0"
        :max="1"
        :step="0.01"
        @input="setVolume"
      />
    </el-card>
  </div>
</template>

<style scoped>
.video-player {
  text-align: center;
}

.controls {
  margin: 20px 0;
}
.el-slider {
  width: 400px;
  margin: 0 auto;
}
.video {
  width: 400px;
  margin: 0 auto;
}
</style>
