<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="22" style="height: 100%;">

  <el-card style="border-radius: 20px; ">
    <el-steps :active="5" align-center>
      <el-step title="爬取数据" description="从深圳市数据开放平台爬取达单车数据，以及从实验室申请深圳市相关数据" />
      <el-step title="数据清理" description="清洗数据中的异常值，验证数据准确性，确保后续研究的可行性" />
      <el-step title="分析居民出现规律" description="对居民单车数据进行分析，总结居民出行规律" />
      <el-step title="优化投放点选址" description="通过引入智能蚁群算法奖公共交通分布数据纳入考量，得到更优投放点" />
      <el-step title="对热门地块进行需求预测" description="选择热门Top10地块进行单车需求量的预测，得到准确度较高的模型" />
      <el-step title="构建前端系统展示" description="整理研究成果，运用Web前端技术，对研究成果进行可视化展示" />
    </el-steps>

  </el-card>
      <el-divider />

  <el-card style="border-radius: 20px; margin-left: 10%;margin-right: 10%;">

    <el-timeline>
      <el-timeline-item  center timestamp="2022/5/12" placement="top" type="info">
        <el-card>
          <h4>项目立项成功</h4>
          <p>阅读相关书籍，了解研究领域当前的现状和方法，
            阅读相关书籍，了解研究领域当前的现状和方法
          </p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item  center timestamp="2022/9/3" placement="top">
        <el-card>
          <h4>单车数据处理</h4>
          <p>整合数据，进行初步分析，完成数据预处理（包括数据清洗及整理）。
          </p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item  center timestamp="2022/10/10" placement="top">
        <el-card>
          <h4>探究居民单车出行规律</h4>
          <p>运用pandas库进行居民出现规律数据分析</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item  center timestamp="2022/12/6" placement="top">
        <el-card>
          <h4>建立需求预测模型</h4>
          <p>建立CNN需求预测模型</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item  center timestamp="2023/2/6" placement="top">
        <el-card>
          <h4>建立投放点选址模型</h4>
          <p>建立投放模型，多次测试评估合理性。完成论文的主要研究内容。</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item  center timestamp="2023/4/6" placement="top">
        <el-card>
          <h4>求解调度策略</h4>
          <p>建立投放模型，多次测试评估合理性。完成论文的主要研究内容。</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item   center timestamp="2023/5/1" placement="top" type="success">
        <el-card>
          <h4>建立研究成果展示平台</h4>
          <p>搭建研究成果展示平台</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-card>

    </el-col>
    <el-col :span="1"/>
  </el-row>
  </template>

<script>

</script>