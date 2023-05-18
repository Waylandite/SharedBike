<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="22">
      <el-card  style="margin-top: 150px; border-radius: 20px;">
        <template #header>
          <h2>求解步骤</h2>
        </template>
        <el-steps :active="5" align-center>
          <el-step title="划分网格，获取待选投放点" description="将深圳市行政区按200m*200m划分六边形网格，得到投放点选择的基本单位" />
          <el-step title="计算投放点公共交通便利性评分" description="利用QGIS统计得到每个投放点内公交站点和地铁站点数量，计算公共交通便利性评分" />
          <el-step title="确定优化函数" description="对问题进行建模，得到需要求解的核心函数" />
          <el-step title="引入蚁群算法求解" description="通过引入智能蚁群算法奖公共交通分布数据纳入考量，计算得到投放点结果" />
          <el-step title="利用公共交通站点分布验证" description="将公共交通站点和地铁站点分布与投放点结果进行对比，验证投放点的正确性" />
        </el-steps>
      </el-card>
      <el-divider/>

    </el-col>
    <el-col :span="1"/>
  </el-row>
</template>

<script>
export default {
  name: "LocationInfo"
}
</script>

<style scoped>

</style>