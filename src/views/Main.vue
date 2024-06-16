<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </el-container>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<style lang="scss" scoped>
:deep(.el-header){
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  font-weight: bold;
  opacity: 0.7;
}
</style>