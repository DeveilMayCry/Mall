<template>
    <div>
        <div class="container">
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
                    id: '45',
                    img: require('../../public/imgs/slider/slide-2.jpg')
                }, {
                    id: '46',
                    img: require('../../public/imgs/slider/slide-3.jpg')
                }, {
                    id: '',
                    img: require('../../public/imgs/slider/slide-4.jpg')
                }, {
                    id: '',
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

        .swiper-container {
            height: 451px;

            img {
                width: 1226px;
            }
        }
    }
</style>