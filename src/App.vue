<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isfooterShow"/>
  </div>
</template>

<script>

  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    components:{
      FooterGuide
    },
    mounted(){
        this.$store.dispatch("getautouser");
        this.$store.dispatch('gethomeData');
        this.$store.dispatch('gersuper_data');
        this.$store.dispatch('gethomeData01')
    },
    watch:{
//      reqData(boo){
//        console.log(this.$store.state.Categorydata.length);
//        if(boo && (!this.$store.Categorydata)){
//          this.$store.dispatch('getCategorydata')
//        }
//      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    position relative
</style>
