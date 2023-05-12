<template>
    <el-row class="tac">
    <el-col :span="3">
      <h5 class="mb-2">研究内容介绍</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @select="handleSelect"
      >
      <el-menu-item index="1">
          <el-icon><Location /></el-icon>
          <span>研究区域</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><SwitchFilled /></el-icon>
          <span>研究方法</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <el-icon><Document /></el-icon>
          <span>研究工具</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Timer /></el-icon>
          <span>研究过程</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><User /></el-icon>
          <span>研究人员</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21">
    <RouterView></RouterView>
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {
  Document,
  Location,
  SwitchFilled,
  User,
  Timer,
} from '@element-plus/icons-vue'
const router = useRouter();

const handleSelect = (key: string, keyPath: string[]) => {
  console.log("点击了")
  console.log(key, keyPath)
  if(key=="1"){

    router.push('/searchLocation')
  }
  else   if(key=="2"){
    router.push('/searchMethod')
  }
  else   if(key=="3"){
    router.push('/searchTools')
  }
  else   if(key=="4"){
    router.push('/searchHistory')
  }
  else{
    router.push('/searchPeople')
  }

}

</script>