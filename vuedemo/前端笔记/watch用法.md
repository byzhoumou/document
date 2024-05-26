<script lang="ts" setup>
// watch函数 侦听单个数据 执行watch函数传入要侦听的响应式数据(ref对象)和回调函数
// watch携带2个额外参数 immediate(立即执行) deep(深度侦听)
import { ref, watch } from 'vue'
const count = ref(0)
const setCount = () => {
  count.value++
}

// watch 侦听单个数据
// ref对象不需要加.value
// 侦听回调函数count发生变化就更新括号里面的值
watch(count, (neWal,oldVal) => {
  // neWal,oldVal是回调函数的参数 意思是旧值，和新值
  console.log('count变化了',neWal,oldVal);
  
},{
  // l立即执行函数watch自带的immediate 此函数页面开启就开始执行
   immediate:true
})

// watch侦听多个数据
// nobe里面的是数组
const  nobe =ref(0)
// 点击事件函数
const changenobe = () =>{
  nobe.value++
}

const name = ref('cp')
const changname = () =>{
  name.value ='pc'
}
// 侦听多个数据就用数组的方式  后面的新值,旧值也是用数组
watch([nobe,name],([nemNobe ,nemName],[oldNobe,oldName]) => {
  console.log('node或者name',[nemNobe ,nemName],[oldNobe,oldName]);
  
})

// deep的用法  
// 这里的ref里面是对象不能在回调函数里直接修改否则回调函数不会触发
const state =ref({nabe:0})
const changNabe = () => {
  // 直接修改nabe
  state.value.nabe++
}
// watch深度侦听deep
watch(state, () =>{
console.log('nabe');

},{
  // 一般不建议开启deep可以用下面精确侦听
  // 这里开启深度侦听  才会触发上面的回调函数
  deep:true
})

// 精确侦听
// 这里对象里有多可数据我们只侦听某一个
const stato =ref({
  name: 'chaichai',
  age: 18
})

const changeName = () => {
  // 修改name
  stato.value.name = 'chaichai-teacher'
}

const changeAge = () => {
  // 修改age
  stato.value.age = 20 + 1
}

// 开启精确侦听
watch(
  // 这里只侦听了age 精确侦听用双回调函数 记得用逗号
  () =>stato.value.age, 
  () =>{console.log('age变化了');}
)
</script> 
<template>
<div >
  <button @click="setCount">+{{ count }}</button>
</div>
<div>
  <button @click="changenobe">修改了--{{nobe}}</button>
</div>
<div>
  <button @click="changname">修改了--{{name}}</button>
</div>
<div>
  <button @click="changNabe">{{ state.nabe }}通过nabe修改</button>
</div>
<div>
  <div>当前name--{{stato.name}}</div>
  <div>当前age--{{stato.age}}</div>
  <button @click="changeName">修改了name</button>
  <button @click="changeAge">修改age</button>
</div>
</template>