
<script lang="ts" setup>
// 计算属性computed的用法 
// 1. 导入computed 执行函数 在回调参数中return基于响应式数据做计算，用变量接收
import { computed } from 'vue'
// 原始的响应式数据
import { ref } from 'vue'
const list = ref([1, 2 ,3 ,4 ,5 ,6 ,7 ,8])

// 2.执行函数 return计算之后的值 变量接受
const computedList = computed(() => {
  // filter方法始终从原始响应式数组中帅选出大于2的所有项
  // filter 方法是一种在数组操作中非常有用的工具，它允许你根据特定条件快速筛选和提取数组中的元素
  // return之后计算list.value数组中的数据用filter方法筛选出大于2的的数 并且返回给computedList
  return list.value.filter(item => item > 2)
})
// 设置一个定时器 看看当数组发生变数计算属性会不会一起变化
setTimeout(() => {
  // push（）方法用于新增数组 这里是3秒后在执行增加
  list.value.push(9,10)
}, 3000)
</script>
<template>
<div>
原始的响应式数据-{{ list }}
</div>
<div>
计算属性数组-{{computedList}}
</div>
</template>