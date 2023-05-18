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
          <span>求解策略</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Document /></el-icon>
          <span>求解结果</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Place /></el-icon>
          <span>地铁站点验证</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Timer /></el-icon>
          <span>公交站点验证</span>
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

    router.push('/LocationInfo')
  }
  else   if(key=="2"){
    router.push('/LocationResult')
  }
  else   if(key=="3"){
    router.push('/LocationSubway')
  }
  else   if(key=="4"){
    router.push('/LocationBus')
  }
  else{

  }

}

</script>