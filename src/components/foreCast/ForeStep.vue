<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="23">
      <el-card style="border-radius: 20px;height: 100%;">
        <el-row>
          <el-col :span="14" style="height: 100%;">
            <el-card style="border-radius: 20px; height: 350px;">
              <template #header>
               时序步长对模型精度影响
              </template>
              <div id="container"></div>
            </el-card>

          </el-col>
          <el-col :span="1"/>
          <el-col :span="9">
            <el-card style="border-radius: 20px;height: 100%;">

              <div style="">
                <el-text  size="large">时序步长</el-text>
              </div>
              <el-divider/>
              <el-text  size="large" type="info">
                基于 CNN 模型， CNN 主要选择的参数是时序步长，时序步长主要是指时间窗的窗口长
                度， 也就是推理的依据数量。 选择地块号为 284 的地块对时序步长的选择进行分析。 将时序
                步长从 5 设置到 20，也就是从前 5 个小时进行预测和从前 20 个小时进行预测，观察其损失
                函数的变化趋势，组后得到的结果如图表 25。 研究可以发现，对于单车需求量数据来说，
                在时序步长较大的情况下，预测模型表现的效果更好一些。对于步长的选择来说，通过图表
                可以看出，将步长设置为 11 的条件下，模型精度最高，所以在本研究中时序步长设置为 11。
              </el-text>

            </el-card>
          </el-col>
        </el-row>

      </el-card>
    </el-col>

  </el-row>
</template>

<script>
import { Chart } from '@antv/g2';
import {onMounted} from "vue";

export default {
  name: "CycleLocation",
  setup(){
    onMounted(()=>{
      const data = [
        { step:'5',loss:0.1448},
        { step:'6',loss:0.1891},
        { step:'7',loss:0.2187},
        { step:'8',loss:0.1425},
        { step:'9',loss:0.0259},
        { step:'10',loss:0.0103},
        { step:'11',loss:0.0015},
        { step:'12',loss:0.0226},
        { step:'13',loss:0.0119},
        { step:'14',loss:0.0058},
        { step:'15',loss:0.0023},
        { step:'16',loss:0.0100},
        { step:'17',loss:0.0124},
        { step:'18',loss:0.0122},
        { step:'19',loss:0.0077},
        { step:'20',loss:0.0203}

      ];
      const chart1 = new Chart({
        container: 'container',
        autoFit: true,
        height: 260,
        width: 500,

      });

      chart1.data(data);
      chart1.scale({
        step: {
          range: [0, 1],
        },
        loss: {
          alias: '损失率',
          nice: true,
        },
      });

      chart1.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart1.axis('loss', {
        label: {
          formatter: (val) => {
            return ;
          },
        },
      });
      chart1
          .line()
          .position('step*loss')
          .shape('smooth');

      chart1
          .point()
          .position('step*loss')
          .shape('circle');




      chart1.render();


    })
  }
}
</script>

<style scoped>

</style>