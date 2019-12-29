<template>
    <div>
        <div class="header">
            <div class="navHeader">
                <div class="headerLeft">
                    <a href="javascript:;">松果出行</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="headerRight">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <div class="cart">
                        <div class="iconCart"></div>购物车(0)
                    </div>
                </div>
            </div>
        </div>
        <div class="navBody">
            <div class="logo">
                <a href="javascript:;"></a>
            </div>
            <div class="topMenu">
                <div class="popDiv">小米手机
                    <div class="children">
                        <div class="menuItemContainer" v-for="(item,index) of phoneList" :key="index">
                            <div class="menuItem">
                                <div class="productImg">
                                    <img :src="item.mainImage" alt="">
                                </div>
                                <div class="productName">{{item.name}}</div>
                                <div class="productPrice">{{item.price}}元</div>
                            </div>
                            <div v-if="index !== phoneList.length-1" class="hrVertical"></div>
                        </div>
                    </div>
                </div>
                <div>Redmi手机</div>
                <div>电视</div>
            </div>
            <div class="search">
                <input type="text">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-header",
        data() {
            return {
                userName: 'jack',
                phoneList: []
            }
        },
        mounted() {
            this.getProductList();
        },
        methods: {
            getProductList() {
                this.axios.get('/products', {
                    params: {
                        categoryId: '100012'
                    }
                }).then(res => {
                    if (res.list.length > 6) {
                        this.phoneList = res.list.slice(0, 6);
                    }
                })
            }
        },
    }
</script>
<style lang="scss">
    .header {
        width: 100%;
        background-color: #333;

        .navHeader {
            margin: 0 auto;
            width: 1226px;
            height: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .headerLeft {
                display: flex;

                a {
                    color: #B0B0B0;
                    margin-right: 17px;
                    line-height: 12px;
                }
            }

            .headerRight {
                display: flex;
                align-items: center;
                line-height: 12px;
                color: #B0B0B0;

                .cart {
                    width: 110px;
                    margin-left: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 30px;
                    background-color: #FF6600;
                    cursor: pointer;

                    .iconCart {
                        width: 16px;
                        height: 12px;
                        background: url("./../assets/购物车.png") no-repeat center;
                        background-size: contain;
                        margin-right: 4px;
                    }
                }

                a {
                    color: #B0B0B0;
                    margin-left: 19px;
                }
            }
        }
    }

    .navBody {
        width: 1226px;
        height: 112px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        position: relative;

        .logo {
            width: 55px;
            height: 55px;
            background-color: #FF6600;



            a {
                display: inline-block;
                width: 110px;
                height: 55px;

                &:before {
                    display: inline-block;
                    content: ' ';
                    width: 55px;
                    height: 55px;
                    background: url('./../../public/imgs/mi-logo.png') no-repeat center;
                    background-size: 55px;
                    transition: all .2s;
                }

                &:after {
                    display: inline-block;
                    content: ' ';
                    width: 55px;
                    height: 55px;
                    background: url('./../../public/imgs/mi-home.png') no-repeat center;
                    background-size: 55px;
                }

                &:hover:before {
                    margin-left: -55px;
                    transition: all .2s;
                }

            }

        }

        .topMenu {
            display: flex;
            font-size: 16px;
            margin-left: 209px;
            font-weight: bold;
            color: #333333;



            &>div {
                margin-right: 20px;
            }

            .popDiv {

                &:hover {
                    .children {
                        height: 194px;
                        opacity: 1;
                        transition: all .5s;

                    }
                }

                .children {

                    width: 1226px;
                    height: 194px;
                    height: 0px;
                    opacity: 0;
                    position: absolute;
                    margin: 0 auto;
                    top: 112px;
                    left: 0px;
                    border: none;
                    border-top: 1px solid #E5E5E5;
                    padding-top: 26px;
                    box-shadow: 0px 7px 6px 0px #000000;
                    font-size: 12px;
                    line-height: 12px;
                    font-weight: bold;
                    overflow: hidden;
                    transition: all .5s;
                    display: flex;

                    .menuItemContainer {
                        display: flex;

                        .menuItem {
                            width: 203px;
                            text-align: center;

                            .productImg {
                                height: 111px;
                                margin: 0 auto;

                                img {
                                    height: 111px;
                                }
                            }

                            .productName {
                                text-align: center;
                                margin-top: 19px;
                            }

                            .productPrice {
                                text-align: center;
                                margin-top: 8px;
                                color: #FF6600;
                            }


                        }

                        .hrVertical {
                            width: 1px;
                            height: 99px;
                            border: none;
                            border-left: 1px solid #D7D7D7;
                            margin-top: 3px;
                        }
                    }

                }
            }

        }

        .search {
            display: flex;
            margin-left: auto;

            input {
                width: 264px;
                height: 50px;
                border: 1px solid #E0E0E0;
                padding-left: 10px;
            }

            div {
                width: 55px;
                height: 50px;
                background: url('./../../public/imgs/icon-search.png') no-repeat center;
                border: 1px solid #E0E0E0;
                border-left: none;
            }

        }
    }
</style>