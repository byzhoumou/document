// 定义 store结构   定他的方法是defineStore
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// 实现需求
export const useChannelStore = defineStore('channel', () => {
  // 定义类型
  type CHannelItem = {
    id: number
    name: string
  }
  type ResData = {
    data: {
      channels: CHannelItem[]
    }
    message: string
  }

  // 定义响应式数据
  const list = ref<CHannelItem[]>([])

  // axios 获取数据 （异步action）
  const getList = async () => {
    const res = await axios.request<ResData>({
      // 请求参数
      url: ' http://geek.itheima.net/v10/channels'
    })

    list.value = res.data.data.channels
  }

  //  重要
  return {
    list,
    getList
  }
})

// <script setup lang="ts">
// import {  useChannelStore } from './store/axios'
// import { onMounted } from 'vue'
// // 执行方法实例
// const channelStore = useChannelStore()
// console.log(channelStore);

// // 触发异步action
// onMounted(() => channelStore.getList())
// </script>
// <template>
// <div class="app">
// <ul>
//   <li v-for="item in channelStore.list" :key="item.id">{{ item.name }}</li>
// </ul>
//   <!-- 路由出口 -->
//   <RouterView />
// </div>
// </template>
