<script setup lang="ts">
import { useChannelStore } from './stores/axios'
import { onMounted } from 'vue'
// 执行方法实例
const channelStore = useChannelStore()
console.log(channelStore)
// 触发异步action
onMounted(() => channelStore.getList())
</script>
<template>
  <div class="app">
    <ul>
      <li v-for="item in channelStore.list" :key="item.id">{{ item.name }}</li>
    </ul>
    <!-- 路由出口 -->
    <RouterView />
  </div>
</template>

<style lang="ts" scoped></style>
