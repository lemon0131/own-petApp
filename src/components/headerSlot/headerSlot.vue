<template>
    <div class="headerhaha">
      <span class="iconfont icon-jiantou4" @click="$router.back()"></span>
      <span>{{title}}</span>
      <span class="iconfont icon-quanbu1" @click="bitclick"></span>
    </div>
</template>

<script>
    export default {
      props:['title','bitclick']
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .headerhaha
    height 50px
    line-height 50px
    position: relative
    padding: 0 10px
    border-bottom 1px solid #f3f3f3
    background white
    display flex
    justify-content space-between
    align-items center
    color  #333
    .icon-quanbu1
        font-size 28px
        color #7e8c8d
    .icon-jiantou4
        color #7e8c8d
</style>
