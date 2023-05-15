<template>
  <el-row>
    <el-col :span="1"/>
    <el-col :span="23">
      <el-card style="border-radius: 20px;height: 100%;">
        <template #header>
          训练轮数对模型精度影响
        </template>
        <el-row>
          <el-col :span="14" style="height: 100%;">
            <el-card style="border-radius: 20px; height: 350px;">
              <template #header>
                1轮
              </template>
              <div id="container1"></div>
            </el-card>
            <el-divider/>
            <el-card style="border-radius: 20px; height: 350px;">
              <template #header>
                10轮
              </template>
              <div id="container2"></div>
            </el-card>
            <el-divider/>
            <el-card style="border-radius: 20px; height: 350px;">
              <template #header>
                50轮
              </template>
              <div id="container3"></div>
            </el-card>
            <el-divider/>
            <el-card style="border-radius: 20px; height: 350px;">
              <template #header>
                100轮
              </template>
              <div id="container4"></div>
            </el-card>
            <el-divider/>
            <el-card style="border-radius: 20px; height: 350px;">
              <template #header>
                500轮
              </template>
              <div id="container5"></div>
            </el-card>
          </el-col>
          <el-col :span="1"/>
          <el-col :span="9">
            <el-card style="border-radius: 20px;height: 100%;">

              <div style="">
                <el-text  size="large">训练轮数</el-text>
              </div>
              <el-divider/>
              <el-text  size="large" type="info">
                出去时序步长的选择外，对于神经网络模型来说，训练轮数也是需要讨论的问题， 如果
                训练轮数过小会导致模型没有达到最佳状态，得不到很好的预测效果。如果训练轮数过大会
                导致模型在训练集中过拟合，导致模型没有很好的对未来的预测能力。 针对训练轮数的问题，
                我通过对 284 地块数据进行训练，得到了分别在训练 1 轮， 10 轮， 50 轮， 100 轮， 500 轮
                下的训练后模型对结果的预测，如图表 26-30。从预测结果可以看出，随着训练轮数的增加，
                模型的变现逐渐变好，但在 100 轮时，预测曲线的精度依据达到了预期标准，而在 500 轮
                下的表现并没有相较于 100 轮由明显的提升，为了防止过拟合和节省训练的时间成本等因
                素，最后决定选择模型的训练轮数为 100 轮。
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
      const data1 = [
        { type:'real' ,time:'1',num:34},
        { type:'real' ,time:'2',num:16},
        { type:'real' ,time:'3',num:13},
        { type:'real' ,time:'4',num:5},
        { type:'real' ,time:'5',num:11},
        { type:'real' ,time:'6',num:9},
        { type:'real' ,time:'7',num:80},
        { type:'real' ,time:'8',num:406},
        { type:'real' ,time:'9',num:747},
        { type:'real' ,time:'10',num:383},
        { type:'real' ,time:'11',num:9},
        { type:'real' ,time:'12',num:123},
        { type:'real' ,time:'13',num:99},
        { type:'real' ,time:'14',num:96},
        { type:'real' ,time:'15',num:105},
        { type:'real' ,time:'16',num:86},
        { type:'real' ,time:'17',num:104},
        { type:'real' ,time:'18',num:173},
        { type:'real' ,time:'19',num:330},
        { type:'real' ,time:'20',num:334},
        { type:'real' ,time:'21',num:204},
        { type:'real' ,time:'22',num:208},
        { type:'real' ,time:'23',num:168},
        { type:'real' ,time:'24',num:73},
        { type:'real' ,time:'25',num:32},
        { type:'real' ,time:'26',num:9},
        { type:'real' ,time:'27',num:11},
        { type:'real' ,time:'28',num:7},
        { type:'real' ,time:'29',num:8},
        { type:'real' ,time:'30',num:8},
        { type:'real' ,time:'31',num:63},
        { type:'real' ,time:'32',num:344},
        { type:'real' ,time:'33',num:715},
        { type:'real' ,time:'34',num:427},
        { type:'real' ,time:'35',num:180},
        { type:'real' ,time:'36',num:107},
        { type:'real' ,time:'37',num:96},
        { type:'real' ,time:'38',num:105},
        { type:'real' ,time:'39',num:83},
        { type:'real' ,time:'40',num:118},
        { type:'real' ,time:'41',num:112},
        { type:'real' ,time:'42',num:184},
        { type:'real' ,time:'43',num:346},
        { type:'real' ,time:'44',num:337},
        { type:'real' ,time:'45',num:87},
        { type:'real' ,time:'46',num:65},
        { type:'real' ,time:'47',num:116},
        { type:'real' ,time:'48',num:50},
        { type:'real' ,time:'49',num:31},
        { type:'real' ,time:'50',num:7},
        { type:'real' ,time:'51',num:8},
        { type:'real' ,time:'52',num:2},
        { type:'real' ,time:'53',num:3},
        { type:'real' ,time:'54',num:8},
        { type:'real' ,time:'55',num:68},
        { type:'real' ,time:'56',num:305},
        { type:'real' ,time:'57',num:639},
        { type:'real' ,time:'58',num:322},
        { type:'real' ,time:'59',num:135},
        { type:'real' ,time:'60',num:122},
        { type:'real' ,time:'61',num:79},
        { type:'real' ,time:'62',num:116},
        { type:'real' ,time:'63',num:86},
        { type:'real' ,time:'64',num:84},
        { type:'real' ,time:'65',num:86},
        { type:'real' ,time:'66',num:156},
        { type:'real' ,time:'67',num:263},
        { type:'real' ,time:'68',num:258},
        { type:'real' ,time:'69',num:146},
        { type:'real' ,time:'70',num:188},
        { type:'real' ,time:'71',num:133},
        { type:'real' ,time:'72',num:60},
        { type:'real' ,time:'73',num:25},
        { type:'real' ,time:'74',num:17},
        { type:'real' ,time:'75',num:11},
        { type:'real' ,time:'76',num:9},
        { type:'real' ,time:'77',num:8},
        { type:'real' ,time:'78',num:9},
        { type:'real' ,time:'79',num:81},
        { type:'real' ,time:'80',num:354},
        { type:'real' ,time:'81',num:758},
        { type:'real' ,time:'82',num:378},
        { type:'real' ,time:'83',num:147},
        { type:'real' ,time:'84',num:142},
        { type:'real' ,time:'85',num:112},
        { type:'real' ,time:'86',num:117},
        { type:'real' ,time:'87',num:96},
        { type:'real' ,time:'88',num:87},
        { type:'real' ,time:'89',num:106},
        { type:'real' ,time:'90',num:142},
        { type:'real' ,time:'91',num:293},
        { type:'real' ,time:'92',num:292},
        { type:'real' ,time:'93',num:189},
        { type:'real' ,time:'94',num:200},
        { type:'real' ,time:'95',num:147},
        { type:'real' ,time:'96',num:68},
        { type:'real' ,time:'97',num:27},
        { type:'real' ,time:'98',num:14},
        { type:'real' ,time:'99',num:12},
        { type:'real' ,time:'100',num:4},
        { type:'real' ,time:'101',num:1},
        { type:'real' ,time:'102',num:10},
        { type:'real' ,time:'103',num:71},
        { type:'real' ,time:'104',num:273},
        { type:'real' ,time:'105',num:628},
        { type:'real' ,time:'106',num:364},
        { type:'real' ,time:'107',num:157},
        { type:'real' ,time:'108',num:117},
        { type:'real' ,time:'109',num:117},
        { type:'real' ,time:'110',num:127},
        { type:'real' ,time:'111',num:104},
        { type:'real' ,time:'112',num:93},
        { type:'real' ,time:'113',num:96},
        { type:'real' ,time:'114',num:169},
        { type:'real' ,time:'115',num:336},
        { type:'real' ,time:'116',num:314},
        { type:'real' ,time:'117',num:223},
        { type:'real' ,time:'118',num:190},
        { type:'real' ,time:'119',num:158},
        { type:'real' ,time:'120',num:112},
        { type:'predict' , time:'109',num:229.81829613447192},
        { type:'predict' , time:'110',num:236.61877766251567},
        { type:'predict' , time:'111',num:243.91879063844684},
        { type:'predict' , time:'112',num:249.42903400957587},
        { type:'predict' , time:'113',num:243.1716818213463},
        { type:'predict' , time:'114',num:250.74259957671168},
        { type:'predict' , time:'115',num:256.4240422248841},
        { type:'predict' , time:'116',num:257.55253389477735},
        { type:'predict' , time:'117',num:257.86709296703344},
        { type:'predict' , time:'118',num:261.0012230277062},
        { type:'predict' , time:'119',num:265.04189595580107},
        { type:'predict' , time:'120',num:266.5620354413987},
      ];
      const data10 = [
        { type:'real' ,time:'1',num:34},
        { type:'real' ,time:'2',num:16},
        { type:'real' ,time:'3',num:13},
        { type:'real' ,time:'4',num:5},
        { type:'real' ,time:'5',num:11},
        { type:'real' ,time:'6',num:9},
        { type:'real' ,time:'7',num:80},
        { type:'real' ,time:'8',num:406},
        { type:'real' ,time:'9',num:747},
        { type:'real' ,time:'10',num:383},
        { type:'real' ,time:'11',num:9},
        { type:'real' ,time:'12',num:123},
        { type:'real' ,time:'13',num:99},
        { type:'real' ,time:'14',num:96},
        { type:'real' ,time:'15',num:105},
        { type:'real' ,time:'16',num:86},
        { type:'real' ,time:'17',num:104},
        { type:'real' ,time:'18',num:173},
        { type:'real' ,time:'19',num:330},
        { type:'real' ,time:'20',num:334},
        { type:'real' ,time:'21',num:204},
        { type:'real' ,time:'22',num:208},
        { type:'real' ,time:'23',num:168},
        { type:'real' ,time:'24',num:73},
        { type:'real' ,time:'25',num:32},
        { type:'real' ,time:'26',num:9},
        { type:'real' ,time:'27',num:11},
        { type:'real' ,time:'28',num:7},
        { type:'real' ,time:'29',num:8},
        { type:'real' ,time:'30',num:8},
        { type:'real' ,time:'31',num:63},
        { type:'real' ,time:'32',num:344},
        { type:'real' ,time:'33',num:715},
        { type:'real' ,time:'34',num:427},
        { type:'real' ,time:'35',num:180},
        { type:'real' ,time:'36',num:107},
        { type:'real' ,time:'37',num:96},
        { type:'real' ,time:'38',num:105},
        { type:'real' ,time:'39',num:83},
        { type:'real' ,time:'40',num:118},
        { type:'real' ,time:'41',num:112},
        { type:'real' ,time:'42',num:184},
        { type:'real' ,time:'43',num:346},
        { type:'real' ,time:'44',num:337},
        { type:'real' ,time:'45',num:87},
        { type:'real' ,time:'46',num:65},
        { type:'real' ,time:'47',num:116},
        { type:'real' ,time:'48',num:50},
        { type:'real' ,time:'49',num:31},
        { type:'real' ,time:'50',num:7},
        { type:'real' ,time:'51',num:8},
        { type:'real' ,time:'52',num:2},
        { type:'real' ,time:'53',num:3},
        { type:'real' ,time:'54',num:8},
        { type:'real' ,time:'55',num:68},
        { type:'real' ,time:'56',num:305},
        { type:'real' ,time:'57',num:639},
        { type:'real' ,time:'58',num:322},
        { type:'real' ,time:'59',num:135},
        { type:'real' ,time:'60',num:122},
        { type:'real' ,time:'61',num:79},
        { type:'real' ,time:'62',num:116},
        { type:'real' ,time:'63',num:86},
        { type:'real' ,time:'64',num:84},
        { type:'real' ,time:'65',num:86},
        { type:'real' ,time:'66',num:156},
        { type:'real' ,time:'67',num:263},
        { type:'real' ,time:'68',num:258},
        { type:'real' ,time:'69',num:146},
        { type:'real' ,time:'70',num:188},
        { type:'real' ,time:'71',num:133},
        { type:'real' ,time:'72',num:60},
        { type:'real' ,time:'73',num:25},
        { type:'real' ,time:'74',num:17},
        { type:'real' ,time:'75',num:11},
        { type:'real' ,time:'76',num:9},
        { type:'real' ,time:'77',num:8},
        { type:'real' ,time:'78',num:9},
        { type:'real' ,time:'79',num:81},
        { type:'real' ,time:'80',num:354},
        { type:'real' ,time:'81',num:758},
        { type:'real' ,time:'82',num:378},
        { type:'real' ,time:'83',num:147},
        { type:'real' ,time:'84',num:142},
        { type:'real' ,time:'85',num:112},
        { type:'real' ,time:'86',num:117},
        { type:'real' ,time:'87',num:96},
        { type:'real' ,time:'88',num:87},
        { type:'real' ,time:'89',num:106},
        { type:'real' ,time:'90',num:142},
        { type:'real' ,time:'91',num:293},
        { type:'real' ,time:'92',num:292},
        { type:'real' ,time:'93',num:189},
        { type:'real' ,time:'94',num:200},
        { type:'real' ,time:'95',num:147},
        { type:'real' ,time:'96',num:68},
        { type:'real' ,time:'97',num:27},
        { type:'real' ,time:'98',num:14},
        { type:'real' ,time:'99',num:12},
        { type:'real' ,time:'100',num:4},
        { type:'real' ,time:'101',num:1},
        { type:'real' ,time:'102',num:10},
        { type:'real' ,time:'103',num:71},
        { type:'real' ,time:'104',num:273},
        { type:'real' ,time:'105',num:628},
        { type:'real' ,time:'106',num:364},
        { type:'real' ,time:'107',num:157},
        { type:'real' ,time:'108',num:117},
        { type:'real' ,time:'109',num:117},
        { type:'real' ,time:'110',num:127},
        { type:'real' ,time:'111',num:104},
        { type:'real' ,time:'112',num:93},
        { type:'real' ,time:'113',num:96},
        { type:'real' ,time:'114',num:169},
        { type:'real' ,time:'115',num:336},
        { type:'real' ,time:'116',num:314},
        { type:'real' ,time:'117',num:223},
        { type:'real' ,time:'118',num:190},
        { type:'real' ,time:'119',num:158},
        { type:'real' ,time:'120',num:112},
        { type:'predict' , time:'109',num:139.04249930381778},
        { type:'predict' , time:'110',num:128.18022835254672},
        { type:'predict' , time:'111',num:125.11937433481219},
        { type:'predict' , time:'112',num:126.12714552879336},
        { type:'predict' , time:'113',num:129.5323157310486},
        { type:'predict' , time:'114',num:150.83610695600512},
        { type:'predict' , time:'115',num:173.7667707204819},
        { type:'predict' , time:'116',num:182.30482846498492},
        { type:'predict' , time:'117',num:184.24808746576312},
        { type:'predict' , time:'118',num:189.29292193055156},
        { type:'predict' , time:'119',num:192.47154101729396},
        { type:'predict' , time:'120',num:193.88352614641192},


      ];
      const data50=[
        { type:'real' ,time:'1',num:34},
        { type:'real' ,time:'2',num:16},
        { type:'real' ,time:'3',num:13},
        { type:'real' ,time:'4',num:5},
        { type:'real' ,time:'5',num:11},
        { type:'real' ,time:'6',num:9},
        { type:'real' ,time:'7',num:80},
        { type:'real' ,time:'8',num:406},
        { type:'real' ,time:'9',num:747},
        { type:'real' ,time:'10',num:383},
        { type:'real' ,time:'11',num:9},
        { type:'real' ,time:'12',num:123},
        { type:'real' ,time:'13',num:99},
        { type:'real' ,time:'14',num:96},
        { type:'real' ,time:'15',num:105},
        { type:'real' ,time:'16',num:86},
        { type:'real' ,time:'17',num:104},
        { type:'real' ,time:'18',num:173},
        { type:'real' ,time:'19',num:330},
        { type:'real' ,time:'20',num:334},
        { type:'real' ,time:'21',num:204},
        { type:'real' ,time:'22',num:208},
        { type:'real' ,time:'23',num:168},
        { type:'real' ,time:'24',num:73},
        { type:'real' ,time:'25',num:32},
        { type:'real' ,time:'26',num:9},
        { type:'real' ,time:'27',num:11},
        { type:'real' ,time:'28',num:7},
        { type:'real' ,time:'29',num:8},
        { type:'real' ,time:'30',num:8},
        { type:'real' ,time:'31',num:63},
        { type:'real' ,time:'32',num:344},
        { type:'real' ,time:'33',num:715},
        { type:'real' ,time:'34',num:427},
        { type:'real' ,time:'35',num:180},
        { type:'real' ,time:'36',num:107},
        { type:'real' ,time:'37',num:96},
        { type:'real' ,time:'38',num:105},
        { type:'real' ,time:'39',num:83},
        { type:'real' ,time:'40',num:118},
        { type:'real' ,time:'41',num:112},
        { type:'real' ,time:'42',num:184},
        { type:'real' ,time:'43',num:346},
        { type:'real' ,time:'44',num:337},
        { type:'real' ,time:'45',num:87},
        { type:'real' ,time:'46',num:65},
        { type:'real' ,time:'47',num:116},
        { type:'real' ,time:'48',num:50},
        { type:'real' ,time:'49',num:31},
        { type:'real' ,time:'50',num:7},
        { type:'real' ,time:'51',num:8},
        { type:'real' ,time:'52',num:2},
        { type:'real' ,time:'53',num:3},
        { type:'real' ,time:'54',num:8},
        { type:'real' ,time:'55',num:68},
        { type:'real' ,time:'56',num:305},
        { type:'real' ,time:'57',num:639},
        { type:'real' ,time:'58',num:322},
        { type:'real' ,time:'59',num:135},
        { type:'real' ,time:'60',num:122},
        { type:'real' ,time:'61',num:79},
        { type:'real' ,time:'62',num:116},
        { type:'real' ,time:'63',num:86},
        { type:'real' ,time:'64',num:84},
        { type:'real' ,time:'65',num:86},
        { type:'real' ,time:'66',num:156},
        { type:'real' ,time:'67',num:263},
        { type:'real' ,time:'68',num:258},
        { type:'real' ,time:'69',num:146},
        { type:'real' ,time:'70',num:188},
        { type:'real' ,time:'71',num:133},
        { type:'real' ,time:'72',num:60},
        { type:'real' ,time:'73',num:25},
        { type:'real' ,time:'74',num:17},
        { type:'real' ,time:'75',num:11},
        { type:'real' ,time:'76',num:9},
        { type:'real' ,time:'77',num:8},
        { type:'real' ,time:'78',num:9},
        { type:'real' ,time:'79',num:81},
        { type:'real' ,time:'80',num:354},
        { type:'real' ,time:'81',num:758},
        { type:'real' ,time:'82',num:378},
        { type:'real' ,time:'83',num:147},
        { type:'real' ,time:'84',num:142},
        { type:'real' ,time:'85',num:112},
        { type:'real' ,time:'86',num:117},
        { type:'real' ,time:'87',num:96},
        { type:'real' ,time:'88',num:87},
        { type:'real' ,time:'89',num:106},
        { type:'real' ,time:'90',num:142},
        { type:'real' ,time:'91',num:293},
        { type:'real' ,time:'92',num:292},
        { type:'real' ,time:'93',num:189},
        { type:'real' ,time:'94',num:200},
        { type:'real' ,time:'95',num:147},
        { type:'real' ,time:'96',num:68},
        { type:'real' ,time:'97',num:27},
        { type:'real' ,time:'98',num:14},
        { type:'real' ,time:'99',num:12},
        { type:'real' ,time:'100',num:4},
        { type:'real' ,time:'101',num:1},
        { type:'real' ,time:'102',num:10},
        { type:'real' ,time:'103',num:71},
        { type:'real' ,time:'104',num:273},
        { type:'real' ,time:'105',num:628},
        { type:'real' ,time:'106',num:364},
        { type:'real' ,time:'107',num:157},
        { type:'real' ,time:'108',num:117},
        { type:'real' ,time:'109',num:117},
        { type:'real' ,time:'110',num:127},
        { type:'real' ,time:'111',num:104},
        { type:'real' ,time:'112',num:93},
        { type:'real' ,time:'113',num:96},
        { type:'real' ,time:'114',num:169},
        { type:'real' ,time:'115',num:336},
        { type:'real' ,time:'116',num:314},
        { type:'real' ,time:'117',num:223},
        { type:'real' ,time:'118',num:190},
        { type:'real' ,time:'119',num:158},
        { type:'real' ,time:'120',num:112},
        { type:'predict' , time:'109',num:95.43513202667239},
        { type:'predict' , time:'110',num:88.31325563788417},
        { type:'predict' , time:'111',num:68.64204472303393},
        { type:'predict' , time:'112',num:59.06289413571361},
        { type:'predict' , time:'113',num:74.51240780949595},
        { type:'predict' , time:'114',num:139.912043184042},
        { type:'predict' , time:'115',num:228.34738335013392},
        { type:'predict' , time:'116',num:236.77378988265994},
        { type:'predict' , time:'117',num:205.8182037174702},
        { type:'predict' , time:'118',num:186.0780709087849},
        { type:'predict' , time:'119',num:171.64005088806155},
        { type:'predict' , time:'120',num:155.63916206359866},

      ];
      const data100=[
        { type:'real' ,time:'1',num:34},
        { type:'real' ,time:'2',num:16},
        { type:'real' ,time:'3',num:13},
        { type:'real' ,time:'4',num:5},
        { type:'real' ,time:'5',num:11},
        { type:'real' ,time:'6',num:9},
        { type:'real' ,time:'7',num:80},
        { type:'real' ,time:'8',num:406},
        { type:'real' ,time:'9',num:747},
        { type:'real' ,time:'10',num:383},
        { type:'real' ,time:'11',num:9},
        { type:'real' ,time:'12',num:123},
        { type:'real' ,time:'13',num:99},
        { type:'real' ,time:'14',num:96},
        { type:'real' ,time:'15',num:105},
        { type:'real' ,time:'16',num:86},
        { type:'real' ,time:'17',num:104},
        { type:'real' ,time:'18',num:173},
        { type:'real' ,time:'19',num:330},
        { type:'real' ,time:'20',num:334},
        { type:'real' ,time:'21',num:204},
        { type:'real' ,time:'22',num:208},
        { type:'real' ,time:'23',num:168},
        { type:'real' ,time:'24',num:73},
        { type:'real' ,time:'25',num:32},
        { type:'real' ,time:'26',num:9},
        { type:'real' ,time:'27',num:11},
        { type:'real' ,time:'28',num:7},
        { type:'real' ,time:'29',num:8},
        { type:'real' ,time:'30',num:8},
        { type:'real' ,time:'31',num:63},
        { type:'real' ,time:'32',num:344},
        { type:'real' ,time:'33',num:715},
        { type:'real' ,time:'34',num:427},
        { type:'real' ,time:'35',num:180},
        { type:'real' ,time:'36',num:107},
        { type:'real' ,time:'37',num:96},
        { type:'real' ,time:'38',num:105},
        { type:'real' ,time:'39',num:83},
        { type:'real' ,time:'40',num:118},
        { type:'real' ,time:'41',num:112},
        { type:'real' ,time:'42',num:184},
        { type:'real' ,time:'43',num:346},
        { type:'real' ,time:'44',num:337},
        { type:'real' ,time:'45',num:87},
        { type:'real' ,time:'46',num:65},
        { type:'real' ,time:'47',num:116},
        { type:'real' ,time:'48',num:50},
        { type:'real' ,time:'49',num:31},
        { type:'real' ,time:'50',num:7},
        { type:'real' ,time:'51',num:8},
        { type:'real' ,time:'52',num:2},
        { type:'real' ,time:'53',num:3},
        { type:'real' ,time:'54',num:8},
        { type:'real' ,time:'55',num:68},
        { type:'real' ,time:'56',num:305},
        { type:'real' ,time:'57',num:639},
        { type:'real' ,time:'58',num:322},
        { type:'real' ,time:'59',num:135},
        { type:'real' ,time:'60',num:122},
        { type:'real' ,time:'61',num:79},
        { type:'real' ,time:'62',num:116},
        { type:'real' ,time:'63',num:86},
        { type:'real' ,time:'64',num:84},
        { type:'real' ,time:'65',num:86},
        { type:'real' ,time:'66',num:156},
        { type:'real' ,time:'67',num:263},
        { type:'real' ,time:'68',num:258},
        { type:'real' ,time:'69',num:146},
        { type:'real' ,time:'70',num:188},
        { type:'real' ,time:'71',num:133},
        { type:'real' ,time:'72',num:60},
        { type:'real' ,time:'73',num:25},
        { type:'real' ,time:'74',num:17},
        { type:'real' ,time:'75',num:11},
        { type:'real' ,time:'76',num:9},
        { type:'real' ,time:'77',num:8},
        { type:'real' ,time:'78',num:9},
        { type:'real' ,time:'79',num:81},
        { type:'real' ,time:'80',num:354},
        { type:'real' ,time:'81',num:758},
        { type:'real' ,time:'82',num:378},
        { type:'real' ,time:'83',num:147},
        { type:'real' ,time:'84',num:142},
        { type:'real' ,time:'85',num:112},
        { type:'real' ,time:'86',num:117},
        { type:'real' ,time:'87',num:96},
        { type:'real' ,time:'88',num:87},
        { type:'real' ,time:'89',num:106},
        { type:'real' ,time:'90',num:142},
        { type:'real' ,time:'91',num:293},
        { type:'real' ,time:'92',num:292},
        { type:'real' ,time:'93',num:189},
        { type:'real' ,time:'94',num:200},
        { type:'real' ,time:'95',num:147},
        { type:'real' ,time:'96',num:68},
        { type:'real' ,time:'97',num:27},
        { type:'real' ,time:'98',num:14},
        { type:'real' ,time:'99',num:12},
        { type:'real' ,time:'100',num:4},
        { type:'real' ,time:'101',num:1},
        { type:'real' ,time:'102',num:10},
        { type:'real' ,time:'103',num:71},
        { type:'real' ,time:'104',num:273},
        { type:'real' ,time:'105',num:628},
        { type:'real' ,time:'106',num:364},
        { type:'real' ,time:'107',num:157},
        { type:'real' ,time:'108',num:117},
        { type:'real' ,time:'109',num:117},
        { type:'real' ,time:'110',num:127},
        { type:'real' ,time:'111',num:104},
        { type:'real' ,time:'112',num:93},
        { type:'real' ,time:'113',num:96},
        { type:'real' ,time:'114',num:169},
        { type:'real' ,time:'115',num:336},
        { type:'real' ,time:'116',num:314},
        { type:'real' ,time:'117',num:223},
        { type:'real' ,time:'118',num:190},
        { type:'real' ,time:'119',num:158},
        { type:'real' ,time:'120',num:112},
        { type:'predict' , time:'109',num:96.33001118898395},
        { type:'predict' , time:'110',num:87.10323083400729},
        { type:'predict' , time:'111',num:62.326272487640416},
        { type:'predict' , time:'112',num:38.7302586436272},
        { type:'predict' , time:'113',num:40.8627990484238},
        { type:'predict' , time:'114',num:110.44841861724856},
        { type:'predict' , time:'115',num:219.89323885738852},
        { type:'predict' , time:'116',num:246.4386585503817},
        { type:'predict' , time:'117',num:231.14943622052672},
        { type:'predict' , time:'118',num:215.78687016665938},
        { type:'predict' , time:'119',num:198.94303612411025},
        { type:'predict' , time:'120',num:173.94021475315097},
      ];
      const data500=[
        { type:'real' ,time:'1',num:34},
        { type:'real' ,time:'2',num:16},
        { type:'real' ,time:'3',num:13},
        { type:'real' ,time:'4',num:5},
        { type:'real' ,time:'5',num:11},
        { type:'real' ,time:'6',num:9},
        { type:'real' ,time:'7',num:80},
        { type:'real' ,time:'8',num:406},
        { type:'real' ,time:'9',num:747},
        { type:'real' ,time:'10',num:383},
        { type:'real' ,time:'11',num:9},
        { type:'real' ,time:'12',num:123},
        { type:'real' ,time:'13',num:99},
        { type:'real' ,time:'14',num:96},
        { type:'real' ,time:'15',num:105},
        { type:'real' ,time:'16',num:86},
        { type:'real' ,time:'17',num:104},
        { type:'real' ,time:'18',num:173},
        { type:'real' ,time:'19',num:330},
        { type:'real' ,time:'20',num:334},
        { type:'real' ,time:'21',num:204},
        { type:'real' ,time:'22',num:208},
        { type:'real' ,time:'23',num:168},
        { type:'real' ,time:'24',num:73},
        { type:'real' ,time:'25',num:32},
        { type:'real' ,time:'26',num:9},
        { type:'real' ,time:'27',num:11},
        { type:'real' ,time:'28',num:7},
        { type:'real' ,time:'29',num:8},
        { type:'real' ,time:'30',num:8},
        { type:'real' ,time:'31',num:63},
        { type:'real' ,time:'32',num:344},
        { type:'real' ,time:'33',num:715},
        { type:'real' ,time:'34',num:427},
        { type:'real' ,time:'35',num:180},
        { type:'real' ,time:'36',num:107},
        { type:'real' ,time:'37',num:96},
        { type:'real' ,time:'38',num:105},
        { type:'real' ,time:'39',num:83},
        { type:'real' ,time:'40',num:118},
        { type:'real' ,time:'41',num:112},
        { type:'real' ,time:'42',num:184},
        { type:'real' ,time:'43',num:346},
        { type:'real' ,time:'44',num:337},
        { type:'real' ,time:'45',num:87},
        { type:'real' ,time:'46',num:65},
        { type:'real' ,time:'47',num:116},
        { type:'real' ,time:'48',num:50},
        { type:'real' ,time:'49',num:31},
        { type:'real' ,time:'50',num:7},
        { type:'real' ,time:'51',num:8},
        { type:'real' ,time:'52',num:2},
        { type:'real' ,time:'53',num:3},
        { type:'real' ,time:'54',num:8},
        { type:'real' ,time:'55',num:68},
        { type:'real' ,time:'56',num:305},
        { type:'real' ,time:'57',num:639},
        { type:'real' ,time:'58',num:322},
        { type:'real' ,time:'59',num:135},
        { type:'real' ,time:'60',num:122},
        { type:'real' ,time:'61',num:79},
        { type:'real' ,time:'62',num:116},
        { type:'real' ,time:'63',num:86},
        { type:'real' ,time:'64',num:84},
        { type:'real' ,time:'65',num:86},
        { type:'real' ,time:'66',num:156},
        { type:'real' ,time:'67',num:263},
        { type:'real' ,time:'68',num:258},
        { type:'real' ,time:'69',num:146},
        { type:'real' ,time:'70',num:188},
        { type:'real' ,time:'71',num:133},
        { type:'real' ,time:'72',num:60},
        { type:'real' ,time:'73',num:25},
        { type:'real' ,time:'74',num:17},
        { type:'real' ,time:'75',num:11},
        { type:'real' ,time:'76',num:9},
        { type:'real' ,time:'77',num:8},
        { type:'real' ,time:'78',num:9},
        { type:'real' ,time:'79',num:81},
        { type:'real' ,time:'80',num:354},
        { type:'real' ,time:'81',num:758},
        { type:'real' ,time:'82',num:378},
        { type:'real' ,time:'83',num:147},
        { type:'real' ,time:'84',num:142},
        { type:'real' ,time:'85',num:112},
        { type:'real' ,time:'86',num:117},
        { type:'real' ,time:'87',num:96},
        { type:'real' ,time:'88',num:87},
        { type:'real' ,time:'89',num:106},
        { type:'real' ,time:'90',num:142},
        { type:'real' ,time:'91',num:293},
        { type:'real' ,time:'92',num:292},
        { type:'real' ,time:'93',num:189},
        { type:'real' ,time:'94',num:200},
        { type:'real' ,time:'95',num:147},
        { type:'real' ,time:'96',num:68},
        { type:'real' ,time:'97',num:27},
        { type:'real' ,time:'98',num:14},
        { type:'real' ,time:'99',num:12},
        { type:'real' ,time:'100',num:4},
        { type:'real' ,time:'101',num:1},
        { type:'real' ,time:'102',num:10},
        { type:'real' ,time:'103',num:71},
        { type:'real' ,time:'104',num:273},
        { type:'real' ,time:'105',num:628},
        { type:'real' ,time:'106',num:364},
        { type:'real' ,time:'107',num:157},
        { type:'real' ,time:'108',num:117},
        { type:'real' ,time:'109',num:117},
        { type:'real' ,time:'110',num:127},
        { type:'real' ,time:'111',num:104},
        { type:'real' ,time:'112',num:93},
        { type:'real' ,time:'113',num:96},
        { type:'real' ,time:'114',num:169},
        { type:'real' ,time:'115',num:336},
        { type:'real' ,time:'116',num:314},
        { type:'real' ,time:'117',num:223},
        { type:'real' ,time:'118',num:190},
        { type:'real' ,time:'119',num:158},
        { type:'real' ,time:'120',num:112},
        { type:'predict' , time:'109',num:112.29067489504817},
        { type:'predict' , time:'110',num:110.07032957673076},
        { type:'predict' , time:'111',num:75.76775637269023},
        { type:'predict' , time:'112',num:83.79337814450267},
        { type:'predict' , time:'113',num:91.5611124634743},
        { type:'predict' , time:'114',num:140.95712921023372},
        { type:'predict' , time:'115',num:244.23249241709712},
        { type:'predict' , time:'116',num:247.366678878665},
        { type:'predict' , time:'117',num:161.3945124447346},
        { type:'predict' , time:'118',num:181.98699814081195},
        { type:'predict' , time:'119',num:188.1162638962269},
        { type:'predict' , time:'120',num:136.17762711644176},


      ];
      const chart1 = new Chart({
        container: 'container1',
        autoFit: true,
        height: 260,
        width: 500,
      });
      chart1.data(data1);
      chart1.scale({
        time: {
          range: [0, 1],
        },
        num: {
          alias: '订单数量',
          nice: true,
        },
      });
      chart1.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart1
          .line()
          .position('time*num')
          .color('type')
          .shape('smooth');
      chart1.render();

      const chart2 = new Chart({
        container: 'container2',
        autoFit: true,
        height: 260,
        width: 500,
      });
      chart2.data(data10);
      chart2.scale({
        time: {
          range: [0, 1],
        },
        num: {
          alias: '订单数量',
          nice: true,
        },
      });
      chart2.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart2
          .line()
          .position('time*num')
          .color('type')
          .shape('smooth');
      chart2.render();

      const chart3 = new Chart({
        container: 'container3',
        autoFit: true,
        height: 260,
        width: 500,
      });
      chart3.data(data50);
      chart3.scale({
        time: {
          range: [0, 1],
        },
        num: {
          alias: '订单数量',
          nice: true,
        },
      });
      chart3.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart3
          .line()
          .position('time*num')
          .color('type')
          .shape('smooth');
      chart3.render();

      const chart4 = new Chart({
        container: 'container4',
        autoFit: true,
        height: 260,
        width: 500,
      });
      chart4.data(data100);
      chart4.scale({
        time: {
          range: [0, 1],
        },
        num: {
          alias: '订单数量',
          nice: true,
        },
      });
      chart4.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart4
          .line()
          .position('time*num')
          .color('type')
          .shape('smooth');
      chart4.render();

      const chart5 = new Chart({
        container: 'container5',
        autoFit: true,
        height: 260,
        width: 500,
      });
      chart5.data(data500);
      chart5.scale({
        time: {
          range: [0, 1],
        },
        num: {
          alias: '订单数量',
          nice: true,
        },
      });
      chart5.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart5
          .line()
          .position('time*num')
          .color('type')
          .shape('smooth');
      chart5.render();

    })
  }
}
</script>

<style scoped>

</style>