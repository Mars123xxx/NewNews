<template>
  <div class="one-main">
    <Publicity @start="handleStart"></Publicity>
    <FunctionBlock :flag="flag"></FunctionBlock>
  </div>
</template>

<script setup>

import Publicity from "@/components/part1/Publicity.vue";
import FunctionBlock from "@/components/part1/FunctionBlock.vue";
import {ref} from "vue";
const flag = ref(0)
const handleStart = ()=>{
  flag.value = flag.value ^ 1
}
</script>

<style lang="scss" scoped>
</style>