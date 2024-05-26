// 这个是pinai 状态管理的计数器逻辑

// 创建计数器  那个组件要用 就再这里定义一个  数据方法也可以  然后   数据是以对象的方式return出去
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// defineStore 不是 Vue 3 核心 API 的一部分，而是 pinia 这个状态管理库中的一个辅助函数。pinia 是由 Vue 3 的作者开发的一个状态管理库，
// 用于管理全局状态。defineStore 允许您定义一个 Pinia store，即状态管理库中的一个 store 模块
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  // const doubleCount = computed(() => count.value * 2 )
  function increment() {
    count.value++
  }

  // getters实现 去问gtp
  // computed 是 Vue.js 提供的一个计算属性的特殊函数。它用于创建一个计算属性，其值会根据其他响应式数据的变化而自动更新
  const doubleCount = computed(() => count.value * 2)

  // 以对象的方式return出去供组件使用
  return { count, doubleCount, increment }
})

//  这是写在组件中的 导入一个use打头的方法
// import { useCounterStore } from  './store/counter'
// import { count } from 'console'
// 这里导入这个函数 解构赋值的时候保持响应式（只能支持数据 state/getters）
// import {  storeToRefs } from 'pinia'
// 执行方法得到store实力对象
// const  counterStore = useCounterStore ()
// console.log(counterStore);
// 直接解构赋值（数据的响应式会丢失）
// cosnt { count, doubleCount } = counterStore
// storeToRefs() 用这个函数就不会响应式丢失了  而且还能不用{{counterStore.count}}这样写 直接{{count}}
// 这里是这个函数的语法             在这里用函数包裹这个数据
// cosnt { count, doubleCount } = storeToRefs(counterStore)
// <template>
// <button @click= "counterStore.increment"> {{ .count }} </button>
// getter:{{ doubleCount }}
// </template>
