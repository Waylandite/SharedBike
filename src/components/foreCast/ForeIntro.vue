<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="22" style="height: 100%;">

          <el-card style="border-radius: 20px;height: 250px;">
            <template #header>
              <h2>CNN模型简介</h2>
            </template>
            <el-text style="font-size: 16px;" >
              CNN的全称是"Convolutional Neural Network"(卷积神经网络)。而神经网络是一种模仿生物神经网络（动物的中枢神经系统，特别是大脑）结构和功能的数学模型或计算模型。
              CNN(Convolutional Neural Network)是指卷积神经网络。卷积神经网络是从神经网络
              发展而来。与传统神经网络不同的是，它引入了感受野的概念，通过增加卷积层与池化层的
              结构， CNN 在提取事物特征方面有很好的表现，对于单车需求预测这一时序预测问题来说，
              他的需求量变化存在明显的规律， 所以使用 CNN 来进行共享单车需求量能具有很好的变现。
            </el-text>
          </el-card>

      <el-divider/>
      <el-card style="border-radius: 20px;height: 1200px;">
        <template #header>
          <h2>CNN模型组成</h2>
        </template>
        <el-text style="font-size: 16px;" >
          CNN 的结构可以分为 3 层
          <div style="margin-top: 10px;">
            1. 卷积层(Convolutional Layer) - 主要作用是提取特征。
          </div>
          <div>
            2. 池化层(Max Pooling Layer) - 主要作用是下采样(down sampling)，不会损坏识别结
            果。
          </div>
          <div>
            3. 全连接层(Fully Connected Layer) - 主要作用是通过全连接神经网络对目标温度进行
            拟合。
          </div>
          <div style="margin-top: 10px;">

          在本研究中，对于 CNN 模型的构建参照了很多论文，决定搭建两层卷积的 CNN 需求预测
          模型。 在卷积核维度的选择上，虽然在图像处理过程中并不常用偶数维度的卷积核，单由于
          本实验主要考虑卷积在时序预测上的表现，在参考了 CNN 时序预测的众多模型后，决定搭建
          如下图一 所示的卷积网络，图标中的 step 代表了时间窗选择的步长。 对于全连接层而言，我们需要把卷积后的维度进行转换，输入全
          连接网络进行求解，输出的维度为 1*1，即最后的预测需求量结果，具体表示如下图二。
          </div>
        </el-text>
        <el-divider/>
        <el-card style="border-radius: 20px; height: 400px;">
          <el-image
              style="height: 100%;width: 100%;"
              src="http://43.137.46.85:82/file/sharedbike/%E5%8D%B7%E7%A7%AF.png"
              fit="contain">

          </el-image>
        </el-card>
        <el-card style="margin-top: 10px; border-radius: 20px; height: 430px;">
        <el-image
            style="width: 100%;height: 400px;"
            src="http://43.137.46.85:82/file/sharedbike/%E5%85%A8%E8%BF%9E%E6%8E%A5%E5%B1%82.png"
            fit="contain">

        </el-image>
        </el-card>
      </el-card>

    </el-col>
    <el-col :span="1"/>
  </el-row>
</template>

<script>
export default {
  name: "ForecastIntro"
}
</script>

<style scoped>

</style>