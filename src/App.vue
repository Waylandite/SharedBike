

<template>

  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>

  <el-row >
    <el-col :span="2"><div class="grid-content ep-bg-purple" />


  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>

<!--  <el-menu-->
<!--      :default-active="activeIndex"-->
<!--      class="el-menu-demo"-->
<!--      mode="horizontal"-->
<!--      @select="handleSelect"-->
<!--  >-->
<!--    <el-menu-item index="1">需求量预测结果</el-menu-item>-->
<!--    <el-menu-item index="2" >单车投放点优化结果</el-menu-item>-->
<!--    <el-sub-menu index="3">-->
<!--      <template #title>深圳市市民骑行规律</template>-->
<!--      <el-menu-item index="3-1">骑行时间分布</el-menu-item>-->
<!--      <el-menu-item index="3-2">骑行距离分布</el-menu-item>-->
<!--      <el-menu-item index="3-3">骑行热点分布</el-menu-item>-->
<!--    </el-sub-menu>-->

<!--  </el-menu>-->
    </el-col>
    <el-col :span="22"><div class="grid-content ep-bg-purple" />
      <router-view></router-view>
    </el-col>
  </el-row>

</template>


<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.flex-grow {
  flex-grow: 1;
}
</style>
