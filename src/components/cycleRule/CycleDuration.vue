
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
        { time: '0', usage: 135122 },
        { time: '1', usage: 136098 },
        { time: '2', usage: 363384 },
        { time: '3', usage: 642918 },
        { time: '4', usage: 827778 },
        { time: '5', usage: 865998},
        { time: '6', usage: 831997 },
        { time: '7', usage: 749012 },
        { time: '8', usage: 665401 },
        { time: '9', usage: 568578 },
        { time: '10', usage:514099  },
        { time: '11', usage: 415387 },
        { time: '12', usage:  357067},
        { time: '13', usage: 302527 },
        { time: '14', usage:  261662},
        { time: '15', usage:  221515},
        { time: '16', usage:  194087},
        { time: '17', usage:  165410},
        { time: '18', usage:  145123},
        { time: '19', usage:  125072},
        { time: '20', usage:  110614},
        { time: '21', usage:  96693},
        { time: '22', usage:  86487},
        { time: '23', usage:  76334},
        { time: '24', usage:  67669},
        { time: '25', usage:  60659},
        { time: '26', usage:  54395},
        { time: '27', usage:  48066},
        { time: '28', usage:  43637},
        { time: '29', usage:  38791},
        { time: '30', usage:  34837},
        { time: '31', usage:  31196},
        { time: '32', usage:  28094},
        { time: '33', usage:  25623},
        { time: '34', usage:  23598},
        { time: '35', usage:  21622},
        { time: '36', usage:  20006},
        { time: '37', usage:  18458},
        { time: '38', usage:  17045},
        { time: '39', usage:  15504},
        { time: '40', usage:  14485},
        { time: '41', usage:  13664},
        { time: '42', usage:  12357},
        { time: '43', usage:  11785},
        { time: '44', usage:  11150},
        { time: '45', usage:  10630},
        { time: '46', usage:  10034},
        { time: '47', usage:  9024},
        { time: '48', usage:  8662},
        { time: '49', usage:  8437},




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
      chart1.axis('time', {
        label: {
          formatter: (val) => {
            return val + 'm';
          },
        },
      });
      chart1
          .line()
          .position('time*usage')
          .shape('smooth');

      chart1
          .point()
          .position('time*usage')
          .shape('circle');

      chart1.render();
      const data2 = [
        { time: '0m-5m', percent: 22 },
        { time: '5m-10m',  percent:  36},
        { time: '10m-15m', percent: 18 },
        { time: '15m-20m',  percent:  7},
        { time: '20m-25m',  percent:  4},
        { time: '25m-30m',  percent:  3},
        { time: '30m-35m',  percent:  1},
      ];
      const chart2 = new Chart({
        container: 'container2',
        autoFit: true,
        height: 230,
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
        showMarkers: false,
        shared: true,
      });

      chart2.axis('percent', {
        label: {
          formatter: (val) => {
            return val+ '%';
          },
        },
      });
      chart2.axis('time', {
        tickLine: null
      });

      chart2.interval().position('time*percent');
      chart2.render();

    })
  }
}
</script>

<style scoped>

</style>