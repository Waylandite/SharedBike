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
          <el-icon><Location /></el-icon>
          <span>CNN介绍</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Place /></el-icon>
          <span>时序步长</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Timer /></el-icon>
          <span>训练轮数</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><User /></el-icon>
          <span>预测结果展示</span>
        </el-menu-item>
      </el-menu>

    </el-col>

    <el-col :span="22">
      <RouterView></RouterView>
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {
  Document,
  Location,
  Finished,
  User,
  Timer,
  Place,

} from '@element-plus/icons-vue'
const router = useRouter();

const handleSelect = (key: string, keyPath: string[]) => {

  if(key=="1"){

    router.push('/forecast/Intro')
  }
  else   if(key=="3"){
    router.push('/forecast/step')
  }
  else   if(key=="4"){
    router.push('/forecast/epoch')
  }
  else if (key=="5"){
    router.push('/forecast/outcome')
  }
  else{

  }

}

</script>