<template>

<el-row>
    <el-col :span="12"><div class="grid-content ep-bg-purple" />
        <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>深圳数据开放平台</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>

    </el-col>
    <el-col :span="12"><div class="grid-content ep-bg-purple-light" />
        <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>QGIS</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="12"><div class="grid-content ep-bg-purple" />
        <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Pandas</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>

    </el-col>
    <el-col :span="12"><div class="grid-content ep-bg-purple-light" />
        <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Pytorch</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
    </el-col>
  </el-row>



</template>

<script>

</script>
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>