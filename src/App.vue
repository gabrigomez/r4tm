<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-slate-600 min-h-screen w-screen">
    <MainComponent />
    <RouterView />
  </div>
</template>
