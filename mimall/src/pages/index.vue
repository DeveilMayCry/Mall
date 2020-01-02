<template>
    <div>
        <div class="container">
            <div class="menu">
                <div class="menuItem">
                    <div>手机 电话卡</div>
                    <div class="arrow"></div>
                </div>
                <div class="menuItem">
                    <div>电视 盒子</div>
                    <div class="arrow"></div>
                </div>
                <div class="menuItem">
                    <div>笔记本 平板</div>
                    <div class="arrow"></div>
                </div>
                <div class="menuItem">
                    <div>家电 插线板</div>
                    <div class="arrow"></div>
                </div>
                <div class="menuItem">
                    <div>出行 穿戴</div>
                    <div class="arrow"></div>
                </div>
                <div class="menuItem">
                    <div>耳机 音响</div>
                    <div class="arrow"></div>
                </div>
                <div class="menuItem">
                    <div>电源 配件</div>
                    <div class="arrow"></div>
                </div>
                <div class="menuItem">
                    <div>生活 箱包</div>
                    <div class="arrow"></div>
                </div>
            </div>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in slideList" :key="index">
                    <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <service-bar>
        </service-bar>
    </div>
</template>

<script>
    import ServiceBar from './../components/ServiceBar'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'index',
        components: {
            ServiceBar,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    effect: 'cube',
                    cubeEffect: {
                        slideShadows: true,
                        shadow: false,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
                slideList: [{
                    id: '42',
                    img: require('../../public/imgs/slider/slide-1.jpg')
                }, {
                    id: '43',
                    img: require('../../public/imgs/slider/slide-2.jpg')
                }, {
                    id: '44',
                    img: require('../../public/imgs/slider/slide-3.jpg')
                }, {
                    id: '45',
                    img: require('../../public/imgs/slider/slide-4.jpg')
                }, {
                    id: '46',
                    img: require('../../public/imgs/slider/slide-5.jpg')
                }]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 1226px;
        margin: 0 auto;

        .menu {
            position: absolute;
            z-index: 2;
            width: 264px;
            height: 451px;
            background-color: #55585A8A;
            padding: 26px 0;
            padding-right: 30px;
            box-sizing: border-box;

            .menuItem {
                height: 50px;
                font-size: 16px;
                font-family: FZLanTingHeiS-R-GB;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                line-height: 50px;
                padding-left: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .arrow {
                    width: 10px;
                    height: 15px;
                    background: url('../../public/imgs/icon-arrow.png') no-repeat center;
                    background-size: contain;
                }
            }
        }

        .swiper-container {
            height: 451px;

            img {
                height: 451px;
                width: 100%;
            }

            .swiper-button-prev {
                left: 274px;
            }
        }

    }
</style>