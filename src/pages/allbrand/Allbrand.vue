<template>
  <div class="wrapperhaha">
    <div class="containerhaha">
      <HeaderSlot :title="title" :bitclick="bitclick"/>
      <div class="containerone1" v-if="flag" v-for="(item,index) in allpinpailist" :ref="index+''" :key="index">
        <div class="greyNav">{{item.order}}
        </div>
        <div class="greylist" v-for="(li,index) in item.list" :key="index">
          <div class="lefticon">
            <img :src="li.logo" alt="">
          </div>
          <div class="righticon">
            <span class="one">{{li.name}}</span>
            <span class="twofo">{{li.address}}</span>
          </div>
        </div>
      </div>

    </div>

      <ul class="rightFloat" v-if="allpinpailist">
        <li v-for="(i,index) in allpinpailist"  :key="index" class="childr" :class="{activeClass:index===Activeindex}"
             @click="scrollT(index)">{{i.order}}</li>
      </ul>

  </div>

</template>

<script>
  import HeaderSlot from '../../components/headerSlot/headerSlot.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import {Indicator} from 'mint-ui'

    export default {
      data(){
        return{
          title:'全部品牌',
          flag:false,
          Activeindex:0,
          targetY:0,itemY:0,currentY:0,
          y:0
        }
      },
      mounted(){
        Indicator.open("加载中");
        this.$store.dispatch('getallbrand')
       } ,
      computed:{
        ...mapState(['allpinpailist'])
      },
      components:{HeaderSlot},
      methods:{
        scrollT(index){
            this.Activeindex=index;
            this.itemY=0
            for(let i=0;i<index;i++){//84 30
              this.itemY+=this.allpinpailist[i].list.length
            }
            this.targetY = this.itemY * 73 + index*26+50;
          this.scroll.scrollTo(0,-this.targetY)
        },
        bitclick(){
          this.$router.push("/cart")
        }
      },
      watch:{
        allpinpailist(nv){
          console.log(111);
          this.$nextTick(()=>{
            Indicator.close();
            this.flag=true;
            if(this.scroll){
              return
            }
            this.scroll=new BScroll('.wrapperhaha',{click:true});
          })
        }
      }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
body,html
  height 100%
  overflow hidden
  .wrapperhaha
    height 100%
    width 100%
    z-index -1
    .containerhaha
       width 100%
       .containerone1
        .greyNav
          width 100%
          height 27px
          background-color #eeeeee
          line-height 27px
          padding-left 10px
          box-sizing border-box
        .greylist
          box-sizing border-box
          padding 5px 10px
          display flex
          justify-content flex-start
          align-items center
          height 73px
          border-bottom 1px solid #eeeeee
          width 90%
          .lefticon
            width 30%
            height 80%
            border 1px #eeeeee solid
            margin-right 15px
            img
             width 100%
             height 100%
          .righticon
            width 55%
            height 80%
            display flex
            flex-direction column
            align-items flex-start
            justify-content center
            span
              font-size 14px
              line-height 20px
              .twofo
                color #9a9a9a


    .rightFloat
        position fixed
        right 0
        top 0
        width 15px
        height 80%
        margin-right 0
        display flex
        flex-direction column
        justify-content center
        align-items center
        background-color white
        z-index 22
        .childr
          z-index 20
          width 100%
          height 14px
          font-size 13px
          color #9a9a9a
        .activeClass
          color red !important
</style>
