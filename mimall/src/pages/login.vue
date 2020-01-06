<template>
    <div>
        <div class="container">
            <div class="header">
                <img src="./../../public/imgs/login-logo.png" alt="">
            </div>
        </div>
        <div class="fullWidth">
            <div class="body">
                <div class="">

                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>

</template>

<script>
    export default {
        name: 'login',
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
    }
</style>