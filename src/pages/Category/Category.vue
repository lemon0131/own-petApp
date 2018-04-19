<template>
    <div class="con">
      <div class="header">
        <div class="nabian">
          <a href="javascript:;" :class="{activeClass:choose=='fenlei'}" @click="change('fenlei')">分类</a>
          <a href="javascript:;" :class="{activeClass:choose=='pinpai'}" @click="change('pinpai')">品牌</a>
        </div>
        <span class="search iconfont icon-search">
          <a href=""></a>
        </span>
      </div>
      <div class="bottom" v-if="Categorydata">
        <div v-show="choose==='fenlei'">
          <div class="left" id="left_container">
            <ul>
              <li v-for="(item,index) in Categorydata" :key="index" @click="changeIndex(index)">
                {{item.name}}
              </li>
            </ul>
          </div>
          <div class="right " id="right_container" style="border-top: solid 2px #f3f4f5;">
            <div>
              <div class="wrapdiv" v-for="(item,index) in showRightMsg" :key="index">
                <a class="title" href="">
                  {{item.title}}
                  <img v-if="index===0" class="ifitshow" :src="item.rigth_img.image">
                </a>
                <ul class="goodlist right_container">
                  <li v-for="(liInfo,index) in item.list" :style="{width:liInfo.photo?'33.333%':'50%'}" :key="index">
                    <a href="">
                      <img :src="liInfo.photo?liInfo.photo:liInfo.logo" alt="">
                    </a>
                    <p>{{liInfo.name}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-show="choose==='pinpai'">
          <div v-if="pinpaishow" style="padding: 2px">
            <div class="wrapdiv" style="margin-bottom: 2px;width: 100%;margin-top: 10px" v-for="(item,index) in pinpaiLists" :key="index">
              <a class="title" href="" style="display: block;line-height: 39px;height: 39px;width: 100%;text-align: center">
                —— {{item.title}} ——
              </a>
              <ul class="goodlist" style="overflow: hidden">
                <li v-for="(pinpai,index) in item.list" :key="index" style='float: left;width: 33.333%;height:107px;display: flex;flex-direction: column;' >
                  <a href="" style=" height: 90%;display: block;border: 1px solid #e2e2e2;overflow: hidden">
                    <img style="width: 100%;height: 100%" :src="pinpai.logo" alt="">
                  </a>
                  <span style="display: block;line-height: 20px;text-align: center;color: #333333">{{pinpai.name}}</span>
                  <span style="text-align: center;line-height: 20px;;color: #7e8c8d">{{pinpai.address}}</span>
                </li>

              </ul>
              <div style="height: 2px;width: 100%;color: #9a9a9a;margin: 5px"></div>
            </div>
          </div>

        </div>
     </div>
      <div class="all" @click="$router.push('/all')">全部</div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import {Indicator} from 'mint-ui'
  export default {
    data(){
      return {
        currentIndex:0,
        choose:"fenlei",
        pinpaishow:false
      }
    },
    computed:{
      ...mapState(['Categorydata','pinpaiLists']),
      showRightMsg(list){
        list=this.currentIndex
        return this.Categorydata[list]?this.Categorydata[list].cate_list : [];
      }
    },
    mounted(){
      Indicator.open("加载中");
      this.$store.dispatch('getCategorydata',()=>{
        this.$nextTick(()=>{
          this.scroll=new BScroll('#left_container',{click:true});
        })
      })

      setTimeout(()=>{
        Indicator.close()
      },500)
      //new BScroll('#right_container')
    },
    methods:{
      changeIndex(i){
        this.currentIndex=i
      },
      change(type){
        this.choose=type;
        if(type==='pinpai'){

          if(!this.pinpaiList){
            this.$store.dispatch('getpinpaiList',()=>{
              this.$nextTick(()=>{
                this.pinpaishow = true;
              })
            })
          }else{
            this.pinpaishow = true;
          }
        }else{
          this.pinpaishow=false
        }
      },

    }

//    watch:{
//      Categorydata(newValue){
//        this.$nextTick(()=>{
//          if(this.scroll){
//            this.scroll.refresh();
//            return
//          }
//          console.log(newValue)
//          this.scroll=new BScroll('#left_container',{click:true})
//          console.log(88888)
//         // this.scroll=new BScroll('#right_container')
//
//        })
//      }
//    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

  .con
    height 100%
    position relative
    .header
      position fixed
      top 0
      box-sizing border-box
      width 100%
      padding 0 15px
      border 1px solid #cbcbcb
      height 6%
      margin-top 0
      z-index 10
      background-color #ffffff
      font-size 14px
      color #333333
      .nabian
        display flex
        flex-direction row
        justify-content center
        align-items center
        width 100%
        height 40px
        a
          display block
          width 40px
          height 39px
          line-height 40px
          box-sizing border-box
          text-align center
          &.activeClass
            border-bottom 1px red solid
            color  red

      .search
          position absolute
          right 0px
          top 12px
          display inline-block
          width 40px
          height 30px
          a
            display inline-block
            width 40px
            height 30px

    .bottom
      width 100%
      height 94%
      margin-top 40px
      font-size 13px
      color #333333
      clearFix()
      .left
         height 87%
         width 20%
         position fixed
         top 40px
         left 0
         margin-bottom 45px
         border-right 5px solid #f3f4f5
        ul
          li
           padding 0 7px
           width 70px
           height 50px
           border-bottom 1px solid #f3f4f5
           box-sizing border-box
           text-align center
           line-height 50px
      .right
         height 100%
         margin-left 75px
         margin-bottom 45px
         width 80%
         .wrapdiv
            display flex
            flex-direction column
            justify-content flex-start
            width 100%
            padding 5px 5px 20px
            a
              display block
              width 100%
              height 30px
              box-sizing border-box
              position relative
              text-align left
              line-height 35px
              padding-left 10px
              font-size 14px
              img
               position  absolute
               height 37%
               width 47px
               right 15px
               bottom 3px



            .goodlist
               width 100%
               li
                 border 1px #f3f4f5 solid
                 width 33.333%
                 height 116.666px
                 float left
                 box-sizing border-box
                 padding 0 5px
                 position relative
                 a
                  display block
                  width 100%
                  height 85%

                  img
                    width 100%
                    height 86px
                    position absolute
                    top 0
                    left 0
                 p
                  width 100%
                  height 15%
                  text-align center
                  line-height 17px

     .all
        width 45px
        height 45px
        background #7e8c8d
        opacity 0.3
        position fixed
        bottom 60px
        right 20px
        border-radius 50%
        font-size 14px
        text-align center
        line-height 45px
        color white
        font-weight bold
        z-index 11
</style>
