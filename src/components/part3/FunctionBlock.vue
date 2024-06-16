<template>
<div class="function-part flex">
  <div class="center-box flex">
    <div ref="Match">
      <h1 class="text-center">Upload Images</h1>
      <h3 class="text-center">Upload the photos you want to match</h3>
      <el-upload
          v-model:file-list="fileList"
          class="upload-demo flex"
          :action="uploadBaseURL"
          :on-preview="handlePreview"
          :on-success="handleSuccess"
          :multiple="true"
          list-type="picture"
      >
        <el-button type="primary">Upload</el-button>
      </el-upload>
      <div class="TextBlock" v-loading="loading" element-loading-text="Loading...">
        <el-form>
          <h2 class="text-center" ref="NewsText">News Text</h2>
          <el-input type="textarea" :autosize="{minRows:15}" v-model="textData"></el-input>
        </el-form>
        <div class="flex">
          <el-button type="primary" @click="handleGenerate">Generate</el-button>
        </div>
      </div>
    </div>
    <div style="margin-top: 10rem" ref="ResultRef" v-if="!isEmpty">
      <h1 class="text-center">Result</h1>
      <el-card v-for="item in resultList" :key="item" class="resultItem" shadow="hover">
        <v-md-preview :text="item['text']"></v-md-preview>
        <div v-if="item['picPath']">
          <el-image :src="'http://bream-magical-scorpion.ngrok-free.app/'+item['picPath']" alt="" width="80" height="80"></el-image>
        </div>
      </el-card>
    </div>
  </div>
  <el-dialog v-model="dialogVisible">
    <img style="width: 100%" :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</div>
</template>

<script setup>
import {computed, nextTick, ref, watch} from "vue";
import {ElMessage} from "element-plus";
import axios from "@/utils/axios-plugin.js";
const props = defineProps({
  flag:Number,
  data:Array
})

const rootURL = "https://bream-magical-scorpion.ngrok-free.app/"
const uploadBaseURL = rootURL+"upload"

const textData = ref('')
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const Match = ref()
const NewsText = ref()
const ResultRef = ref()
const resultList = ref([])
const fileList = ref([])
const loading = ref(false)

watch(()=>props.flag,()=>{
  Match.value.scrollIntoView({ block: 'start', behavior: 'smooth' })
})

watch(()=>props.data,()=>{
  resultList.value = props.data
  nextTick(()=>{
    ResultRef.value.scrollIntoView({ block: 'start', behavior: 'smooth' })
  })
})

const handlePreview = (uploadFile)=>{
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}

const handleGenerate = ()=>{
  loading.value = true
  let picPathList = []
  fileList.value.map((item)=>{
    picPathList.push(item['response']['picPath'])
  })
  axios.post("/imagesTextMatchs",{'fileList':JSON.stringify(picPathList),'text':textData.value})
      .then((res)=>{
        loading.value = false
        resultList.value = res
        nextTick(()=>{
          ResultRef.value.scrollIntoView({ block: 'start', behavior: 'smooth' })
        })
      })
}

const handleSuccess = ()=>{
  ElMessage({
    message: 'success',
    type: 'success',
  })
  NewsText.value.scrollIntoView({ block: 'start', behavior: 'smooth' })
}

const isEmpty = computed(()=>{
  return resultList.value.length === 0
})
</script>

<style lang="scss" scoped>
.function-part{
  width: 100%;
  min-height: 100vh;
  .center-box{
    width: 40%;
    flex-direction: column;
    h1{
      font-size: 2rem;
    }
    .text-center{
      text-align: center;
    }
    .TextBlock{
      :deep(.el-form){
        margin: 3rem 0;
      }
      :deep(.el-button){
        width: 95%;
        height: 3rem;
        font-size: larger;
        font-weight: bold;
      }
    }
    .upload-demo{
      flex-direction: column;
    }
    :deep(.el-textarea__inner) {
      background-color: #F2F3F5;
    }

    .resultItem{
      margin: 1rem 0;
      :deep(.github-markdown-body){
        padding: 0 !important;
      }
    }
  }
}
.flex{
  display: flex;
  justify-content: center;
}
</style>