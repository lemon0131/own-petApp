<template>
  <div class="cart">
    <HeaderTop :title="'购物车'" :bitclick="bitclick"/>
    <div class="header_quick" v-show="isshow">
      <router-link  to="/main" class="iconfont icon-shouye"></router-link>
      <router-link  to="/category" class="iconfont icon-moduanwangdian-xianxing"></router-link>
      <router-link  to="/cart" class="iconfont icon-gouwucheman"></router-link>
      <router-link  to="/user" class="iconfont icon-toys"></router-link>
    </div>
    <div class="cartbox">
      <div class="cartbox1">
        <span class="iconfont icon-gouwucheman"></span>
      </div>
      <div class="caretext"><p>购物车是空的</p></div>
      <div class="cartbotl"><p>去逛逛</p></div>
      <div class="cartbotr"><p>我的收藏</p></div>
    </div>
  </div>
</template>
<script>
  import HeaderTop from '../../components/headerSlot/headerSlot.vue'
  export default {
    data() {
      return {
        isshow:false
      }
    },
    methods:{
      bitclick(){
        this.isshow=!this.isshow
      }
    },
    components:{
      HeaderTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cart
    width 100%
    header
      display flex
      flex-direction row
      height 50px
      border-bottom 1px solid #cccccc

      .goback
        width 22px
        height 22px
        margin-top 10px
        margin-left 20px

      span
        margin-top 12px
        margin-left 116px
      .iconfont
        color #ccc
        margin-right 20px


    .header_quick
      /*display  none*/
      width 100%
      height 77px
      border-bottom 1px solid #cccccc
      .iconfont
        float left
        display  block
        font-size 40px
        text-align center
        margin-left 40px
        margin-top 20px
    .cartbox
      height 300px
      width 100%
      overflow hidden
      border-bottom 1px solid #cccccc
      .cartbox1
        margin-top 50px
        width 100px
        height 100px
        span
          margin-left 130%
          color #cccccc
          font-size 100px
      .caretext
        margin-left 130px
        margin-top 20px
        p
          color #cccccc
      .cartbotl
        float left
        width 100px
        height 40px
        border 1px solid #ccc
        margin-top 20px
        border-radius 6px
        margin-left  70px
        p
          line-height 40px
          text-align center
      .cartbotr
        float right
        width 100px
        height 40px
        border 1px solid #ccc
        margin-top 20px
        border-radius 6px
        margin-right 70px
        p
          line-height 40px
          text-align  center

</style>
