<template>
    <div>
        <div class="container">
            <div class="header">
                <img src="./../../public/imgs/login-logo.png" alt="">
            </div>
        </div>
        <div class="fullWidth">
            <div class="body">
                <div class="loginDialog">
                    <div class="loginType">
                        <div>账号登录</div>
                        <div>扫码登录</div>
                    </div>
                    <div class="inputs">
                        <input class="account" type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
                        <input class="password" type="password" placeholder="密码" v-model="password">
                    </div>
                    <div class="loginBtn" @click="loginHandler">
                        登录
                    </div>
                    <div class="regist">
                        <div class="phoneRegist">手机短信登录/注册</div>
                        <div class="registAndForget">
                            <span @click="registHandler">立即注册</span>
                            |
                            <span>忘记密码？</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>

</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            loginHandler() {
                let {
                    username,
                    password
                } = this;
                this.axios.post('/user/login', {
                    username,
                    password
                }).then((res) => {
                    this.$cookie.set('userId', res.id, {
                        expires: '1M'
                    })
                    this.$router.push('/index')
                });
            },
            registHandler() {
                let {
                    username,
                    password
                } = this;
                this.axios.post('/user/register', {
                    username,
                    password,
                    email: '506587246@qq.com'
                }).then(() => {
                    alert('注册成功')
                });
            }
        },
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 1226px;
        margin: 0 auto;
        height: 112px;

        img {
            height: 112px;
        }
    }

    .fullWidth {
        width: 100%;
        height: 576px;
        background: url('./../../public/imgs/login-bg.jpg') no-repeat center;

        .body {
            width: 1226px;
            margin: 0 auto;
            position: relative;

            .loginDialog {
                background-color: #FFFFFF;
                width: 410px;
                height: 510px;
                position: absolute;
                top: 37px;
                right: 0;
                padding: 40px 31px 0 31px;
                box-sizing: border-box;

                .loginType {
                    display: flex;
                    font-size: 24px;
                    line-height: 24px;
                    font-weight: bold;
                    text-align: center;

                    div {
                        flex: 1;

                        &:nth-child(1) {
                            color: #FF6600;
                            border-right: 2px solid #D7D7D7;
                        }
                    }
                }

                .inputs {
                    margin-top: 49px;

                    input {
                        display: block;
                        width: 348px;
                        height: 50px;
                        padding-left: 18px;
                        font-size: 14px;
                        border: 1px solid #E5E5E5;
                        box-sizing: border-box;

                        &:nth-last-child(1) {
                            margin-top: 18px;
                        }
                    }
                }

                .loginBtn {
                    background-color: #FF6600;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                    color: #FFFFFF;
                    margin-top: 30px;
                    cursor: pointer;
                }

                .regist {
                    margin-top: 14px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;

                    .phoneRegist {
                        font-weight: bold;
                        color: #FF6600;
                        cursor: pointer;
                    }

                    .registAndForget {
                        span {
                            display: inline-block;
                            margin-left: 7px;
                            margin-right: 7px;
                            cursor: pointer;

                            &:nth-last-child(1) {
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>