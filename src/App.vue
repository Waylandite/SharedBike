

<template>
<el-affix>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0"  >共享单车与公共交通研究系统</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">研究介绍</el-menu-item>
    <el-menu-item index="2">市民骑行规律</el-menu-item>
    <el-menu-item index="3">优化投放点</el-menu-item>
    <el-menu-item index="4">骑行需求预测</el-menu-item>


  </el-menu>
</el-affix>

  <router-view></router-view>

</template>


<script lang="ts" setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router';
const activeIndex = ref('1')
const router = useRouter();
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if(key=="1"){
    router.push('/searchInfo/Location')
  }
  else   if(key=="2"){
    router.push('/cycleRule')
  }
  else   if(key=="3"){
    router.push('/location')
  }
  else   if(key=="4"){
    router.push('/forecast')
  }
  else{

  }
}




</script>


<style scoped>

.flex-grow {
  flex-grow: 1;
}
</style>
