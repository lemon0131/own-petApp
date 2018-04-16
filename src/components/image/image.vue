<template>
    <div class="petcla">
      <div class="left">
        <img src="./im.jpg" alt="">
      </div>
      <div class="right">
        <img src="./more.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {}
</script>


<style lang="stylus" rel="stylesheet/stylus">
   .petcla
      padding 10px 10px 0 10px
      box-sizing border-box
      width 100%
      height 87px
      background-color white
      overflow hidden
      .left
        width 70%
        height 100%
        float left
        img
         height 100%
      .right
        float left
        height 100%
        width 30%
        img
          width 50%
          display block
          float right


</style>
