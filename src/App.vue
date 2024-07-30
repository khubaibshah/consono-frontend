<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
const test = () => {
  console.log('hello')
}
</script>

<template>
  <NavigationBar />
  <div>
    <!-- <RouterView /> -->
  </div>
</template>
