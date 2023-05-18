<template>
  <el-card style="border-radius: 20px;">
    <el-card style="border-radius: 20px;height: 300px;">
      <template #header>
        <h2>指导老师</h2>
      </template>
      <el-row>
      <el-col :span="4">
        <el-avatar
            style="width: 100px; height: 100px; margin: 20px;"
            src="https://grzy.cug.edu.cn/__local/8/52/98/EB7D181BB192422829D8FD8668C_5E0D7833_45EB.jpg"
            fit="contain"/>
      </el-col>
        <el-col :span="20" >
          <el-row >
          <el-text class="mx-1">姚尧博士，教授，博士生导师，日本东京大学空间信息科学研究中心访问学者，湖北省“晨光计划”项目支撑科技人才。
            任中国城市科学研究会大数据专委会高级会员、委员，阿里巴巴集团数据部（达摩院）访问学者。兼职于中国航天钱学森空间技术研究院和国家电网有限公司高级技术顾问。
          </el-text>
          </el-row>
          <el-row>
          <el-text class="mx-1">
            个人学术主页：
          </el-text>
            <el-link href="https://www.researchgate.net/profile/Yao_Yao42/" >https://www.researchgate.net/profile/Yao_Yao42/</el-link>
          </el-row>
          <el-row>
            <el-text class="mx-1">
              城市之光团队：
            </el-text>
            <el-link href="https://www.urbancomp.net/" >https://www.urbancomp.net/</el-link>
          </el-row>
          <el-row>
            <el-text class="mx-1">
              微信公众号： iGEODATA
            </el-text>
          </el-row>
        </el-col>
      </el-row>

    </el-card>
    <el-divider></el-divider>

    <el-card style="border-radius: 20px;height: 420px;">
      <template #header>
        <h3>项目成员</h3>

      </template>
      <el-row :gutter="10">
        <el-col :span="8">
          <el-card style="border-radius: 20px;height: 270px;">
            <template #header>
              <h3>项目负责人</h3>
            </template>
            <el-row>

              <el-col :span="8">
                <el-avatar
                    style="width: 100px; height: 100px; margin: 10px;"
                    src="http://43.137.46.85:82/file/sharedbike/自拍.jpg"
                    fit="fill"/>
              </el-col>
              <el-col :span="16" >
                <div style="margin-top: 10%;">
                <el-text class="mx-1" >
                  武瑞锋
                </el-text>
                </div>
                <el-text class="mx-1">
                  中国地址大学(武汉) 计算机学院软件工程 本科生
                </el-text>

              </el-col>
            </el-row>

          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="border-radius: 20px;height: 270px;">
            <template #header>
              <h3>项目成员</h3>
            </template>
            <el-row>

              <el-col :span="8">
                <el-avatar
                    style="width: 100px; height: 100px; margin: 10px;"
                    src="https://urbancomp.oss-cn-hangzhou.aliyuncs.com/blog/425FB5F1FE64E27CF1188A62D7BAFCE6_1632540571954.jpg"
                    fit="fill"/>
              </el-col>
              <el-col :span="16" >
                <div style="margin-top: 10%;">
                  <el-text class="mx-1" >
                    夏皓钦
                  </el-text>
                </div>
                <el-text class="mx-1">
                  中国地址大学(武汉) 计算机学院计算机科学与技术 本科生
                </el-text>

              </el-col>
            </el-row>

          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="border-radius: 20px;height: 270px;">
            <template #header>
              <h3>项目成员</h3>
            </template>
            <el-row>

              <el-col :span="8">
                <el-avatar
                    style="width: 100px; height: 100px; margin: 10px;"
                    src="https://urbancomp.oss-cn-hangzhou.aliyuncs.com/blog/4A8B1143-E5A0-4FBD-A33C-515C06EFCC68.png"
                    fit="fill"/>
              </el-col>
              <el-col :span="16" >
                <div style="margin-top: 10%;">
                  <el-text class="mx-1" >
                    韦婉琪
                  </el-text>
                </div>
                <el-text class="mx-1">
                  中国地址大学(武汉) 地理与信息工程学院地理信息科学 本科生
                </el-text>

              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-card>



  </el-card>


</template>

<script>

export default {
  name: 'About',
  data() {
    return {
      picture: picture
    }
  },

}

</script>