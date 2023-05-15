<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="23">
      <el-card style="border-radius: 20px;height: 350px;">
        <el-row>
          <el-col :span="12">
            <el-card style="border-radius: 20px; height: 310px;">
              <div id="container"></div>
            </el-card>
          </el-col>
          <el-col :span="1"/>
          <el-col :span="11">
            <el-card style="border-radius: 20px; height: 310px;">
              <div id="container2"></div>
            </el-card>
          </el-col>


        </el-row>

      </el-card>

      <el-divider/>

      <el-card style="border-radius: 20px;height: 350px;">

        <div style="">
          <el-text  size="large">骑行距离规律</el-text>
        </div>
        <el-divider/>
        <el-text  size="large" type="info">
          大部分订
          单的骑行距离集中在 0-1.5km 内结束，说明共享单车的使用场景一般针对于短途出行，主
          要承担接驳的作用
        </el-text>

      </el-card>




    </el-col>

  </el-row>
</template>

<script>
import { Chart } from '@antv/g2';
import {onMounted} from "vue";

export default {
  name: "CycleDuration",
  setup(){
    onMounted(()=>{
      const data = [
        { distance: '0-0.5', usage:  2659171},
        { distance: '0.5-1.0', usage: 3287824 },
        { distance: '1.0-1.5', usage:  1628360},
        { distance: '1.5-2.0', usage:  756697},
        { distance: '2.0-2.5', usage:  389654},

      ];
      const chart1 = new Chart({
        container: 'container',
        autoFit: true,
        height: 260,
        width: 300,
      });

      chart1.data(data);
      chart1.scale({
        distance: {
          range: [0, 1],
        },
        usage: {
          alias: '订单量',
          nice: true,
        },
      });

      chart1.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart1.axis('usage', {
        label: {
          formatter: (val) => {
            return val + '次';
          },
        },
      });
      chart1.axis('distance', {
        label: {
          formatter: (val) => {
            return val + 'km';
          },
        },
      });
      chart1
          .line()
          .position('distance*usage')
          .shape('smooth');

      chart1
          .point()
          .position('distance*usage')
          .shape('circle');

      chart1.render();
      const data2 = [
        { distance: '0-0.5', percent:  27},
        { distance: '0.5-1.0', percent: 32 },
        { distance: '1.0-1.5', percent:  16},
        { distance: '1.5-2.0', percent:  7},
        { distance: '2.0-2.5', percent: 3 },
      ];
      const chart2 = new Chart({
        container: 'container2',
        autoFit: true,
        height: 260,
        width: 300,
      });

      chart2.data(data2);
      chart2.scale({
        percent: {
          alias: '订单占比',
          nice: true,
        },
      });

      chart2.tooltip({
        showCrosshairs: true,
        shared: true,
      });
      chart2.axis('distance', {
        label: {
          formatter: (val) => {
            return val + 'km';
          },
        },
      });

      chart2.axis('percent', {
        label: {
          formatter: (val) => {
            return val+ '%';
          },
        },
      });

      chart2.interval().position('distance*percent');
      chart2.render();

    })
  }
}
</script>

<style scoped>

</style>
