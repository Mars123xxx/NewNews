<template>
  <div class="publicity-part">
    <div class="center-box">
      <h1 class="text-center">News Text Generation</h1>
      <h2 class="text-center">Generate news text by entering information</h2>
      <div class="btn-box">
        <el-button type="primary" @click="$emit('start')">Start to generate</el-button>
        <el-button>Import result</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
//.publicity-part::before{
//    content:'';
//    position:absolute;
//    width: 100%;
//    height: 90vh;
//    background: transparent url("https://cdn.nzxf.net/bucket/v2-fda5ab4414155c0c171ac5f87bc82ded_r.jpg") no-repeat fixed center;
//    filter:blur(3px);
//    z-index:-1;
//    background-size:cover;
//}

.publicity-part{
  width: 100%;
  height: 100vh;
  //position: relative;
  display: flex;
  justify-content: center;
  .center-box{
    padding: 5rem 0;
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h1{
      width: max-content;
      //color: aliceblue;
      font-size: 4rem;
    }
    //h2{
      //color: aliceblue;
    //}
    .text-center{
      text-align: center;
    }
    .btn-box{
      display: flex;
      justify-content: space-around;
      :deep(.el-button){
        width: auto;
        height: 3rem;
        font-size: larger;
        font-weight: bold;
      }
    }
  }
}
</style>