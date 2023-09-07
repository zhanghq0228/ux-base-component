<template>
  <el-button v-bind="$attrs">
    <slot v-if="$slots.default"></slot>
    <span v-else class="ddd-test">按钮</span>
  </el-button>
</template>

<script lang='ts' setup name='UxButton'>
// import { ElButton } from 'element-plus';


const abc= 123
console.log(`output->abc`,abc)
</script>
<style scoped>
.ddd-test{
  color: red;
}
</style>