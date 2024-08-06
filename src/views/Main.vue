<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer></Footer>
  </el-container>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<style lang="scss" scoped>
</style>