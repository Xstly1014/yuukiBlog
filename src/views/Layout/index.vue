<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHead from "./components/LayoutHead.vue";
import LayoutFoot from "./components/LayoutFoot.vue";
</script>

<template>
  <LayoutNav />
  <LayoutHead />
  <RouterView :key="$route.fullPath" />
  <LayoutFoot />
</template>