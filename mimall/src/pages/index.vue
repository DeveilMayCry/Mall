<template>
    <div>
        <div class="container">
            <div class="menu">
                <div class="menuItem">
                    <div>手机 电话卡</div>
                    <div class="arrow"></div>
                    <div class="children">
                        <div class="row" v-for="(item,i) in productList" :key="i">
                            <div class="column" v-for="(value,j) in item" :key="j">
                                <img :src="value?value.img:require('../../public/imgs/item-box-1.png')" alt="">
                                <div>{{value?value.name:'小米3'}}</div>
                            </div>
                        </div>
                    </div>
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
            <div class="adsContainer">
                <a :href="'/#/product/'+item.id" v-for="(item,index) of adsList" :key="index">
                    <img class="ads" :src="item.img">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img src="../../public/imgs/banner-1.png" alt="">
                </a>
            </div>
        </div>
        <div class="phone">
            <div class="wrapper">
                <div class="catalog">手机</div>
                <div class="phoneContainer">
                    <div class="left">
                        <a href="">
                            <img src="../../public/imgs/xmad_1561118283559_PdAOq.png" alt="">
                        </a>
                    </div>
                    <div class="right">
                        <div class="rightItem" v-for="(item,index) in phoneList" :key="index">
                            <div class="type" :class="{'bgRed':index%2==0}">
                                新品
                            </div>
                            <div class="imgContainer">
                                <img :src="item.mainImage" alt="">
                            </div>
                            <div class="title">
                                {{item.name}}
                            </div>
                            <div class="subTitle">
                                {{item.subtitle}}
                            </div>
                            <div class="price">
                                {{item.price}}元
                                <a href="javascript:;" @click="BuyNow()">
                                    <img src="../../public/imgs/icon-cart-hover.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :center="true" :lock-scroll="false"
                        :close-on-click-modal="false">
                        <span>商品添加成功！</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button type="success" @click="dialogVisible = false" class="detailBtn">查看购物车</el-button>
                        </span>
                    </el-dialog>
                </div>
            </div>
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
                }],
                productList: [
                    [{
                            id: 30,
                            name: "小米cc9",
                            img: require('../../public/imgs/item-box-1.png')
                        },
                        {
                            id: 31,
                            name: "小米8青春版",
                            img: require('../../public/imgs/item-box-2.png')
                        }, {
                            id: 32,
                            name: "Redmi k20 Pro",
                            img: require('../../public/imgs/item-box-3.jpg')
                        }, {
                            id: 33,
                            name: "移动4G专区",
                            img: require('../../public/imgs/item-box-4.jpg')
                        },

                    ],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                adsList: [{
                    id: 33,
                    img: require('../../public/imgs/ads/ads-1.png')
                }, {
                    id: 48,
                    img: require('../../public/imgs/ads/ads-2.jpg')
                }, {
                    id: 45,
                    img: require('../../public/imgs/ads/ads-3.png')
                }, {
                    id: 47,
                    img: require('../../public/imgs/ads/ads-4.jpg')
                }],
                phoneList: [],
                dialogVisible: false
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.axios.get('/products', {
                    params: {
                        categoryId: 100012,
                        pageSize: 14
                    }
                }).then((res) => this.phoneList = res.list.slice(6, 14));
            },
            BuyNow() {
                this.dialogVisible = true;
            }
        },
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

                .children {
                    display: none;
                }

                &:hover {
                    .children {
                        display: block;
                    }
                }

                .arrow {
                    width: 10px;
                    height: 15px;
                    background: url('../../public/imgs/icon-arrow.png') no-repeat center;
                    background-size: contain;
                }

                .children {
                    border: 1px solid #e0e0e0;
                    position: absolute;
                    left: 264px;
                    top: 0;
                    width: 964px;
                    height: 451px;
                    background-color: #FFFFFF;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, .18);

                    .row {
                        display: flex;
                        height: 75px;
                        display: flex;
                        justify-content: space-between;

                        .column {
                            flex: 1;
                            padding-left: 23px;
                            display: flex;
                            align-items: center;
                            font-size: 14px;
                            font-family: FZLanTingHeiS-R-GB;
                            font-weight: bold;
                            color: #333333;

                            img {
                                width: 35px;
                                height: 42px;
                                margin-right: 15px;
                            }
                        }
                    }
                }
            }
        }

        .swiper-container {
            width: 642px;
            height: 617px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .adsContainer {
            height: 167px;
            padding-top: 14px;
            padding-bottom: 31px;

            a:nth-last-child(1) {
                img {
                    margin-right: 0px;
                }
            }

            img {
                height: 167px;
                width: 296px;
                margin-right: 14px;

            }
        }

        .banner {
            img {
                width: 100%;
            }
        }

    }

    .phone {
        background-color: #F5F5F5;

        .wrapper {
            width: 1226px;
            margin: 0 auto;
            padding-top: 30px;
            padding-bottom: 50px;

            .catalog {
                font-size: 22px;
                font-family: FZLanTingHeiS-R-GB;
                font-weight: bold;
                color: #333333;
                margin-bottom: 20px;
                margin-left: 0;
                margin-right: auto;
            }

            .phoneContainer {
                height: 619px;
                display: flex;

                .left {
                    img {
                        width: 224px;
                        height: 100%;
                    }

                    margin-right:16px;
                }

                .right {
                    flex: 1;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-content: space-between;

                    .rightItem {
                        width: 236px;
                        height: 302px;
                        background-color: #FFF;

                        .type {
                            width: 67px;
                            height: 24px;
                            line-height: 24px;
                            margin: 0 auto;
                            background-color: #7ECF68;
                            font-size: 14px;
                            font-weight: bold;
                            color: #FFFFFF;
                            text-align: center;
                        }

                        .type.bgRed {
                            background-color: #E82626;
                        }

                        .type.bgGreen {
                            background-color: #7ECF68;
                        }

                        .imgContainer {
                            height: 195px;
                            text-align: center;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .title {
                            font-size: 14px;
                            line-height: 14px;
                            font-weight: bold;
                            color: #333333;
                            text-align: center;
                        }

                        .subTitle {
                            margin-top: 6px;
                            font-size: 12px;
                            line-height: 12px;
                            font-weight: bold;
                            color: #999999;
                            text-align: center;
                        }

                        .price {
                            margin-top: 13px;
                            font-size: 14px;
                            line-height: 14px;
                            font-weight: bold;
                            color: #F20A0A;
                            text-align: center;

                            img {
                                width: 18px;
                                height: 14px;
                            }

                        }
                    }

                }
            }

            .dialogTitle {
                text-align: left;
            }
        }
    }
</style>