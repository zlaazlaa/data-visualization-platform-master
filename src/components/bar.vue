<template>
  <div>
    <el-button-group>
      <el-button style="width: 103px; height: 43px; font-size: 20px;"
        :color="this.$route.path == '/home' ? '#fbe44e' : ' white'" to="/home"><router-link style="color: black;"
          to="/home">主页</router-link></el-button>
      <el-button style=" width: 103px; height: 43px; font-size: 20px;"
        :color="this.$route.path == '/predict' ? '#fbe44e' : ' white'"><router-link style="color: black;"
          to="/predict">预测页</router-link></el-button>
      <el-button style="width: 103px; height: 43px; font-size: 20px;" @click="dialogVisible = true">联系我们</el-button>
    </el-button-group>

    <el-dialog v-model="dialogVisible" title="Tips" width="30%" :show-close="false" align-center
      style="--el-dialog-bg-color: transparent;--el-dialog-box-shadow: 0;--el-dialog-width: 690px;">
      <template #header>
        <div></div>
      </template>
      <div class="outer">
        <div style="height: 1px;"></div>
        <div class="inner1">
          <div class="t1">E-mail：ninel7777@tju.edu.cn</div>
          <div class="t2" style="margin-top: 20px;">
            <el-image style="width: 60px; height: 60px;" fit="contain" src="src/assets/map.png"></el-image>
            <span>天津市津南区天津大学海棠科创园</span>
          </div>
          <div class="t3" style="margin-top: 46px; margin-left: 137px;">天津洋友科技有限公司出品</div>
        </div>
        <el-image style="width: 130px; height: 130px; position: absolute; top: 40px; right: -72px;"
          src="src/assets/logo-2.png" fit="contain" />
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'MyComponent',
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {

  }
};
</script>

<style scoped>
/* 组件的样式 */
.inner1 {
  /* 矩形 1 */
  width: 621px;
  height: 296.91px;
  margin: 25px 20px 15px 17px;
  position: relative;
  background: rgb(255, 255, 255);
  box-shadow: -3px -3px 4px rgba(163, 163, 163, 0.25);

  border-radius: 34px;

}

.outer {
  width: 690px;
  height: 338px;
  display: block;
  background: rgb(255, 255, 255);
  box-shadow: 8px 8px 4px rgba(163, 163, 163, 0.25);
  border-radius: 34px;
}

.t1 {
  /* 矩形 1 */
  width: 406px;
  height: 80px;


  font-size: 18px;
  text-align: center;
  line-height: 80px;
  /* 水平居中 */
  background: rgb(255, 255, 255);
  box-shadow: 8px 8px 4px rgba(163, 163, 163, 0.25);

  border-radius: 34px;

}

.t2 {
  /* 矩形 1 */
  width: 406px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  background: rgb(255, 255, 255);
  box-shadow: 8px 8px 4px rgba(163, 163, 163, 0.25);

  border-radius: 34px;

}

.t3 {
  /* 矩形 1 */
  width: 295px;
  height: 33px;


  background: rgb(255, 255, 255);
  box-shadow: 8px 8px 4px rgba(163, 163, 163, 0.25);

  border-radius: 34px;

}
</style>