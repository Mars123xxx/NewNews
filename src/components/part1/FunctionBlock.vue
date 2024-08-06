<template>
  <div class="function-part flex" ref="TextGeneration">
    <div class="center-box flex">
      <h1 class="text-center">News Text Generation</h1>
      <div class="upload-demo flex" v-loading="loading.box" element-loading-text="Loading...">
        <div class="flex" style="flex-direction: column">
            <el-upload
                drag
                :action="url.audioUploadURL"
                multiple
                accept="mp3,wav"
                :on-success="handleSuccess"
              >
              <el-icon class="el-icon--upload"><upload-filled /></el-icon>
              <div class="el-upload__text">
                Drop audio file (less than 5mb) here or <em>click to upload</em>
              </div>
            </el-upload>
            <v-md-preview :text="result"></v-md-preview>
        </div>
      </div>
      <div v-loading="loading.form" element-loading-text="Loading...">
        <h3 class="text-center">Please input news elements follow instruction</h3>
        <div class="form-box flex">
          <el-form
              label-position="top"
              label-width="auto"
              :model="formData"
              style="width:70%"
          >
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="Time">
                  <el-input v-model="formData.time" :autosize="autosize" type="textarea" placeholder="Please enter the time when the event
occurred" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Person">
                  <el-input v-model="formData.person" :autosize="autosize" type="textarea" placeholder="Please enter the name of the individual or
group involved in the news event" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="Location">
                  <el-input v-model="formData.location" :autosize="autosize" type="textarea" placeholder="Specify the place where the news event occurred or is related to"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Event">
                  <el-input v-model="formData.event" :autosize="autosize" type="textarea" placeholder="Describe the main event or news story you want to generate the article about"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="Outline">
              <el-input v-model="formData.outline" maxlength="9999" :autosize="{minRows:10}" type="textarea" show-word-limit placeholder="Describe events in detail, with each layer doing what,when, where, why,which, and how"/>
            </el-form-item>
            <el-radio-group v-model="formData.radioText">
              <template v-for="(radio,idx) in radioList">
                <el-row v-if="idx%2===0" :gutter="20" style="margin: 0.8rem 0">
                  <el-col :span="12" style="padding: 0">
                    <el-radio border :label="radio.label" :value="radio.value"/>
                  </el-col>
                  <el-col :span="12">
                    <el-radio border :label="radioList[idx+1].label" :value="radioList[idx+1].value" v-if="idx < radioList.length-1"/>
                  </el-col>
                </el-row>
              </template>
            </el-radio-group>
            <div class="flex">
              <el-button type="primary" @click="handleGenerate">Generate</el-button>
            </div>
          </el-form>
        </div>
      </div>
      <div style="margin-top: 10rem" ref="ResultRef" v-if="text">
        <h1 class="text-center">Result</h1>
        <v-md-preview :text="text"></v-md-preview>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, nextTick, ref, watch,reactive} from "vue";
import axios from "@/utils/axios-plugin.js";
import {ElMessage} from "element-plus";
import { UploadFilled } from '@element-plus/icons-vue'
import {url} from '@/config.js'

const props = defineProps({
  flag:Number
})
const loading = reactive({
  form:false,
  box:false
})

const TextGeneration = ref()
const formData = ref({
  time:'',
  person:'',
  location:'',
  event:'',
  outline:'',
  radioText:''
})

const text = ref('')
const result = ref('')

const radioList = ref([
  {
    label:'Survey and Visit',
    value:'Survey and Visit',
  },
  {
    label:'Conference and Forum',
    value:'Conference and Forum',
  },
  {
    label:'Achievement Report',
    value:'Achievement Report',
  },
  {
    label:'Opening / Closing Ceremony',
    value:'Opening / Closing Ceremony',
  },
  {
    label:'Campus Style',
    value:'Campus Style',
  },
  {
    label:'Activity Summary',
    value:'Activity Summary',
  },
  {
    label:'Personal Interview',
    value:'Personal Interview',
  },
  {
    label:'Other',
    value:'Other',
  }
])

watch(()=>props.flag,()=>{
  TextGeneration.value.scrollIntoView({ block: 'start', behavior: 'smooth' })
})
const autosize = computed(()=>{
  return { minRows:3 }
})

const ResultRef = ref()

const handleGenerate = ()=>{
  loading.form = true
  axios.post(url.textGeneration,formData.value)
      .then((response)=>{
         loading.form = false
         text.value = response.text
         ElMessage({
            message: 'success',
            type: 'success',
          })
         nextTick(()=>{
           ResultRef.value.scrollIntoView({ block:'start', behavior:'smooth' })
         })
    })
}

const handleSuccess = (resp) => {
  loading.box = true
  console.log(resp.text)
  result.value = resp.text
  loading.box = false
  ElMessage({
    message: 'success',
    type: 'success',
  })
}
</script>

<style lang="scss" scoped>
.function-part{
  width: 100%;
  min-height: 100vh;
  .center-box{
    width: 60%;
    flex-direction: column;
    h1{
      font-size: 2rem;
    }
    .text-center{
      text-align: center;
    }
    :deep(.el-button){
      width: 95%;
      height: 3rem;
      font-size: larger;
      font-weight: bold;
    }
    .upload-demo{
      max-width: 100%;
      :deep(.el-upload){
        width: 500px;
      }
    }
  }
  :deep(.el-textarea__inner) {
    background-color: #F2F3F5;
  }
  :deep(.el-textarea__inner)::-webkit-input-placeholder {
    font-size: 0.9rem;
  }
  :deep(.el-radio-group){
    all: unset !important;
  }
}
.flex{
  display: flex;
  justify-content: center;
}
</style>