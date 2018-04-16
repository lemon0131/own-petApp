<template>
  <div class="current">
    <div class="state"></div>
    <div class="left">
      <img src="./dog.jpg" alt="">
    </div>
  </div>
</template>

<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .current
    width 100%
    height 160px
    overflow hidden
    display flex
    flex-direction row
    .left
      height 100%
      width 100%
      img
       width 100%
       height 100%
    .state
      width 15px
      height 15px
      color white


</style>
