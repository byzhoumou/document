<script lang="ts" setup>
// 编辑
import  { ref }  from 'vue'
import axios from 'axios'
// 打开弹框
const dialogVisible = ref(false)
// 准备form
// 这里的名字跟父组件保持一致
const form =ref({
    name: '',
    place:'',
    id:''
})
// open方法调出
// 这里接受父组件传过来的数据row
const open =(row) => {
// console.log(row);
// 传过来的row 重新赋值
form.value.name = row.name
form.value.place = row.place
form.value.id =row.id
dialogVisible.value = true
}
// 用宏函数调用open方法  显示导出
defineExpose({
    open
})

// 更新
// 这里的defineEmits要求传一个数组形式的参数  里面的是一个事件名称  一般是子传父使用  后门面可以携带一个数据
const emit = defineEmits(['on-update'])
const onUpdate = async () =>{
    // 收集表单数据  调用接借口 
    await axios.patch(`/edit/${form.value.id}`,{
    name: 'form.value.name',
    place: 'form.value.plac'
})
    // 关闭弹框
    dialogVisible.value = false
    // 通知辅父组件做列表更新
    // 下面的emit方法是强调这里emit是方法用来向父组件传递数据的
    emit('on-update')
}



</script>

<template>

</template>

<style lang="scss" scoped>

</style>