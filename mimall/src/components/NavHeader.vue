<template>
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
                    <div class="iconCart"></div>购物车
                </div>
            </div>
        </div>
        <div class="navBody">
        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-header"
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
</style>