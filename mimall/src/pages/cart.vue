<template>
  <div>
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="proContainer">
      <div class="wrapper">
        <div class="titles">
          <span class="checkbox"></span>
          <div class="allCheck">全选</div>
          <div class="name">商品名称</div>
          <div class="price">单价</div>
          <div class="count">数量</div>
          <div class="subTotal">小计</div>
          <div class="operation">操作</div>
        </div>
        <div class="item">
          <span class="checkbox"></span>
          <img src="../../public/imgs/item-box-3.jpg" alt />
          <div class="name">小米8 6GB 全息幻彩紫 64GB</div>
          <div class="price">1999元</div>
          <div class="count">
            <div class="minus">-</div>
            <div class="countText">1</div>
            <div class="plus">+</div>
          </div>
          <div class="subTotal">1999元</div>
          <span class="delete"></span>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFooter";
export default {
  name: "cart",
  components: {
    OrderHeader,
    NavFooter
  }
};
</script>
<style lang="scss" scoped>
.proContainer {
  background-color: #f5f5f5;
  padding: 32px 0 112px 0;

  .wrapper {
    background-color: #ffffff;
    width: 1226px;
    margin: 0 auto;

    .checkbox {
      width: 22px;
      height: 22px;
      border: 1px solid #e5e5e5;
      cursor: pointer;
      margin-left: 72px;
    }

    .titles {
      display: flex;
      align-items: center;
      height: 79px;
      font-size: 14px;
      font-weight: bold;
      color: #666666;

      .allCheck {
        margin-left: 17px;
      }

      .name {
        margin-left: 140px;
      }

      .price {
        margin-left: 391px;
      }

      .count {
        margin-left: 140px;
      }

      .subTotal {
        margin-left: 145px;
      }

      .operation {
        margin-left: 77px;
      }
    }

    .item {
      display: flex;
      height: 125px;
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      align-items: center;

      font-size: 18px;
      font-weight: bold;
      color: #333333;

      img {
        height: 80px;
        width: 80px;
        margin-left: 74px;
        margin-right: 30px;
      }

      .name {
        /* margin-left: 30px; */
        flex: 2;
      }

      .price,
      .subTotal {
        flex: 1;
        font-size: 16px;
        text-align: center;
      }

      .price {
      }

      .count {
        width: 150px;
        height: 40px;
        border: 1px solid #e5e5e5;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .minus,
        .plus {
          cursor: pointer;
        }
        .countText {
          font-size: 12px;
        }
      }

      .subTotal {
        color: #ff6600;
      }

      .delete {
        display: inline-block;
        height: 12px;
        width: 14px;
        margin-right: 32px;
      }
    }
  }
}
</style>