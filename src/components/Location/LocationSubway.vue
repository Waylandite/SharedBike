<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="22">
      <el-card  style=" border-radius: 20px;">
        <template #header>
          <h2>投放点结果与地铁站点</h2>
        </template>
        <el-text type="info">
          投放点结果与深圳市地铁站点对比如下图所示:



        </el-text>
        <el-divider/>

        <el-image src="http://43.137.46.85:82/file/sharedbike/subway.jpeg" style="width: 100%; height: 100%"/>
        <div>
          从结果我们可以看出，计算得到的投放点集中分布在地铁站店附近，验证了投放结果计算的正确性
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "LocationSubway"
}
</script>

<style scoped>

</style>