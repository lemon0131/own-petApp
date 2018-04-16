<template>
  <div class="video">
    <div class="top">
      <a href="#" class="clickvideo">
        <img src="./5837d50b4993a5de2aff2b26ce8cf3d5.png" alt="">
        <span class="iconfont icon-shipin"></span>
      </a>
    </div>
    <div class="bottom">
      <div class="smalltop">
        第3期-汪星人你的大姨妈来了吗？
      </div>
      <div class="smallfont">
        <span>123</span>
        <span>|</span>
        <span>123</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .video
    width 100%
    height 268.5px
    overflow hidden
    .top
      height 210px
      width 100%
      position relative
      img
        width 100%
      .icon-shipin
        position absolute
        top 50%
        left 50%
        transform translate3d(-50%,-50%,0)
        color white
        font-size 20px
    .bottom
      padding 5px
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      width 100%
      height  58px
      .smallfont
        color gray

</style>
