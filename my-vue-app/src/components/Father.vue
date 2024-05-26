<template>
  <div>
    <h1>父组件</h1>
    <h4>汽车：{{ toy }}</h4>
    <h5>儿子传过来的：{{ toy }}</h5>

    <son :che="car" @caer="qwe" @fangfa="tow" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import son from "../components/Son.vue";

const car = ref("奔驰");
const toy = ref(0);

defineOptions({
  name: "",
});

const qwe = (v: number) => {
  toy.value = v;
  // alert("1");
};

const tow = () => {};
</script>

<style lang="scss" scoped>
div {
  width: 500px;
  height: 400px;
  background-color: pink;
}
</style>
