<template>
    <div>
        <img class="bg-img" alt="background image" src="@/assets/bg1.png">
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <el-image style="width: 280px; height: 220px; margin-left: 100px; margin-top: -30px;" fit="contain"
                src="src/assets/logo1.png"></el-image>
            <MyComponent style="margin-right: 15%;"></MyComponent>
        </div>

        <div class="con"><router-link to="/predict" style="color: black;">个人店</router-link></div>

        <div class="con" style="left: 11%; top: 42%; z-index: 19;">连锁店</div>

        <div class="con" style="height: 169px; line-height: 85px; left: 17%; top: 62%; z-index: 22;">不良天气<br>库存<span
                style="color: #940000;">预警</span></div>

        <div class="con" style="left: 33.5%; top: 50%; width: 323px; font-size: 36px; height: 137px; line-height: 137px;">
            <span style="color: #940000;">未来</span>五日库存预测
        </div>

        <div class="con" style="left: 54%; top: 44%; width: 302px; height: 97px; font-size: 36px;">跨区域调货最优解</div>

        <div class="con" style="left: 60%; top: 30%; widows: 318px; height: 111px; font-size: 36px;">新零售升级</div>

        <div class="con" style="left: 62%; top: 21%; widows: 309px; height: 97px; font-size: 36px; z-index: 18;">
        </div>

        <div class="con"
            style="left: 62%; top: 21%; widows: 309px; height: 97px; font-size: 48px; z-index: 22; background-color: transparent; box-shadow: none; display: flex; flex-direction: row;">
            <div style="line-height: 67px; text-align: left;">在这<br>里</div>
            <div style="line-height: 50px; margin: 0 20px;"><span style="font-size: 64px;">你</span><br>可以</div>
            <div style="line-height: 67px;">获<br>得</div>
        </div>
    </div>
</template>
  
<script>
import MyComponent from '@/components/bar.vue';

export default {
    components: {
        MyComponent
    }
    ,
    data() {
        return {
        };
    },
    methods: {
    }
};
</script>

<style scoped>
.bg-img {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
}

.con {
    /* 矩形 2 */
    position: absolute;
    left: 30%;
    top: 35%;


    width: 318px;
    height: 111px;
    color: black;
    line-height: 111px;
    text-align: center;

    font-family: 'puhui';
    font-size: 64px;


    background: rgb(255, 255, 255);
    box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 20px;

    z-index: 20;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>