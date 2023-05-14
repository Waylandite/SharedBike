<template>

  <el-row class="tac">
    <el-col :span="2">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          style="margin-top: 10%; position: fixed; "
      >
        <el-menu-item index="1">
          <el-icon><PieChart /></el-icon>
          <span>单车使用量</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Timer /></el-icon>
          <span>骑行时长</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Place /></el-icon>
          <span>骑行距离</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Location /></el-icon>
          <span>出发地和停车地</span>
        </el-menu-item>
      </el-menu>

    </el-col>

    <el-col :span="22">
      <RouterView></RouterView>
    </el-col>
  </el-row>
  
  
</template>
  
<script lang="ts" setup>
import {
  Location,
  Timer,
  Place,
  PieChart,
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
const router = useRouter();

const handleSelect = (key: string, keyPath: string[]) => {

  if(key=="1"){
    router.push('/CycleRule/Usage')
  }
  else   if(key=="2"){
    router.push('/CycleRule/Duration')
  }
  else   if(key=="3"){
    router.push('/CycleRule/Distance')
  }
  else   if(key=="4"){
    router.push('/CycleRule/Location')
  }
  else{

  }

}

</script>
  
  




  
  
<style>

</style>