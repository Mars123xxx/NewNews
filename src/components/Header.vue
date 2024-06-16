<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item>
        <img
            style="width: 100px;"
            src="@/assets/images/logo.png"
            alt="logo"
        />
      </el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item v-for="menu in menuData" :key="menu.label" :index="menu.path">{{menu.label}}</el-menu-item>
    </el-menu>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const menuData = ref([
  {
    "label":"News Text Generation",
    "path":"/part1"
  },
  {
    "label":"Images Processing",
    "path":"/part2"
  },
  {
    "label":"Images and Text Match",
    "path":"/part3"
  }
])
const router = useRouter()
const activeIndex = ref(router.currentRoute.value.path)
const handleSelect = (key) => {
  router.push(key)
}
</script>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
</style>