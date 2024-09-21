<template>
  <div class="publicity-part">
    <div class="l-content" v-loading="loading">
      <div style="position: relative;top: 20%">
        <h1>Image-Text Match</h1>
        <h2>Upload images and text to generate news</h2>
        <div class="btn-box">
          <el-button type="primary" @click="handleGenerate">Import result then start</el-button>
          <el-button @click="emit('upload')">Upload new material</el-button>
        </div>
      </div>
    </div>
    <div class="r-content">
      <el-image :src="src.image.part3" loading="eager" fit="cover"></el-image>
    </div>
  </div>
</template>

<script setup>
import axios from "@/utils/axios-plugin.js";
import {nextTick,ref} from "vue";
import {url,src} from "@/config.js";
import {ElMessage} from "element-plus";

const loading = ref(false)

const emit = defineEmits(["upload","data"])
const handleGenerate = () => {
  loading.value = true
  axios.post(url.imagesTextMatch)
      .then((res)=>{
        nextTick(()=>{
          emit("data",res)
        })
      }).catch(err=>{
        ElMessage.warning({
          message: err,
        })
  })
  loading.value = false
}
</script>

<style lang="scss" scoped>
.publicity-part{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  .l-content{
    h1{
      width: max-content;
      font-size: 4rem;
    }
    .btn-box{
      display: flex;
      justify-content: flex-start;
      margin: 3rem 0;
      :deep(.el-button){
        width: auto;
        height: 3rem;
        font-size: larger;
        font-weight: bold;
      }
    }
    height: 100%;
    margin: auto 0;
  }
  .r-content{
    max-width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>