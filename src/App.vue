

<template>
  <div class="common-layout">
<!--    <el-container>-->
<!--      <el-header>-->
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
<!--      </el-header>-->
<!--      <el-main >-->
        <router-view></router-view>
<!--      </el-main>-->
<!--    </el-container>-->
  </div>


</template>


<script lang="ts" setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router';
const activeIndex = ref('1')
const router = useRouter();
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if(key=="1"){
    router.push('/searchLocation')
  }
  else   if(key=="2"){
    router.push('/CycleRule/Usage')
  }
  else   if(key=="3"){
    router.push('/locationInfo')
  }
  else   if(key=="4"){
    router.push('/forecast/Intro')
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
