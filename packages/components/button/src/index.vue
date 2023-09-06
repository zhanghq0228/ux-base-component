<template>
  <el-button v-bind="$attrs">
    <slot v-if="$slots.default"></slot>
    <span v-else>按钮</span>
  </el-button>
</template>

<script lang='ts' setup name='UxButton'>
const abc= 123
console.log(`output->abc`,abc)
</script>