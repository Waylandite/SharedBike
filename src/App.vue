

<template>

  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0">共享单车与公共交通研究系统</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">研究介绍</el-menu-item>
    <el-menu-item index="2">市民骑行规律</el-menu-item>
<!--      <el-sub-menu index="2">-->
<!--        <template #title>市民骑行规律</template>-->
<!--        <el-menu-item index="2-1">骑行距离</el-menu-item>-->
<!--        <el-menu-item index="2-2">骑行订单时间</el-menu-item>-->
<!--        <el-sub-menu index="2-3">-->
<!--          <template #title>骑行热点分析</template>-->
<!--          <el-menu-item index="2-3-1">早晨8点</el-menu-item>-->
<!--          <el-menu-item index="2-3-2">中午12点</el-menu-item>-->
<!--          <el-menu-item index="2-3-3">晚上8点</el-menu-item>-->
<!--        </el-sub-menu>-->
<!--      </el-sub-menu>-->
    <el-menu-item index="3">骑行需求预测</el-menu-item>
    <el-menu-item index="4">优化投放点</el-menu-item>
    <el-menu-item index="5">调度策略</el-menu-item>

  </el-menu>

  <router-view></router-view>

</template>


<script lang="ts" setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router';
const activeIndex = ref('1')
const router = useRouter();
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if(key==1){
    router.push('/')
  }
  else   if(key==2){
    router.push('/map')
  }
  console.log(key, keyPath)
}

</script>


<style scoped>

.flex-grow {
  flex-grow: 1;
}
</style>
