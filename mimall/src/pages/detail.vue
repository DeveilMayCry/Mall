<template>
    <div>
        <product-params></product-params>
        <div class="container">
            <div class="left">
                <div class="swipperContainer">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item,index) in slideList" :key="index">
                            <img :src="item.img" alt="">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                    <div class="swiper-pagination" slot="pagination"></div>
                </div>
            </div>
            <div class="right">
                <div class="title">小米8</div>
                <div class="future">
                    相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
                    外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
                </div>
                <div class="seller">小米自营</div>
                <div class="prices">
                    <span class="current">2599元</span>
                    <span class="older">2999元</span>
                </div>
                <div class="line"></div>
                <div class="address">
                    <div class="iconAddress"></div>
                    <div class="addressDetail">
                        <span>北京 北京市 朝阳区 安定门街道</span><span>修改</span>
                        <div class="hasStock">有现货</div>
                    </div>
                </div>
                <div class="title3">选择版本</div>
                <div class="wraper">
                    <div class="versionPrice">6GB+64GB 全网通 1099元</div>
                    <div class="versionPrice">4GB+64GB 移动4G 1049元</div>
                </div>
                <div class="title3">选择颜色</div>
                <div class="wraper">
                    <div class="color">深空灰</div>
                </div>
                <div class="checkContainer">
                    <div class="description">
                        <span>小米8 6GB+64GB 全网通 深灰色</span>
                        <div>
                            <span>1099元</span>
                            <span>1699元</span>
                        </div>
                    </div>
                    <div class="totalPrice">总计：1099元</div>
                </div>
                <div class="buttons">
                    <div class="cart">加入购物车</div>
                    <div class="like">
                        <div>喜欢</div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
    import ServiceBar from '../components/ServiceBar';
    import ProductParams from '../components/ProductParams';
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'detail',
        components: {
            ServiceBar,
            ProductParams,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
                slideList: [{
                        id: 2,
                        img: require('../../public/imgs/detail/phone-1.jpg')
                    },
                    {
                        id: 3,
                        img: require('../../public/imgs/detail/phone-2.jpg')
                    },
                    {
                        id: 4,
                        img: require('../../public/imgs/detail/phone-3.jpg')
                    },
                    {
                        id: 5,
                        img: require('../../public/imgs/detail/phone-4.jpg')
                    }
                ],
            }
        },
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 1226px;
        margin: 0 auto;
        display: flex;

        .left {
            width: 50%;

            .swiper-container {
                .swiper-slide {
                    text-align: center;

                    img {
                        width: 642px;
                        height: 642px;
                    }
                }

            }
        }

        .right {
            width: 50%;

            .title {
                margin-top: 30px;
                font-size: 28px;
                line-height: 28px;
                font-weight: bold;
                color: #333333;
            }

            .future {
                margin-top: 16px;
                font-size: 14px;
                font-weight: bold;
                color: #999999;
            }

            .seller {
                margin-top: 26px;
                font-size: 16px;
                line-height: 16px;
                font-weight: bold;
                color: #FF6700;
            }

            .current {
                font-size: 20px;
                line-height: 20px;
                font-weight: bold;
                color: #FF6700;
                display: inline-block;
                margin-top: 14px;
                margin-right: 10px;
            }

            .older {
                display: inline-block;
                text-decoration: line-through;
                font-size: 14px;
                font-weight: bold;
                color: #999999;
            }

            .line {
                border: 1px solid #E5E5E5;
                margin: 25px 0 28px 0;
            }

            .address {
                height: 108px;
                display: flex;
                background-color: #E5E5E5;
                padding: 27px 0 0 34px;
                box-sizing: border-box;
                border: 1px solid #E5E5E5;

                .iconAddress {
                    width: 20px;
                    height: 22px;
                    background: url('../../public/imgs/icon-loc.png') no-repeat;
                    background-size: 20px 22px;
                    margin-right: 10px;
                }

                .addressDetail {
                    font-size: 14px;
                    font-weight: bold;
                    color: #666666;

                    span {
                        margin-right: 20px;

                        &:nth-child(2) {
                            color: #FF6700;
                        }
                    }

                    .hasStock {
                        margin-top: 20px;
                        height: 14px;
                        font-size: 14px;
                        font-weight: bold;
                        color: #FF6700;
                    }
                }
            }

            .title3 {
                font-size: 18px;
                line-height: 18px;
                font-weight: bold;
                color: #333333;
                margin-top: 30px;
            }

            .wraper {
                margin-top: 20px;
                display: flex;
                justify-content: space-between;

                .versionPrice,
                .color {
                    width: 297px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                    color: #666666;
                    border: 1px solid #E5E5E5;
                }

                .color {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:before {
                        content: ' ';
                        display: inline-block;
                        width: 14px;
                        height: 16px;
                        background-color: #666666;
                        margin-right: 9px;
                    }
                }


            }

            .checkContainer {
                height: 108px;
                background-color: #FAFAFA;
                margin-top: 50px;
                padding: 20px 30px;
                box-sizing: border-box;

                .description {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    font-weight: bold;
                    color: #333333;

                    div {
                        span:nth-child(2) {
                            margin-left: 9px;
                            text-decoration: line-through;
                        }
                    }
                }

                .totalPrice {
                    font-size: 24px;
                    font-weight: bold;
                    color: #FF6600;
                    margin-top: 18px;
                }
            }

            .buttons {
                margin-top: 30px;
                display: flex;
                text-align: center;

                .cart {
                    width: 300px;
                    height: 54px;
                    line-height: 54px;
                    background-color: #FF6600;
                    font-size: 16px;
                    font-weight: bold;
                    color: #FFFFFF;

                }

                .like {
                    margin-left: 21px;
                    width: 142px;
                    height: 54px;
                    line-height: 54px;
                    background-color: #BBBBBB;
                    font-size: 16px;
                    font-weight: bold;
                    color: #FFFFFF;
                    text-align: center;

                    div:before {
                        content: ' ';
                        display: inline-block;
                        width: 18px;
                        height: 16px;
                        background: url('../../public/imgs/love.png') no-repeat center;
                        margin-right: 17px;
                        vertical-align: middle
                    }
                }
            }
        }
    }
</style>