<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="22" style="height: 100%;">
      <el-card  style="border-radius: 20px; height: 400px;">
        <div id="mapbox"  style="height: 360px;"></div>

      </el-card>
    </el-col>
    <el-col :span="1"/>
  </el-row>

<el-row>
  <el-col :span="1"/>
    <el-col :span="14" style="height: 100%;">
      <el-card style="border-radius: 20px; ">
      <el-image style="margin-top: 5%;margin-bottom: 5%;" src="http://43.137.46.85:82/file/sharedbike/shenzhen.jpg" fit="cover" />
      </el-card>
    </el-col>
  <el-col :span="1"/>
    <el-col :span="7" style="height: 100%;">
      <el-card style="border-radius: 20px;">
        <h4>深圳市，简称“深”，别称鹏城。</h4>
        <el-divider />
        <span>深圳市是中国广东省辖地级市，国家计划单列市，超大城市，国务院批复确定的经济特区、全国性经济中心城市   和国家创新型城市，粤港澳大湾区核心引擎城市之一  。截至2022年,全市下辖9个区,总面积1997.47平方千米,常住人口1768.16万人  。
深圳市地处广东省南部，珠江口东岸，东临大亚湾和大鹏湾，西濒珠江口和伶仃洋，南与香港相连，北部与东莞、惠州接壤。位于北回归线以南，属亚热带季风气候，温润宜人，降水丰富  。</span>
        <el-divider />
        <span>
            深圳市是粤港澳大湾区四大中心城市之一、国家物流枢纽、国际性综合交通枢纽  、国际科技产业创新中心  、中国三大全国性金融中心之一，并全力建设中国特色社会主义先行示范区  、综合性国家科学中心 和全球海洋中心城市  。
</span>
        <el-divider />
        <span>
            深圳前身为广州府宝安县（新安县），建市之前属惠阳地区 。深圳之名始见史籍于明朝永乐八年(1410年),1979年,成立深圳市,1980年,成为中国设立的第一个经济特区，中国改革开放的窗口和新兴移民城市，创造了举世瞩目的“深圳速度”，被誉为“中国硅谷” 。
2022年,深圳市实现地区生产总值32387.68亿元,比上年增长3.3%  。
        </span>
      </el-card>
    </el-col>
  <el-col :span="1"/>
  </el-row>


</template>

<script>

import {onMounted} from "vue";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import {Bar} from "@antv/g2plot";
export default {
  name: 'SearchLocation',
  components: {
    // HelloWorld
  },
  data(){
    return {

    }
  },
  setup() {
    onMounted(() => {
      mapboxgl.accessToken = "pk.eyJ1Ijoid2F5bGFuZGl0ZSIsImEiOiJjbGN5bTFxZGoxcGNvM29yejZneHpyM2lzIn0.7Ep474qixaoKVxbSfwMmOg"; //这里请换成自己的token
      var map = new mapboxgl.Map({
        container: 'mapbox', // container id 绑定的组件的id
        style: 'mapbox://styles/mapbox/streets-v11', //地图样式，可以使用官网预定义的样式,也可以自定义
        center: [114.04,22.53], // 初始地图中心点位置
        zoom: 10,     // starting zoom 地图初始的层级
        language: 'zh-Hans', //地图语言
        pitch: 0,  //地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
        bearing: -17.6, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北
        antialias: true, //抗锯齿，通过false关闭提升性能
      });

    })
  },
}


</script>
