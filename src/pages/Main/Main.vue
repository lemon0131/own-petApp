<template>
    <div>
      <div class="containerTop" ref="containerTop">
        <div class="topdiv" v-if="isshowTop">
          <span class="iconfont icon-cha" @click="cancleTop"></span>
        </div>
        <div class="floatTop" ref="floatTop">
          <div class="indexContent">
            <div class="topDiv">
              <div class="topTwo">
                <div class="OneItem">
                  <a href="###" class="text">
                    <span>狗狗</span>
                    <span>|</span>
                    <span>重庆</span>
                    <div class="Three"></div>
                  </a>
                </div>
                <p class="TwoItem">
                  <a href="">
                    <input type="text" class="toinput" placeholder="搜索商品和品牌">
                    <span class="search">
                      <i class="iconfont icon-search"></i>
                    </span>
                  </a>
                </p>
                <span class="ThreeItem">
                  <i class="iconfont icon-iconfontzhizuobiaozhun023110"></i>
                </span>
              </div>
            </div>
            <div class="bottomDiv wapper">
              <ul class="bottomContainer content">
                <li>
                  <a href="">
                    <span class="spanLi">
                      <span>首页</span>
                      <i class="clickNow activeClass"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span  class="spanLi">
                      <span>首页</span>
                      <i class="clickNow activeClass"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span  class="spanLi">
                      <span>首页</span>
                      <i class="clickNow activeClass"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span  class="spanLi">
                      <span>首页</span>
                      <i class="clickNow activeClass"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span  class="spanLi">
                      <span>首页</span>
                      <i class="clickNow activeClass"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span  class="spanLi">
                      <span>首页</span>
                      <i class="clickNow activeClass"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span  class="spanLi">
                      <span>首页</span>
                      <i class="clickNow activeClass"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="floatWindow"></div>
        </div>
      </div>
      <div class="swiper-container loopContainer">
        <div class="swiper-wrapper loopWrapper">
          <div class="swiper-slide loopSlide">
            <a href="javascript:;">
              <img src="./images/slide1.jpg">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="#">
              <img src="./images/slide2.jpg">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="#">
              <img src="./images/slide3.jpg">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="#">
              <img src="./images/slide3.jpg">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="#">
              <img src="./images/slide2.jpg">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="#">
              <img src="./images/slide1.jpg">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="listNav">
        <ul class="listContainer">
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;" >
              <img src="./images/listBg1.jpg" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="registerNew">
        <img src="./images/new.gif" alt="">
      </div>
      <div class="surpriseDay">
        <div class="surpriseTop">
          <div class="left">
            <img src="./images/everyday.png" alt="">
          </div>
          <div class="middle">
            <span>下一场开始</span>
            <span>14</span>
            <span>：</span>
            <span>00</span>
          </div>
          <div class="right">
            <img src="./images/more.png" alt="">
          </div>
        </div>
        <div class="surpriseBottom" >
          <div class="surpriseContainer ">
          <ul class="surpriseWrapper ">
            <li class="swiper-slide">
              <div class="image">
                <img src="./images/surpriselist.jpg" alt="">
              </div>
              <div class="price">￥123</div>
              <p class="disPrice">省￥123</p>
            </li>
            <li class="swiper-slide">
              <div class="image">
                <img src="./images/surpriselist.jpg" alt="">
              </div>
              <div class="price">￥123</div>
              <p class="disPrice">省￥123</p>
            </li>
            <li class="swiper-slide">
              <div class="image">
                <img src="./images/surpriselist.jpg" alt="">
              </div>
              <div class="price">￥123</div>
              <p class="disPrice">省￥123</p>
            </li>
            <li class="swiper-slide">
              <div class="image">
                <img src="./images/surpriselist.jpg" alt="">
              </div>
              <div class="price">￥123</div>
              <p class="disPrice">省￥123</p>
            </li>
            <li class="swiper-slide">
              <div class="image">
                <img src="./images/surpriselist.jpg" alt="">
              </div>
              <div class="price">￥123</div>
              <p class="disPrice">省￥123</p>
            </li>
            <li class="swiper-slide">
              <div class="image">
                <img src="./images/surpriselist.jpg" alt="">
              </div>
              <div class="price">￥123</div>
              <p class="disPrice">省￥123</p>
            </li>
          </ul>
          </div>
        </div>
        <Pageline />
      </div>
      <Pageline/>
      <div class="currentAd">
        <div class="state"></div>
        <div class="left">
          <img src="./images/adOne/01 (38).jpg" alt="">
        </div>
        <div class="right">
          <div class="top">
            <img src="./images/adOne/01 (25).jpg" alt="">
          </div>
          <div class="bottom">
            <img src="./images/adOne/01 (39).jpg" alt="">
          </div>
        </div>
      </div>
      <div class="showImg">
        <ImageBig/>
        <Pageline />
      </div>
      <div class="fashionVideo">
        <Imagehaha />
        <VideoImg/>
      </div>
      <div class="allServes">
        <Pageline />
        <div class="currentServes">
          <div class="state"></div>
          <div class="right">
            <div class="top">
              <img src="./images/adOne/01 (25).jpg" alt="">
            </div>
            <div class="bottom">
              <img src="./images/adOne/01 (39).jpg" alt="">
            </div>
          </div>
          <div class="right">
            <div class="top">
              <img src="./images/adOne/01 (25).jpg" alt="">
            </div>
            <div class="bottom">
              <img src="./images/adOne/01 (39).jpg" alt="">
            </div>
          </div>
        </div>
        <Pageline />
      </div>
      <div class="specialCell">
        <Imagehaha />
        <ImageBig/>
        <Pageline />
        <ImageBig/>
        <Pageline />
        <ImageBig/>
        <Pageline />
        <ImageBig/>
        <Pageline />
        <ImageBig/>
        <Pageline />
        <ImageBig/>
        <Pageline />
        <ImageBig/>
      </div>
      <div class="mengzhuass">
        <Pageline/>
        <Imagehaha/>
        <div class="swiper-container mengzhua">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;">
                <img src="./images/slide1.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="./images/slide2.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="./images/slide3.jpg">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="mengchong">
        <Imagehaha/>
        <VideoImg/>
      </div>
      <div class="xiaojuchang">
        <Imagehaha/>
        <VideoImg/>
      </div>
      <footerthank/>
    </div>
</template>

<script>
  /* eslint-disable */
  import BScroll from 'better-scroll';
  import Swiper from 'swiper';
  import Pageline from '../../components/Pageline/Pageline.vue'
  import Imagehaha from '../../components/image/image.vue'
  import ImageBig from '../../components/image/imagebig.vue'
  import VideoImg from '../../components/image/video.vue'
  import footerthank from '../../components/image/footerthank.vue'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return{
        isshowTop:true
      }
    },
    methods:{
      cancleTop(){
        this.isshowTop = false;
        let t=this.$refs.containerTop;
        let f=this.$refs.floatTop;
        t.style.height = 86+'px';
        f.style.top = 0+'px';
      }
    },
    mounted(){
      setTimeout(()=>{
        new BScroll('.wapper', {scrollX: true, click: true})
        new Swiper('.loopContainer',{
          loop:true,autoplay:true,
          pagination: {el:'.swiper-pagination', type: 'bullets'}
        })
        new Swiper('.mengzhua',{
          loop:true,autoplay:true,pagination: {el:'.swiper-pagination', type: 'bullets'}
        })
        new BScroll('.surpriseContainer',{scrollX: true, click: true})
      },500)
    },
    components:{
      Pageline,Imagehaha,ImageBig,VideoImg,footerthank
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .containerTop
    width 100%
    height 141px
    font-size 13px
    .floatTop
      position fixed
      top 55px
      z-index 3
      width 100%
      height 86px
      .indexContent
        box-sizing border-box
        margin auto
        .topDiv
          padding 5px 10px 5px 10px
          box-sizing border-box
          height 51px
          background-color white
         .topTwo
           margin 8px 0
           position relative
           box-sizing border-box
           clearFix()
           .OneItem
             position relative
             float left
             margin-right 20px
             line-height 23px
             .Three
               height 0
               width 0
               border-top solid #898989 5px
               border-left solid transparent 4px
               border-right solid transparent 4px
               position absolute
               top 9px
               left 67px
           .TwoItem
             float left
             position relative
            .toinput
              width 233px
              height 25px
              border-radius 4px
              background-color #e9e9e9
              text-indent 10px
            .search
              position absolute
              top 4px
              right 10px
              i
               font-size 7px
           .ThreeItem
             display block
             position absolute
             right 8px
             top 4px
             color #333
        .bottomDiv
          width: 100%
          height: 35px
         .bottomContainer
           white-space nowrap
           width 140%
           height 35px
           display flex
           li
            width 74.5px
            white-space nowrap
            a
              display block
              text-align center
              line-height 36px
              font-size 14px
              width 100%
              height 100%
              position relative
              background-color white
              .spanLi
                .clickNow
                  position absolute
                  bottom -2px
                  left 11px
                  width 70%
                  height 2px

                  display block
                  &.activeClass
                    background-color limegreen




    .topdiv
       position fixed
       top 0px
       left 0px
       height 55px
       width 100%
       background-image url("./images/header.jpg")
       background-size 100%
       z-index 9
       span
         line-height 55px
         margin-left 10px
         z-index 6
         color gray

  .swiper-container
    width 100%
    height 160px
    overflow hidden
    .swiper-wrapper
      height 100%
      display flex
      flex-direction row
      .swiper-slide
        width 375px
        height 100%
        a
         display block
         width 100%
         height 100%
         img
           width 100%
           height  100%

  .listNav
    .listContainer
      width 100%
      height 180px
      background-color aquamarine
      overflow hidden
      li
        width 20%
        height 50%
        float left
        background-color #7e8c8d
        a
         display block
         width 100%
         height 100%
         img
           width 100%
           height 100%
  .registerNew
    width 100%
    height 120px
    img
     width 100%
     height 100%

  .surpriseDay
    width 100%
    height 167px
    position relative
    overflow hidden
    .surpriseTop
      width 100%
      height 39px
      background-color white
      font-size 13px
      line-height 39px
      div
        float left
        height 100%
        &.left
          width 47%
          padding 8px 0
          box-sizing border-box
          img
            height 100%
        &.right
          img
            height 100%
    .surpriseBottom
      height 130.5px
      width 100%
      .surpriseContainer
          height 130px
          width 100%
          overflow hidden
          position relative
         .surpriseWrapper
           position absolute
           display flex
           flex-direction row
           overflow hidden
           top 0
           li
              width 98.5px
              height 130px
             .image
               height 75%
               width 100%
               img
                width 100%
             .price
               height 12.5%
               width 100%
               font-size 14px
               color red
               text-align center
             .disPrice
               width 100%
               color #7e8c8d
               text-align center
               font-size 14px
               height 12.5%
  .currentAd
    overflow hidden
    display flex
    flex-direction row
    width 100%
    .left
       width 50%
      img
        width 100%
        height 100%
    .right
       width 50%
       img
        width 100%
    .state
       width 5%
       color white

  .allServes
    .currentServes
      overflow hidden
      display flex
      flex-direction row
      width 100%
      img
        width 100%
        height 100%
      .right
        width 50%
        img
          width 100%
      .state
        width 5%
        color white

</style>
