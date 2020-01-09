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
        <div class="params">
            <img src="../../public/imgs/product/product-bg-2.png">
        </div>
        <div class="bg3">
            <img src="../../public/imgs/product/product-bg-3.png">
        </div>
        <div class="swipperContainer">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in slideList" :key="index">
                    <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="description">
            小米8 AI变焦双摄拍摄
        </div>
        <div class="bg4">
            <div class="videoBg" @click='showSlide=true'></div>
        </div>
        <div class="video-box">
            <div class="overlay" v-if='showSlide'></div>
            <div class="video" :class="{'slide':showSlide}">
                <span class="icon-close" @click='showSlide=false'></span>
                <video src="../../public/imgs/product/video.mp4" muted autoplay controls='controls'></video>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductParams from '../components/ProductParams';
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'product',
        components: {
            ProductParams,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                    slidesPerView: '3',
                    loop: true,
                    navigation: {},
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
                slideList: [{
                        id: 2,
                        img: require('../../public/imgs/product/gallery-2.png')
                    },
                    {
                        id: 3,
                        img: require('../../public/imgs/product/gallery-3.png')
                    },
                    {
                        id: 4,
                        img: require('../../public/imgs/product/gallery-4.png')
                    },
                    {
                        id: 5,
                        img: require('../../public/imgs/product/gallery-5.jpg')
                    },
                    {
                        id: 6,
                        img: require('../../public/imgs/product/gallery-6.jpg')
                    },
                ],
                showSlide: false
            }
        },
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

    .params {
        background-color: #FFFFFF;
        text-align: center;

        img {
            display: inline-block;
            width: 1226px;
            height: 397px;
            margin-top: 38px;
            margin-bottom: 45px;
        }
    }

    .bg3 {
        height: 100%;

        img {
            height: 638px;
        }
    }

    .swipperContainer {
        img {
            height: 356px
        }
    }

    .description {
        font-size: 18px;
        font-weight: bold;
        color: #333333;
        margin-top: 10px;
        text-align: center;
    }

    .bg4 {
        background-color: #070708;
        margin-top: 52px;
        margin-bottom: 52px;
        padding-top: 20px;
        padding-bottom: 20px;

        .videoBg {
            width: 1226px;
            height: 540px;
            margin: 0 auto;

            background: url('../../public/imgs/product/gallery-1.png') no-repeat center;
        }
    }


    .video-box {
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #333;
            z-index: 11;
            opacity: .5;
        }

        .video {
            z-index: 11;
            position: fixed;
            left: 50%;
            top: -50%;
            transform: translate(-50%, -50%);
            width: 1000px;
            height: 536px;
            transition: all .6s;

            &.slide {
                top: 50%;

            }

            .icon-close {
                width: 20px;
                height: 20px;
                position: absolute;
                top: 20px;
                right: 20px;
                background: url('../../public/imgs/icon-close.png') no-repeat center;
                cursor: pointer;
            }

            video {
                height: 100%;
                width: 100%;
                object-fit: cover;

            }
        }

    }
</style>