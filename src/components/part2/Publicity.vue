<template>
  <div class="publicity-part">
    <div class="l-content" v-loading="loading" element-loading-text="Loading...">
      <div style="position: relative;top: 20%">
        <h1>Image processing</h1>
        <h2>Upload your images and edit them at here</h2>
        <div class="btn-box">
          <el-upload
              v-model:file-list="fileList"
              :action="url.uploadBaseURL"
              :on-preview="handlePreview"
              :on-success="handleSuccess"
              :multiple="true"
              list-type="picture"
          >
            <template #file="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file['url']" alt="" @click="handlePreview(file)">
              <div class="el-upload-list__item-info">
                <a class="el-upload-list__item-name">
                  <i class="el-icon el-icon--document">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"></path>
                    </svg>
                  </i>
                  <span class="el-upload-list__item-file-name" :title="file['name']">{{file['name']}}</span>
                </a>
              </div>
              <label class="el-upload-list__item-status-label">
                <i class="el-icon el-icon--upload-success el-icon--check">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"></path>
                  </svg>
                </i>
              </label>
            </template>
            <el-button type="primary">Upload</el-button>
          </el-upload>
          <el-upload
            :disabled="true"
            class="upload-demo"
            v-model:file-list="filterFileList"
            :on-preview="handlePreview"
            list-type="picture"
          >
            <el-button @click="handleFilter">Start filtering</el-button>
          </el-upload>
          <el-switch v-model="switchValue" />
        </div>
      </div>
    </div>
    <div class="r-content">
      <el-image :src="src.image.part2" loading="eager" fit="cover"></el-image>
    </div>
    <el-dialog v-model="dialogVisible">
      <img style="width: 100%" :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {ElMessage} from "element-plus";
import axios from "@/utils/axios-plugin.js";
import {rootURL,url,src} from "@/config.js";

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const fileList = ref([])
const filterFileList = ref([])
const loading = ref(false)
const switchValue = ref(true)
const handlePreview = (uploadFile)=>{
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}
const handleSuccess = ()=>{
  ElMessage({
    message: 'success',
    type: 'success',
  })
}

const handleFilter = ()=>{
  // filterFileList.value = [
  //   {name:'123.png',url:rootURL + '/upload/static/pic/20240609135955.png'},
  //   {name:'145.png',url:rootURL + '/upload/static/pic/20240609135955.png'}
  // ]
  // let picPathList = []
  // fileList.value.map((item)=>{
  //   picPathList.push(item['response']['picPath'])
  // })
  // {'fileList':JSON.stringify(picPathList)}
  loading.value = true
  if (switchValue.value){
    // 快速筛选
    axios.post(url.imgProcessFast,{'fileList':JSON.stringify(fileList.value)})
      .then((res)=>{
        loading.value = false
        console.log(res)
        let temp = []
        res.map((item)=>{
          temp.push({name:`${Math.floor(Math.random()*99999999999999)}.png`,url:rootURL + item})
        })
        filterFileList.value = temp
        if (res.length <= 0) {
          ElMessage({
            message: 'No result',
            type: 'warning',
          })
        }
      }).catch(()=>{
        ElMessage({
            message: 'No result',
            type: 'warning',
          })
    })
  } else {
    // 普通筛选
    axios.post(url.imgProcess,{'fileList':JSON.stringify(fileList.value)})
      .then((res)=>{
        loading.value = false
        console.log(res)
        let temp = []
        res.map((item)=>{
          temp.push({name:`${Math.floor(Math.random()*99999999999999)}.png`,url:rootURL + item})
        })
        filterFileList.value = temp
        if (res.length <= 0) {
          ElMessage({
            message: 'No result',
            type: 'warning',
          })
        }
      }).catch(()=>{
        ElMessage({
            message: 'No result',
            type: 'warning',
          })
    })
  }
}
</script>

<style lang="scss" scoped>
.publicity-part{
  width: 100%;
  min-height: 90vh;
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
      .upload-demo{
        margin: 0 1rem;
      }
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