<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="22">
      <el-card  style=" border-radius: 20px;">
        <template #header>
          <h2>投放点结果</h2>
        </template>
        <el-text type="info">
        投放点结果如下图所示:
          <div>
            蓝色网格代表所有的待选投放点
          </div>
          <div>
            红色网格代表了计算得到的最优投放点
          </div>

        </el-text>
        <el-divider/>
        <el-image src="http://43.137.46.85:82/file/sharedbike/outcome.jpeg" style="width: 100%; height: 100%;"/>

      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "LocationResult"
}
</script>

<style scoped>

</style>