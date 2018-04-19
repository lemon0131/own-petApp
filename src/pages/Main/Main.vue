<template>
  <div >
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
          <div class="bottomDiv wapper" >
            <ul class="bottomContainer content" v-if="homeDataInfo.length">
              <li v-for="(item,index) in homeDataInfo" :key="index" @click="turnGreen(index)">
                <a :href="item.menu_target">
                    <span class="spanLi">
                      <span>{{item.menu_name}}</span>
                      <i class="clickNow" :class="{activeClass:isgreen===index}"></i>
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
      <div class="swiper-wrapper loopWrapper" v-if="superData.data">
        <div class="swiper-slide loopSlide" v-for="(item,index) in superData.data['1'].value" :key="index">
          <a :href="item.target.param">
            <img :src="item.image">
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="listNav" v-if="homeDataInfo01[1]">
      <ul class="listContainer">
        <li v-for="(item,index) in homeDataInfo01[1].menus" :key="index">
          <a :href="item.target.param" >
            <img :src="item.image" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="registerNew" v-if="superData.data">
      <img :src="superData.data['2438'].value[0].image" alt="">
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
        <div class="surpriseContainer" >
          <ul class="surpriseWrapper " >
            <li class="swiper-slide" v-if="goods" v-for="(item,index) in goods" :key="index">
              <div class="image">
                <img :src="item.image.image" alt="">
              </div>
              <div class="price">{{item.sale_price}}</div>
              <p class="disPrice">{{item.little_price}}</p>
            </li>

          </ul>
        </div>
      </div>
      <Pageline />
    </div>
    <Pageline/>
    <div class="currentAd" v-if="homeDataInfo01[5]">
      <div class="state"></div>
      <div class="left">
        <img :src="homeDataInfo01[5].content_images[0][0].image" alt="">
      </div>
      <div class="right">
        <div class="top">
          <img :src="homeDataInfo01[5].content_images[1][0].image" alt="">
        </div>
        <div class="bottom">
          <img :src="homeDataInfo01[5].content_images[1][1].image" alt="">
        </div>
      </div>
    </div>
    <div class="showImg" v-if="homeDataInfo01[21]">
      <ImageBig :image="homeDataInfo01[21].content_images[0][0].image"/>
      <Pageline />
    </div>
    <div class="fashionVideo" v-if="homeDataInfo01.length">
      <Imagehaha :img="homeDataInfo01[9].value.left.img.image"/>
      <VideoImg :link="homeDataInfo01[10].value[0].link"
                :videobg="homeDataInfo01[10].value[0].cover.image"
                :title="homeDataInfo01[10].value[0].title"
                :visit="homeDataInfo01[10].value[0].visit"
                :time="homeDataInfo01[10].value[0].time"

      />
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
    <div class="specialCell" v-if="homeDataInfo01[19]">
      <Imagehaha :img="homeDataInfo01[14].value.left.img.image"/>
      <ImageBig :image="homeDataInfo01[19].content_images[0][0].image"/>
      <Pageline />
      <ImageBig :image="homeDataInfo01[21].content_images[0][0].image"/>
      <Pageline />
      <ImageBig :image="homeDataInfo01[23].content_images[0][0].image"/>
      <Pageline />
      <ImageBig :image="homeDataInfo01[19].content_images[0][0].image"/>
      <Pageline />
      <ImageBig :image="homeDataInfo01[21].content_images[0][0].image"/>
      <Pageline />
      <ImageBig :image="homeDataInfo01[23].content_images[0][0].image"/>
    </div>
    <div class="mengzhuass" v-if="homeDataInfo01[19]">
      <Pageline/>
      <Imagehaha :img="homeDataInfo01[14].value.left.img.image"/>
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
    <div class="mengchong" v-if="homeDataInfo01[19]">
      <Imagehaha :img="homeDataInfo01[14].value.left.img.image"/>
      <VideoImg :link="homeDataInfo01[10].value[0].link"
                :videobg="homeDataInfo01[10].value[0].cover.image"
                :title="homeDataInfo01[10].value[0].title"
                :visit="homeDataInfo01[10].value[0].visit"
                :time="homeDataInfo01[10].value[0].time"/>
    </div>
    <div class="xiaojuchang" v-if="homeDataInfo01[19]">
      <Imagehaha  :img="homeDataInfo01[9].value.left.img.image"/>
      <VideoImg :link="homeDataInfo01[10].value[0].link"
                :videobg="homeDataInfo01[10].value[0].cover.image"
                :title="homeDataInfo01[10].value[0].title"
                :visit="homeDataInfo01[10].value[0].visit"
                :time="homeDataInfo01[10].value[0].time"/>
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
  import {Indicator} from 'mint-ui'
  import 'swiper/dist/css/swiper.min.css';
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        isshowTop:true,
        isgreen:0,
        goods:[],
        loading:true
      }
    },
    computed:{
      ...mapState(['homeDataInfo','homeDataInfo01','superData']),


    },
    methods:{
      haha(){
        if(!(this.homeDataInfo && this.homeDataInfo01 && this.superData.data)){
          Indicator.open("加载中");
        }
      },
      turnGreen(i){
          this.isgreen = i;
      },
      cancleTop(){
        this.isshowTop = false;
        let t=this.$refs.containerTop;
        let f=this.$refs.floatTop;
        t.style.height = 86+'px';
        f.style.top = 0+'px';
      }
    },
    mounted(){
      this.haha();
      setTimeout(()=>{
        new Swiper('.mengzhua',{
          loop:true,autoplay:true,pagination: {el:'.swiper-pagination', type: 'bullets'}
        })

      },1000)
    },
    components:{
      Pageline,Imagehaha,ImageBig,VideoImg,footerthank
    },
    watch:{
      homeDataInfo(newValue){
        this.$nextTick(()=>{
          new BScroll('.wapper', {scrollX: true, click: true})
        })
      },
      superData(newValue){
        this.$nextTick(()=>{
          Indicator.close();
          new Swiper('.loopContainer',{
            loop:true,autoplay:true,
            pagination: {el:'.swiper-pagination', type: 'bullets'}
          })
          new BScroll('.surpriseContainer',{scrollX: true, click: true})
          this.goods=this.superData.data["3"].goods;
        })
      }
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
    height 110px
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
          width 110px
          height 130px
        .image
          height 70%
          width 100%
          img
            height 100%
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
