<template>
    <div>
        <product-params></product-params>
        <div class="fullWidth">
            <div class="container">
                <div class="safeArea">
                    <div class="title">
                        <div>小米</div>
                        <div>8</div>
                    </div>
                    <div class="subTitle">8 周 年 旗 舰 版</div>
                    <div class="feature">
                        <a href="javascript:;"> 全球首款双频 GP </a>
                        <span>|</span>
                        <a href="javascript:;">骁龙845</a>
                        <span>|</span>
                        <a href="javascript:;">AI 变焦双摄</a>
                        <span>|</span>
                        <a href="javascript:;">红外人脸识别</a>
                    </div>
                    <div class="price">
                        <span>¥</span>
                        <span>2599</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductParams from '../components/ProductParams';
    export default {
        name: 'product',
        components: {
            ProductParams
        }
    }
</script>
<style scoped lang="scss">
    .fullWidth {
        height: 718px;
        background: url('../../public/imgs/product/product-bg-1.png') no-repeat center;

        .container {
            padding-top: 46px;
            box-sizing: border-box;

            .safeArea {
                width: 1226px;
                margin: 0 auto;

                .title {
                    display: flex;
                    justify-content: center;

                    div:nth-child(1) {
                        font-size: 80px;
                        font-weight: bold;
                        color: #333333;
                        line-height: 99px;
                    }

                    div:nth-child(2) {
                        font-size: 99px;
                        line-height: 99px;
                        font-weight: bold;
                        color: #333333;
                    }
                }

                .subTitle {
                    font-size: 24px;
                    line-height: 24px;
                    font-weight: bold;
                    color: #333333;
                    margin-top: 4px;
                    text-align: center;
                }

                .feature {
                    margin-top: 21px;
                    text-align: center;

                    a {
                        font-size: 16px;
                        font-weight: bold;
                        color: #333333;
                        margin: 0 15px;
                    }
                }

                .price {
                    color: #333333;
                    text-align: center;
                    margin-top: 40px;

                    span {
                        display: inline-block;
                        line-height: 38px;
                    }

                    span:nth-child(1) {
                        font-size: 30px;
                        font-weight: bold;
                        color: #333333;
                        margin-right: 6px;
                    }

                    span:nth-child(2) {
                        font-size: 38px;
                        font-weight: bold;
                        color: #333333;
                    }
                }
            }
        }


    }
</style>