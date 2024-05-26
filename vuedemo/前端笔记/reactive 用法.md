# reactive 
<script lang="ts" setup>
// 导入函数
// 这里reactive就是接受对象类型数据的参数传入 并返回一个响应式的对象
import { reactive } from 'vue'
// 执行函数 传入一个对象类型的参数 接收变量
const  state = reactive({
  const: 0
})
// 创建一个函数绑定点击事件点击此事件执行上面对象做自曾
const  niHao = () =>{
  state.const++
}
</script>
<template>
<div>
  <!-- 这里括号里的是模板字符串用于渲染 -->
  <button @click="niHao">{{ state.const}}</button>
</div>
</template>