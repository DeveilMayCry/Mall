<template>
    <div class="container">
        <div class="wrapper">
            <div class="logo">
                <a href="/#/index"></a>
            </div>
            <div class="mycart">{{title}}<slot name="tip"></slot>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "order-header",
        props: {
            title: String
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        height: 112px;
        padding: 30px 0;
        box-sizing: border-box;
        background-color: #FFFFFF;

        .wrapper {
            width: 1226px;
            margin: 0 auto;
            display: flex;

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

            .mycart {
                margin-left: 54px;
                line-height: 55px;
                font-size: 28px;

                span {
                    font-size: 14px;
                    margin-left: 17px;
                }
            }
        }


    }
</style>