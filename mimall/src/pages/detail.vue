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
        }
    }
</style>