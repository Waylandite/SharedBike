<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="22">
      <el-card style="border-radius: 20px;height: 350px;">
        <el-row>
          <el-col :span="14">
            <el-card style="border-radius: 20px; height: 310px;">
              <div id="container"></div>



            </el-card>
          </el-col>
          <el-col :span="1"/>
          <el-col :span="9">
            <div style="margin-top: 8%;">
              <el-text  size="large">单车使用量分析</el-text>
            </div>
            <el-divider/>
            <el-text  size="large" type="info">
              共享单车在 1 点钟到 5 点钟的夜间内使用量很少， 基本可以忽略不计。
              而在白天的使用量平均可以达到 15 万以上，说明了共享单车在居民的日常使用过程中使用
              非常广泛，证明了研究的必要性与合理性。对于白天的使用情况而言，使用量变化曲线主要
              集中于两个高峰， 分别是每天早晨 7 点钟到 9 点钟，与每天晚上 18 点钟到 20 点钟。在两个
              高峰之外的时间段中使用量较为平均。 推测可能出现早晚高峰的原因是居民上下班通勤的需
              要，在早晨， 居民需要从家赶往公司，需要使用共享单车进行接驳， 前往地铁或公交车站。
              而在傍晚，居民从公司下班后，需要从地铁站或公交车站回家也需要使用共享单车进行通勤。
            </el-text>
          </el-col>
        </el-row>

      </el-card>
      <el-divider/>
      <el-card style="border-radius: 20px;height: 350px;">
        <el-row>
          <el-col :span="14">
            <el-card style="border-radius: 20px; height: 310px;">
              <div id="container2"></div>



            </el-card>
          </el-col>
          <el-col :span="1"/>
          <el-col :span="9">
            <div style="margin-top: 10%;">
              <el-text  size="large">工作日和非工作日的使用量区别</el-text>
            </div>
            <el-divider/>
            <el-text  size="large" type="info">
              工作日和非工作日的使用量区别主要集中于早晚高峰，其他时间段的使用量区别并不是很大。
              非工作日早晚高峰的使用量明显低于工作日早晚高峰的使用量。可能的原因是对于非工作日
              来说，居民不需要上下班通勤，所以早晚高峰上使用量会下降很多
            </el-text>
          </el-col>
        </el-row>

      </el-card>


    </el-col>
    <el-col :span="1"/>
  </el-row>
</template>

<script>
import { Chart } from '@antv/g2';
import {onMounted} from "vue";

export default {
  name: "CycleUsage",
  setup(){
    onMounted(()=>{
      const data = [
        { hour: '0', week: '周一', usage: 15156 },
        { hour: '1', week: '周一', usage: 8174 },
        { hour: '2', week: '周一', usage: 5673 },
        { hour: '3', week: '周一', usage: 4330 },
        { hour: '4', week: '周一', usage: 4834 },
        { hour: '5', week: '周一', usage: 12084 },
        { hour: '6', week: '周一', usage:  47306},
        { hour: '7', week: '周一', usage: 152361 },
        { hour: '8', week: '周一', usage: 186775 },
        { hour: '9', week: '周一', usage: 78715 },
        { hour: '10', week: '周一', usage: 47354 },
        { hour: '11', week: '周一', usage: 52178 },
        { hour: '12', week: '周一', usage: 56283 },
        { hour: '13', week: '周一', usage:54957  },
        { hour: '14', week: '周一', usage: 50840 },
        { hour: '15', week: '周一', usage: 46752 },
        { hour: '16', week: '周一', usage: 54863 },
        { hour: '17', week: '周一', usage:96770  },
        { hour: '18', week: '周一', usage: 172733 },
        { hour: '19', week: '周一', usage: 137390 },
        { hour: '20', week: '周一', usage: 108841 },
        { hour: '21', week: '周一', usage: 89545 },
        { hour: '22', week: '周一', usage: 60320 },
        { hour: '23', week: '周一', usage: 29434 },
        { hour: '0', week: '周二', usage: 14788 },
        { hour: '1', week: '周二', usage: 7862 },
        { hour: '2', week: '周二', usage: 5680 },
        { hour: '3', week: '周二', usage: 4394},
        { hour: '4', week: '周二', usage: 4454},
        { hour: '5', week: '周二', usage: 11810 },
        { hour: '6', week: '周二', usage: 46263},
        { hour: '7', week: '周二', usage: 160908 },
        { hour: '8', week: '周二', usage: 202552 },
        { hour: '9', week: '周二', usage: 81689},
        { hour: '10', week: '周二', usage: 46858 },
        { hour: '11', week: '周二', usage: 50609 },
        { hour: '12', week: '周二', usage: 54830 },
        { hour: '13', week: '周二', usage:53177  },
        { hour: '14', week: '周二', usage: 50595},
        { hour: '15', week: '周二', usage: 45782 },
        { hour: '16', week: '周二', usage: 55835 },
        { hour: '17', week: '周二', usage:98575  },
        { hour: '18', week: '周二', usage: 174413 },
        { hour: '19', week: '周二', usage: 116594},
        { hour: '20', week: '周二', usage: 35910 },
        { hour: '21', week: '周二', usage: 49558},
        { hour: '22', week: '周二', usage: 41875 },
        { hour: '23', week: '周二', usage: 23401 },
        { hour: '0', week: '周三', usage: 12284 },
        { hour: '1', week: '周三', usage: 6835 },
        { hour: '2', week: '周三', usage: 5340 },
        { hour: '3', week: '周三', usage: 4117 },
        { hour: '4', week: '周三', usage: 3942 },
        { hour: '5', week: '周三', usage: 10233 },
        { hour: '6', week: '周三', usage: 40299 },
        { hour: '7', week: '周三', usage: 145324 },
        { hour: '8', week: '周三', usage: 181646 },
        { hour: '9', week: '周三', usage: 74951 },
        { hour: '10', week: '周三', usage: 43317 },
        { hour: '11', week: '周三', usage: 47611 },
        { hour: '12', week: '周三', usage: 51644 },
        { hour: '13', week: '周三', usage: 50259 },
        { hour: '14', week: '周三', usage: 48398 },
        { hour: '15', week: '周三', usage: 45690 },
        { hour: '16', week: '周三', usage: 56068 },
        { hour: '17', week: '周三', usage: 76698 },
        { hour: '18', week: '周三', usage: 130205 },
        { hour: '19', week: '周三', usage: 99562 },
        { hour: '20', week: '周三', usage: 76080 },
        { hour: '21', week: '周三', usage: 72341 },
        { hour: '22', week: '周三', usage: 51086 },
        { hour: '23', week: '周三', usage: 25959 },
        { hour: '0', week: '周四', usage: 13195 },
        { hour: '1', week: '周四', usage: 7147 },
        { hour: '2', week: '周四', usage: 5222 },
        { hour: '3', week: '周四', usage: 4218 },
        { hour: '4', week: '周四', usage: 4604 },
        { hour: '5', week: '周四', usage: 12016 },
        { hour: '6', week: '周四', usage: 46192 },
        { hour: '7', week: '周四', usage: 159966 },
        { hour: '8', week: '周四', usage: 202656 },
        { hour: '9', week: '周四', usage: 82978 },
        { hour: '10', week: '周四', usage: 48095 },
        { hour: '11', week: '周四', usage: 51830 },
        { hour: '12', week: '周四', usage: 56516 },
        { hour: '13', week: '周四', usage: 54381 },
        { hour: '14', week: '周四', usage: 44486 },
        { hour: '15', week: '周四', usage: 41652 },
        { hour: '16', week: '周四', usage: 58725 },
        { hour: '17', week: '周四', usage: 95229 },
        { hour: '18', week: '周四', usage: 166986 },
        { hour: '19', week: '周四', usage: 130560 },
        { hour: '20', week: '周四', usage: 105928 },
        { hour: '21', week: '周四', usage: 90109 },
        { hour: '22', week: '周四', usage: 62277 },
        { hour: '23', week: '周四', usage: 30521 },
        { hour: '0', week: '周五', usage: 15136 },
        { hour: '1', week: '周五', usage: 8110 },
        { hour: '2', week: '周五', usage: 6057 },
        { hour: '3', week: '周五', usage: 4466 },
        { hour: '4', week: '周五', usage: 4169 },
        { hour: '5', week: '周五', usage: 11747 },
        { hour: '6', week: '周五', usage: 39427 },
        { hour: '7', week: '周五', usage: 98795 },
        { hour: '8', week: '周五', usage: 162343 },
        { hour: '9', week: '周五', usage: 78314 },
        { hour: '10', week: '周五', usage: 49626 },
        { hour: '11', week: '周五', usage: 58074 },
        { hour: '12', week: '周五', usage: 64384 },
        { hour: '13', week: '周五', usage: 62966 },
        { hour: '14', week: '周五', usage: 60154 },
        { hour: '15', week: '周五', usage: 53070 },
        { hour: '16', week: '周五', usage: 52183 },
        { hour: '17', week: '周五', usage: 96088 },
        { hour: '18', week: '周五', usage: 170866 },
        { hour: '19', week: '周五', usage: 134094 },
        { hour: '20', week: '周五', usage: 103705 },
        { hour: '21', week: '周五', usage: 86898 },
        { hour: '22', week: '周五', usage: 65629 },
        { hour: '23', week: '周五', usage: 35233 },
        { hour: '0', week: '周六', usage: 13107 },
        { hour: '1', week: '周六', usage: 6456 },
        { hour: '2', week: '周六', usage: 5590 },
        { hour: '3', week: '周六', usage: 4658 },
        { hour: '4', week: '周六', usage: 4750 },
        { hour: '5', week: '周六', usage: 11022 },
        { hour: '6', week: '周六', usage: 38610 },
        { hour: '7', week: '周六', usage: 104631 },
        { hour: '8', week: '周六', usage: 119935 },
        { hour: '9', week: '周六', usage: 78383 },
        { hour: '10', week: '周六', usage: 58603 },
        { hour: '11', week: '周六', usage: 59712 },
        { hour: '12', week: '周六', usage: 61320 },
        { hour: '13', week: '周六', usage: 57435 },
        { hour: '14', week: '周六', usage: 57526 },
        { hour: '15', week: '周六', usage: 53556 },
        { hour: '16', week: '周六', usage: 58184 },
        { hour: '17', week: '周六', usage: 80890 },
        { hour: '18', week: '周六', usage: 118664 },
        { hour: '19', week: '周六', usage: 109282 },
        { hour: '20', week: '周六', usage: 89818 },
        { hour: '21', week: '周六', usage: 51162 },
        { hour: '22', week: '周六', usage: 51919 },
        { hour: '23', week: '周六', usage: 27943 },
        { hour: '0', week: '周日', usage: 7314 },
        { hour: '1', week: '周日', usage: 4832 },
        { hour: '2', week: '周日', usage: 3597 },
        { hour: '3', week: '周日', usage: 3362 },
        { hour: '4', week: '周日', usage: 3883 },
        { hour: '5', week: '周日', usage: 9254 },
        { hour: '6', week: '周日', usage: 29259 },
        { hour: '7', week: '周日', usage: 65269 },
        { hour: '8', week: '周日', usage: 76446 },
        { hour: '9', week: '周日', usage: 63112 },
        { hour: '10', week: '周日', usage: 54943 },
        { hour: '11', week: '周日', usage: 55279 },
        { hour: '12', week: '周日', usage: 49617 },
        { hour: '13', week: '周日', usage: 50847 },
        { hour: '14', week: '周日', usage: 52564 },
        { hour: '15', week: '周日', usage: 50240 },
        { hour: '16', week: '周日', usage: 59135 },
        { hour: '17', week: '周日', usage: 84800 },
        { hour: '18', week: '周日', usage: 102140 },
        { hour: '19', week: '周日', usage: 95368 },
        { hour: '20', week: '周日', usage: 84699 },
        { hour: '21', week: '周日', usage: 76137 },
        { hour: '22', week: '周日', usage: 56647 },
        { hour: '23', week: '周日', usage: 30744 },

      ];
      const chart1 = new Chart({
        container: 'container',
        autoFit: true,
        height: 310,
        width: 500,
      });

      chart1.data(data);
      chart1.scale({
        hour: {
          range: [0, 1],
        },
        usage: {
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
            return val;
          },
        },
      });

      chart1
          .line()
          .position('hour*usage')
          .color('week')
          .shape('smooth');

      chart1
          .point()
          .position('hour*usage')
          .color('week')
          .shape('circle');

      chart1.render();
      const data2 = [
        { hour: '0', week: '工作日', usage: 14111.8 },
        { hour: '1', week: '工作日', usage:7625.6},
        { hour: '2', week: '工作日', usage:5594.4 },
        { hour: '3', week: '工作日', usage: 4305.0},
        { hour: '4', week: '工作日', usage:4400.6 },
        { hour: '5', week: '工作日', usage:11578.0 },
        { hour: '6', week: '工作日', usage:43897.4  },
        { hour: '7', week: '工作日', usage:143470.8  },
        { hour: '8', week: '工作日', usage: 187194.4 },
        { hour: '9', week: '工作日', usage: 79329.4 },
        { hour: '10', week: '工作日', usage: 47050.0},
        { hour: '11', week: '工作日', usage:52060.4 },
        { hour: '12', week: '工作日', usage:56731.4  },
        { hour: '13', week: '工作日', usage:55148.0 },
        { hour: '14', week: '工作日', usage: 50894.6},
        { hour: '15', week: '工作日', usage: 46589.2 },
        { hour: '16', week: '工作日', usage: 55534.8},
        { hour: '17', week: '工作日', usage:92672.0 },
        { hour: '18', week: '工作日', usage: 163040.6 },
        { hour: '19', week: '工作日', usage:  123640.0},
        { hour: '20', week: '工作日', usage: 86092.8 },
        { hour: '21', week: '工作日', usage: 77690.2},
        { hour: '22', week: '工作日', usage: 56237.4 },
        { hour: '23', week: '工作日', usage:28909.6  },
        { hour: '0', week: '周末', usage: 10165.5 },
        { hour: '1', week: '周末', usage:5644.0 },
        { hour: '2', week: '周末', usage: 4593.5 },
        { hour: '3', week: '周末', usage: 4010.0},
        { hour: '4', week: '周末', usage:4316.5},
        { hour: '5', week: '周末', usage: 10138.0 },
        { hour: '6', week: '周末', usage:33934.5},
        { hour: '7', week: '周末', usage: 84950.0 },
        { hour: '8', week: '周末', usage:98190.5 },
        { hour: '9', week: '周末', usage:70747.5},
        { hour: '10', week: '周末', usage:56773.0 },
        { hour: '11', week: '周末', usage: 57495.5 },
        { hour: '12', week: '周末', usage: 55468.5 },
        { hour: '13', week: '周末', usage:54141.0 },
        { hour: '14', week: '周末', usage:55045.0},
        { hour: '15', week: '周末', usage:  51898.0},
        { hour: '16', week: '周末', usage:58659.5  },
        { hour: '17', week: '周末', usage: 82845.0 },
        { hour: '18', week: '周末', usage: 110402.0 },
        { hour: '19', week: '周末', usage:102325.0 },
        { hour: '20', week: '周末', usage: 87258.5},
        { hour: '21', week: '周末', usage:63649.5},
        { hour: '22', week: '周末', usage: 54283.0 },
        { hour: '23', week: '周末', usage:29343.5  },

      ];
      const chart2 = new Chart({
        container: 'container2',
        autoFit: true,
        height: 310,
        width: 500,
      });

      chart2.data(data2);
      chart2.scale({
        hour: {
          range: [0, 1],
        },
        usage: {
          nice: true,
        },
      });

      chart2.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart2.axis('usage', {
        label: {
          formatter: (val) => {
            return val;
          },
        },
      });

      chart2
          .line()
          .position('hour*usage')
          .color('week',(aVal) => {
            if (aVal === "周末") return  'red' ;
            return   'blue' ;
          })
          .shape('smooth');

      chart2
          .point()
          .position('hour*usage')
          .color('week',(aVal) => {
            if (aVal === "周末") return  'red' ;
            return   'blue' ;
          })
          .shape('circle');
      chart2.render();

    })
  }
}
</script>

<style scoped>

</style>