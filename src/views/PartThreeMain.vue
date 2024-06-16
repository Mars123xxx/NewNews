<template>
  <div class="three-main">
    <Publicity @upload="handleUpload" @data="handleData"></Publicity>
    <FunctionBlock :flag="flag" :data="data"></FunctionBlock>
  </div>
</template>

<script setup>

import Publicity from "@/components/part3/Publicity.vue";
import FunctionBlock from "@/components/part3/FunctionBlock.vue";
import {ref} from "vue";
const flag = ref(0)
const data = ref([])
const handleUpload = ()=>{
  flag.value = flag.value ^ 1
}

const handleData = (r) => {
  console.log(r)
  data.value = r
}
</script>

<style lang="scss" scoped>

</style>