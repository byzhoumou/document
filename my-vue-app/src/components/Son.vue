<template>
  <div>
    <h1>子组件</h1>
    <!-- <h4>父组件传过来的：{{ che }}</h4> -->
  </div>
  <button @click="change"></button>
</template>

<script lang="ts" setup>
defineOptions({
  name: "",
});
const care = ref("奔");

import { ref } from "vue";

// defineProps(["che", "fangfa"]);
const emit = defineEmits<{
  // <eventName>: <expected arguments>
  fangfa: [];
  caer: [value: number]; // named tuple syntax
}>();

const change = () => {
  emit("fangfa");

  emit("caer", 10);
};

// const handelClick = () => {
//   //调用父组件传递过来的方法，传入参数修改父组件的值
//   $emit("tanchuan", 1);
// };
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100px;
  background-color: rgb(204, 192, 255);
  margin-top: 100px;
}
</style>
