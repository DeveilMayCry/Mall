<template>
    <div class="container" :class='{"isFixed":isFixed}'>
        <div class="params">
            <div class="left">小米8 透明探索版</div>
            <div class="right">
                <a href="javascript:;">概述</a>|
                <a href="javascript:;">参数</a>|
                <a href="javascript:;">用户评价</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'productParams',
        data() {
            return {
                isFixed: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.InitHeight);
        },
        methods: {
            InitHeight() {
                let height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.isFixed = height > 142;
            }
        },
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 1226px;
        margin: 0 auto;
        border-top: 1px solid #E5E5E5;
        background-color: #FFFFFF;

        &.isFixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
        }

        .params {
            height: 70px;
            display: flex;
            justify-content: space-between;
            padding-top: 26px;
            box-sizing: border-box;



            .left {
                font-size: 18px;
                line-height: 18px;
                font-weight: bold;
                color: #333333;
            }

            .right {
                a {
                    font-size: 14px;
                    line-height: 14px;
                    font-weight: bold;
                    color: #666666;
                    margin: 0 10px;

                    &:nth-last-child(1) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>