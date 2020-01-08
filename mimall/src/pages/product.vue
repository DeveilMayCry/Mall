<template>
    <div>
        <product-params></product-params>
        <div class="a">11111</div>
        <div class="a">11111</div>
        <div class="a">11111</div>
        <div class="a">11111</div>
        <div class="a">11111</div>
        <div class="a">11111</div>
    </div>
</template>

<script>
    import ProductParams from '../components/ProductParams';
    export default {
        name: 'product',
        components: {
            ProductParams
        }
    }
</script>
<style scoped lang="scss">
    .a {
        height: 250px;
    }
</style>