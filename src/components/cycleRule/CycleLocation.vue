<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="23">
      <el-card style="border-radius: 20px;height: 800px;">
        <el-row style="height: 100%;">
            <el-col :span="14" style="height: 700px;">
              <el-card style="border-radius: 20px; height: 350px;">
                <template #header>
                  热门停车地
                </template>
                <div id="container"></div>
              </el-card>

              <el-divider/>
              <el-card style="border-radius: 20px; height: 350px;">
                <template #header>
                  热门出发地
                </template>
                <div id="container1"></div>
              </el-card>
            </el-col>
          <el-col :span="1"/>
            <el-col :span="9">
              <el-card style=" border-radius: 20px;height: 100%;">

                <div style="">
                  <el-text  size="large">出发/停车地规律</el-text>
                </div>
                <el-divider/>
                <el-text  size="large" type="info">
                  对于白天的第一个高峰即早上7点钟到9点钟而言，我们统计了订单起始点和出发点的情况，结果发现对于两地来说占比最大的都是居民住地，这可能是由于城市中居住用地占比较大，大部分共享单车都分布于居民生活区附近。但总体而言， 停车点的地块分布比出发点更加均匀， 对于出发地来说，居住用地的占比达到了 60%以上，而对于停车地来说，居住用地的占比不到 45%。这说明了对于早上 8 点钟的出行规律而言，大部分订单从家附近出发，去向不同的目的地，如工业用地与交通服务设施等
                  <el-divider/>
                  <div>
                    而对于白天的第二个高峰即晚上18点钟到20点钟。我们得到的结果与第一个早高峰相同的是，占比最大的仍然是居民住地，猜测可能是居民住地周边空地范围较大，大多数单车停放地聚集于居民住地附近。不同的是，对于停车地而言，晚高峰的分布比较集中，与出发地分布类似，不存在分散规律。说明对于晚高峰来说，居民的目的性比早高峰而言更加统一。

                  </div>
                  <el-divider/>
                  此外，我们比较了工作日和非工作日情况下两处地点的分布，结果表明。在非工作日下，停车地中绿地和公园分布的占比显著增大，表明在非工作日下，居民更喜欢骑行共享单车去往公园等你进行娱乐活动。

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
        { category: 'R居住用地', num: 87 },
        { category: 'M工业用地', num: 39 },
        { category: '绿地与广场', num: 26 },
        { category: '商业服务业设施用地', num: 23},
        { category: '公共管理与公共服务设施用地', num: 15 },
        { category: '物流仓储用地', num: 3 },
        { category: '区域交通设施用地', num: 3 },
        { category: '公共设施用地', num: 3 },
        { category: 'H4特殊用地', num: 1 },
      ];
      const chart1 = new Chart({
        container: 'container',
        autoFit: true,
        height: 260,
        width: 500,

      });

      chart1.data(data);
      chart1.scale({
        category: {
          range: [0, 1],
        },
        num: {
          alias: '地点数量',
          nice: true,
        },
      });

      chart1.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart1.axis('num', {
        label: {
          formatter: (val) => {
            return val + '个';
          },
        },
      });
      chart1.coordinate().transpose();
      chart1
          .interval()
          .position('category*num')




      chart1.render();
      const data2 = [
        { category: 'R居住用地', num: 107 },
        { category: 'M工业用地', num: 31 },
        { category: '绿地与广场', num: 25 },
        { category: '商业服务业设施用地', num: 11},
        { category: '公共管理与公共服务设施用地', num: 12 },
        { category: '物流仓储用地', num: 2 },
        { category: '区域交通设施用地', num: 4 },
        { category: '公共设施用地', num: 6 },
        { category: 'H4特殊用地', num: 2 },
      ];
      const chart2 = new Chart({
        container: 'container1',
        autoFit: true,
        height: 260,
        width: 500,
      });

      chart2.data(data2);
      chart2.scale({
        category: {
          range: [0, 1],
        },
        num: {
          alias: '地点数量',
          nice: true,
        },
      });

      chart2.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart2.axis('num', {
        label: {
          formatter: (val) => {
            return val + '个';
          },
        },
      });
      chart2.coordinate().transpose();
      chart2
          .interval()
          .position('category*num')




      chart2.render();

    })
  }
}
</script>

<style scoped>

</style>