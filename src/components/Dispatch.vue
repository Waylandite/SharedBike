<template>

    <el-row >
      <el-col :span="2"><div class="grid-content ep-bg-purple" />
  
  
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">expand</el-radio-button>
          <el-radio-button :label="true">collapse</el-radio-button>
        </el-radio-group>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-col>
  
      <el-col :span="22"><div class="grid-content ep-bg-purple" />
        <el-row :gutter="20">
          <el-col :span="18"><div class="grid-content ep-bg-purple" />
            <div id="mapbox" class="map"></div>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <div id="container"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  
  
  </template>
  
  <script>
  import {onMounted} from "vue";
  import { Bar } from '@antv/g2plot';
  import mapboxgl from 'mapbox-gl'
  import axios from "axios";
  export default {
    name: 'App',
    components: {
      // HelloWorld
    },
    data(){
  
    },
    setup() {
      onMounted(() => {
        axios({
          method:"post",
          url:"https://www.baidu.com",
          data:{
  
          }
        }).then(res => {
          this.obj= res.data[0];
          console.log(res.data);
        })
  
        mapboxgl.accessToken = "pk.eyJ1Ijoid2F5bGFuZGl0ZSIsImEiOiJjbGN5bTFxZGoxcGNvM29yejZneHpyM2lzIn0.7Ep474qixaoKVxbSfwMmOg"; //这里请换成自己的token
        var map = new mapboxgl.Map({
          container: 'mapbox', // container id 绑定的组件的id
          style: 'mapbox://styles/mapbox/streets-v11', //地图样式，可以使用官网预定义的样式,也可以自定义
          center: [120.2,30.1666], // 初始地图中心点位置
          zoom: 15,     // starting zoom 地图初始的层级
          pitch: 0,  //地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
          bearing: -17.6, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北
          antialias: true, //抗锯齿，通过false关闭提升性能
        });
        const data = [
          { year: '1951 年', value: 38 },
          { year: '1952 年', value: 52 },
          { year: '1956 年', value: 61 },
          { year: '1957 年', value: 145 },
          { year: '1958 年', value: 48 },
        ];
  
        const bar = new Bar('container', {
          data,
          xField: 'value',
          yField: 'year',
          seriesField: 'year',
          legend: {
            position: 'top-left',
          },
        });
  
        bar.render();
  
      })
    },
    methods: {
    }
  }
  
  // import {
  //   Document,
  //   Menu as IconMenu,
  //   Location,
  //   Setting,
  // } from '@element-plus/icons-vue'
  //
  // const isCollapse = ref(true)
  // const handleOpen = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath)
  // }
  // const handleClose = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath)
  // }
  
  </script>
  
  
  
  
  
  <style>
  /*.map{*/
  /*  !*width: 100%;*!*/
  /*  height: 200%;*/
  /*  !*position: absolute;*!*/
  /*}*/
  .el-row {
    margin-bottom: 20px;
    display: flex;
  
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
    height: 300px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  </style>