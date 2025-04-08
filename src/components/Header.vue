<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
<!--      <el-menu-item>-->
<!--        -->
<!--      </el-menu-item>-->
      <img
            src="@/assets/images/logo.png"
            alt="logo"
        />
      <div class="flex-grow"></div>
      <el-menu-item v-for="(menu) in menuData" :key="menu.label" :index="menu.path" :id="menu.tag">{{menu.label}}</el-menu-item>
    </el-menu>

    <el-tour v-model="open">
        <el-tour-step
          v-for="menu in menuData"
          :target="'#'+menu.tag"
          :key="menu.label"
          :title="menu.label"
          :description="menu.description"
        />
        <template #indicators="{ current, total }">
          <span>{{ current + 1 }} / {{ total }}</span>
        </template>
      </el-tour>


</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const open = ref(true);

const menuData = ref([
  {
    "tag":"A",
    "label":"News Text Generation",
    "path":"/part1",
    'description': 'Generate news text by entering information'
  },
  {
    "tag":"B",
    "label":"Images Processing",
    "path":"/part2",
    'description': 'Upload your images and edit them at here'
  },
  {
    "tag":"C",
    "label":"Images and Text Match",
    "path":"/part3",
    'description': 'Upload images and text to generate news'
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