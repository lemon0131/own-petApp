<template>
  <div class="video">
    <div class="top">
      <a :href="link" class="clickvideo">
        <img :src="videobg" alt="">
        <span class="iconfont icon-shipin"></span>
      </a>
    </div>
    <div class="bottom">
      <div class="smalltop" style="font-size: 14px;color: #7e8c8d">
        {{title}}
      </div>
      <div class="smallfont" style="font-size: 14px;color: #7e8c8d">
        <span>{{visit}}</span>
        <span>|</span>
        <span>{{time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['link','videobg','title','visit','time']
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
