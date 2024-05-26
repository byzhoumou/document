<script lang="ts" setup>
// 导入函数
// 这里ref可接受简单类型和复杂类型数据 并返回一个响应式的对象
import { ref } from 'vue'
// 执行函数 传入[简单类型 +对象类型] 接受变量
const  count = ref(0)
// 创建一个函数绑定点击事件点击此事件执行上面对象做自曾
const  niHao = () =>{
  // 脚本区域修改ref产生的响应式对象数据 必须通过.value属性
  //因为上面count变量打印出来是一个对象所以count.value拿到值
  count.value++
  
}
console.log(niHao);

</script>
<template>
<div>
  <!-- 这里括号里的是模板字符串用于渲染 -->
  <button @click="niHao">{{ count }}</button>
</div>
</template>