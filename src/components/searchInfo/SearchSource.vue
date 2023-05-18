<template>
<el-row>
  <el-col :span="1"/>
  <el-col :span="22" style="height: 100%;">
    <el-card  style="border-radius: 20px; height: auto;">

      <h3 style="margin-left: 40%;">深圳市政府数据开放平台</h3>
      <el-link type="primary"  href="https://opendata.sz.gov.cn/data/dataSet/toDataDetails/29200_00403627">
        深圳市政府数据开放平台提供了一系列的开放大数据，包含各行各业的数据，包括住建、卫生、旅游、气象、交通等行业的数据。
      </el-link>


      <el-divider />

      <el-image
        style="width: 100%; border-radius: 20px;"
        src="http://43.137.46.85:82/file/sharedbike/深圳市政府数据开放平台.png"
        fit="contain"/>
      <el-divider />
      <el-row >
        <el-col :span="11" style="height: 100%;">
        <el-card style="border-radius: 20px; ">
          <template #header>
            <div class="card-header">
              <h3>单车元数据</h3>
            </div>
          </template>
          <el-link type="primary"  href="https://opendata.sz.gov.cn/data/dataSet/toDataDetails/29200_00403627">
            单车元数据包含了深圳市单车的各种信息，包括单车的位置、单车的状态、单车的编号等。
          </el-link>
          <el-image
              style="width: 100%; border-radius: 20px;"
              src="http://43.137.46.85:82/file/sharedbike/单车元数据.png"
              fit="contain"/>

        </el-card>
        </el-col>
        <el-col :span="2"/>
        <el-col :span="11" style="height: 100%;">
      <el-card style="border-radius: 20px;">
        <template #header>
          <div class="card-header">
            <h3>地铁元数据</h3>
          </div>
        </template>
        <el-link type="primary"  href="https://opendata.sz.gov.cn/data/dataSet/toDataDetails/29200_00403627">
         地铁元数据包含了深圳市地铁的各种信息，包括地铁的位置、地铁的状态、地铁的编号等。
        </el-link>
        <el-image
            style="width: 100%; border-radius: 20px;"
            src="http://43.137.46.85:82/file/sharedbike/地铁站点.png"
            fit="contain"/>
      </el-card>
    </el-col>
      </el-row>
    </el-card>
    <el-divider />

    <el-card  style="border-radius: 20px; height: auto;">

      <h3 style="margin-left: 45%;">城市之光团队</h3>
      <el-link type="primary"  href="https://www.urbancomp.net/s/contact">
        城市之光团队是由中国地质大学(武汉)地理与信息工程学院姚尧博士领导的研究团队。
      </el-link>


      <el-divider />

      <el-image
          style="width: 100%; border-radius: 20px;"
          src="http://43.137.46.85:82/file/sharedbike/城市之光.png"
          fit="contain"/>
      <el-divider />
      <el-row >
        <el-col :span="11" style="height: 100%;">
          <el-card style="border-radius: 20px; ">
            <template #header>
              <div class="card-header">
                <h3>深圳市公共交通数据</h3>
              </div>
            </template>
            <el-link type="primary"  href="https://www.urbancomp.net/s/contact">
              深圳市公共交通数据包含了深圳市公共交通的各种信息，包括公共交通站点的位置，站点的线路，站点所属线路的编号等。
            </el-link>
            <el-image
                style="width: 100%; border-radius: 20px;"
                src="http://43.137.46.85:82/file/sharedbike/公共交通.png"
                fit="contain"/>

          </el-card>
        </el-col>
        <el-col :span="2"/>
        <el-col :span="11" style="height: 100%;">
          <el-card style="border-radius: 20px;">
            <template #header>
              <div class="card-header">
                <h3>深圳市土地利用数据</h3>
              </div>
            </template>
            <el-link type="primary"  href="https://www.urbancomp.net/s/contact">
              深圳市市土地利用数据包含了深圳市地块划分和地块的用途，包括地块的位置、地块的用途、地块的编号等。
            </el-link>
            <el-image
                style="width: 100%; height: 310px; border-radius: 20px;"
                src="http://43.137.46.85:82/file/sharedbike/地块.png"
                fit="contain"/>
          </el-card>
        </el-col>
      </el-row>
    </el-card>







  </el-col>
  <el-col :span="1"/>

</el-row>
</template>

<script>

export default {
  name: "SearchSource",
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>