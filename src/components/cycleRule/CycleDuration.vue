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
          <el-text  size="large">骑行时长规律</el-text>
        </div>
        <el-divider/>
        <el-text  size="large" type="info">
          工作日和非工作日的使用量区别主要集中于早晚高峰，其他时间段的使用量区别并不是很大。
          非工作日早晚高峰的使用量明显低于工作日早晚高峰的使用量。可能的原因是对于非工作日
          来说，居民不需要上下班通勤，所以早晚高峰上使用量会下降很多
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
        { time: '0', 订单量: 135122 },
        { time: '1', 订单量: 136098 },
        { time: '2', 订单量: 363384 },
        { time: '3', 订单量: 642918 },
        { time: '4', 订单量: 827778 },
        { time: '5', 订单量: 865998},
        { time: '6', 订单量: 831997 },
        { time: '7', 订单量: 749012 },
        { time: '8', 订单量: 665401 },
        { time: '9', 订单量: 568578 },
        { time: '10', 订单量:514099  },
        { time: '11', 订单量: 415387 },
        { time: '12', 订单量:  357067},
        { time: '13', 订单量: 302527 },
        { time: '14', 订单量:  261662},
        { time: '15', 订单量:  221515},
        { time: '16', 订单量:  194087},
        { time: '17', 订单量:  165410},
        { time: '18', 订单量:  145123},
        { time: '19', 订单量:  125072},
        { time: '20', 订单量:  110614},
        { time: '21', 订单量:  96693},
        { time: '22', 订单量:  86487},
        { time: '23', 订单量:  76334},
        { time: '24', 订单量:  67669},
        { time: '25', 订单量:  60659},
        { time: '26', 订单量:  54395},
        { time: '27', 订单量:  48066},
        { time: '28', 订单量:  43637},
        { time: '29', 订单量:  38791},
        { time: '30', 订单量:  34837},
        { time: '31', 订单量:  31196},
        { time: '32', 订单量:  28094},
        { time: '33', 订单量:  25623},
        { time: '34', 订单量:  23598},
        { time: '35', 订单量:  21622},
        { time: '36', 订单量:  20006},
        { time: '37', 订单量:  18458},
        { time: '38', 订单量:  17045},
        { time: '39', 订单量:  15504},
        { time: '40', 订单量:  14485},
        { time: '41', 订单量:  13664},
        { time: '42', 订单量:  12357},
        { time: '43', 订单量:  11785},
        { time: '44', 订单量:  11150},
        { time: '45', 订单量:  10630},
        { time: '46', 订单量:  10034},
        { time: '47', 订单量:  9024},
        { time: '48', 订单量:  8662},
        { time: '49', 订单量:  8437},




      ];
      const chart1 = new Chart({
        container: 'container',
        autoFit: true,
        height: 260,
        width: 300,
      });

      chart1.data(data);
      chart1.scale({
        time: {
          range: [0, 1],
        },
        订单量: {
          nice: true,
        },
      });

      chart1.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart1.axis('订单量', {
        label: {
          formatter: (val) => {
            return val + '次';
          },
        },
      });
      chart1.axis('time', {
        label: {
          formatter: (val) => {
            return val + 'm';
          },
        },
      });
      chart1
          .line()
          .position('time*订单量')
          .shape('smooth');

      chart1
          .point()
          .position('time*订单量')
          .shape('circle');

      chart1.render();
      const data2 = [
        { time: '0m-5m', 订单占比: 22 },
        { time: '5m-10m',  订单占比:  36},
        { time: '10m-15m',  订单占比: 18 },
        { time: '15m-20m',  订单占比:  7},
        { time: '20m-25m',  订单占比:  4},
        { time: '25m-30m',  订单占比:  3},
        { time: '30m-35m',  订单占比:  1},
      ];
      const chart2 = new Chart({
        container: 'container2',
        autoFit: true,
        height: 260,
        width: 300,
      });

      chart2.data(data2);
      chart2.scale({
        time: {
          range: [0, 1],
        },
        订单占比: {
          nice: true,
        },
      });

      chart2.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart2.axis('订单占比', {
        label: {
          formatter: (val) => {
            return val+ '%';
          },
        },
      });

      chart2.interval().position('time*订单占比');
      chart2.render();

    })
  }
}
</script>

<style scoped>

</style>