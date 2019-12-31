<template>
    <div class="container">
        <div class="order fl">
            <img src="../../public/imgs/icon-setting.png" alt="">预约维修服务</div>
        <div class="return fl">
            <img src="../../public/imgs/icon-7day.png" alt="">7天无理由退货</div>
        <div class="exchange fl">
            <img src="../../public/imgs/icon-15day.png" alt="">15天免费换货</div>
        <div class="posy fl">
            <img src="../../public/imgs/icon-post.png" alt="">满150元包邮</div>
    </div>
</template>

<script>
    export default {
        name: "service-bar"
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 33px 0;
        display: flex;
        font-size: 16px;
        color: #666666;
        font-weight: bold;

        .fl {
            flex: 1;
            text-align: center;
        }

        div {
            border-right: 1px solid #E5E5E5;
        }

        img {
            height: 20px;
            vertical-align: middle;
            margin-right: 8px;
        }
    }
</style>