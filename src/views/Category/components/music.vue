<script setup>
import { ref, watch, onMounted } from "vue";

// 使用 import.meta.glob 动态导入 assets/carousel 文件夹中的图片
const images = Object.values(
  import.meta.glob("@/assets/music/img/*", { eager: true, import: "default" })
);

// 音频元素引用
const audio = ref(null);

// 音乐列表
const tracks = ref([
  {
    title: "爱人错过-告五人",
    url: new URL("@/assets/music/mp3/1.mp3", import.meta.url).href,
  },
  {
    title: "不摇滚-告五人",
    url: new URL("@/assets/music/mp3/2.mp3", import.meta.url).href,
  },
  {
    title: "又到天黑-告五人",
    url: new URL("@/assets/music/mp3/3.mp3", import.meta.url).href,
  },
]);

// 当前播放的音轨和音量
const currentTrackIndex = ref(0);
const volume = ref(1);
const currentTrack = ref(tracks.value[currentTrackIndex.value]);
const currentTime = ref(0);
const duration = ref(0);

// 播放函数
const play = () => {
  if (audio.value) {
    audio.value.play().catch((error) => {
      console.error("Error in play:", error);
    });
  }
};

// 暂停函数
const pause = () => {
  if (audio.value) {
    audio.value.pause();
  }
};

// 下一首歌
const nextTrack = () => {
  currentTrackIndex.value = (currentTrackIndex.value + 1) % tracks.value.length;
  updateTrack();
};

// 上一首歌
const previousTrack = () => {
  currentTrackIndex.value =
    (currentTrackIndex.value - 1 + tracks.value.length) % tracks.value.length;
  updateTrack();
};

// 设置音量
const setVolume = () => {
  if (audio.value) {
    audio.value.volume = volume.value;
  }
};

// 更新当前播放的音轨
const updateTrack = () => {
  if (audio.value) {
    pause(); // 停止当前播放
    audio.value.load(); // 重新加载音频文件

    // 监听 canplay 事件，确保音频可以播放后再调用 play()
    audio.value.oncanplay = () => {
      duration.value = audio.value.duration; // 获取歌曲总时长
    };
  }
  currentTrack.value = tracks.value[currentTrackIndex.value];
};

// 更新播放进度
const updateProgress = () => {
  if (audio.value) {
    currentTime.value = audio.value.currentTime; // 获取当前播放时间
  }
};

// 设置当前播放时间
const setCurrentTime = (newTime) => {
  // 确保 newTime 是有效的数字
  if (audio.value && isFinite(newTime)) {
    audio.value.currentTime = newTime; // 设置当前播放时间
  }
};

// 监听音轨变化，确保更新正确的音频源
watch(currentTrack, () => {
  updateTrack();
});

// 组件挂载时执行
onMounted(() => {
  if (audio.value) {
    setVolume(); // 设置初始音量
    updateTrack(); // 更新音轨
  }
});
</script>

<template>
  <div class="music-player">
    <el-card>
      <div class="music">
        <img
          :src="images[currentTrackIndex]"
          alt="轮播图"
          style="width: 100%; height: 100%"
        />
      </div>
      <h2>{{ currentTrack.title }}</h2>

      <!-- 音频标签 -->
      <audio
        ref="audio"
        :src="currentTrack.url"
        @ended="nextTrack"
        @timeupdate="updateProgress"
      ></audio>

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
        <el-button @click="previousTrack">上一首</el-button>
        <el-button @click="nextTrack">下一首</el-button>
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
.music-player {
  text-align: center;
}

.controls {
  margin: 20px 0;
}
.el-slider {
  width: 400px;
  margin: 0 auto;
}
.music {
  width: 400px;
  margin: 0 auto;
}
</style>
