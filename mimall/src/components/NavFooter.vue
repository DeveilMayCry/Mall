<template>
    <div class="container">
        <div class="logo">
            <img src="../../public/imgs/logo-footer.png" alt="">
        </div>
        <div class="name">小米商城</div>
        <div class="link"></div>
        <div class="copyright">Copyright@2019 <span class="domain">tset.com</span> All Rights Reserved</div>
    </div>
</template>

<script>
    export default {
        name: "nav-footer"
    }
</script>
<style lang="scss" scoped>
    .container {
        height: 187px;
        background-color: #333333;
        width: 100%;
        font-size: 16px;
        color: #999999;
        padding-top: 46px;
        border-top: 4px solid #FF7301;

        .logo {
            text-align: center;

            img {

                width: 53px;
            }
        }

        .name {
            margin-top: 13px;
            text-align: center;
        }

        .copyright {
            margin-top: 50px;
            text-align: center;

            .domain {
                color: #FF6600;
            }
        }
    }
</style>