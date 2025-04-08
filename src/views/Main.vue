<template>
  <div>
    <el-header class="padding-0">
      <Header class="height-full"></Header>
    </el-header>
    <div class="main">
        <router-view></router-view>
    </div>
    <Footer></Footer>


  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
:deep(.el-header){
  position: fixed;
  height: 4.5rem;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
}

.main{
  margin-top: 4.5rem;
}
</style>