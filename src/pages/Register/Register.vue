<template>
    <div class="container" >
      <div class="one" v-show="isshowOne">
        <ul class="formContent">
          <li>
            <span class="iconfont icon-yonghu"></span>
            <input v-model="phoneN" type="text" placeholder="手机号/邮箱/用户名" name="username" id="username">
          </li>
        </ul>
        <div class="registerBtn"  @click="isshowTwo">
          <a href="#" :class="{Activeclass:rightNumber}">下一步</a>
        </div>
      </div>
      <div class="two" v-show="!isshowOne">
        <ul class="formContent formContenttwo" style="height: 300px">
          <li>
            <span class="iconfont icon-iphone"></span>
            <input v-model="phoneN" type="text" placeholder="手机号/邮箱/用户名" name="phoneN" id="phoneN">
          </li>
          <li>
            <span class="iconfont icon-suo"></span>
            <input v-model="varify"  type="text" placeholder="请输入图片内容" name="varify" id="varify">
            <span  style="width:85px;height: 30px;display:block;position: absolute;top:56px;right:0px;">
                  <img style="width:85px;height: 30px" ref="haha" @click="changepicture" src="http://localhost:3000/captcha" alt="">
            </span>
          </li>
          <li>
            <span class="iconfont icon-suo"></span>
            <input v-model="changePwd"  type="text" placeholder="请输入动态密码" name="changePwd" id="changePwd">
            <a  @click="loginsms" style="width:90px;text-align: center;line-height: 30px;height: 30px;border: 1px red solid;color: black;display:block;position: absolute;top:100px;right:0px;">
              动态验证码
            </a>
          </li>
          <li>
            <span class="iconfont icon-iconfontzhizuobiaozhun023110"></span>
            <input v-model="username" type="text" placeholder="昵称/用户名" name="name" id="name">
          </li>
          <li>
            <span class="iconfont icon-yonghu"></span>
            <input v-model="pwd" type="password" placeholder="请设置密码" name="pwd" id="pwd">
          </li>
          <li>
            <span class="iconfont icon-yonghu"></span>
            <input v-model="pwdTwo" type="password" placeholder="请确认密码" name="pwd2" id="pwd2">
          </li>
        </ul>
        <div class="Toregister" @click="Tologin" >
          <a href="#" :class="{Activeclass:rightNumber}">下一步</a>
        </div>
      </div>
   </div>
</template>

<script>
  /* eslint-disable */
  import {MessageBox} from 'mint-ui';
  import {reqmesLogin,requserLogin,reqmes,reqregister} from '../../api/index'
  export default {
    data(){
      return{
        phoneN:'',
        isshowOne:true,
        pwdTwo:'',
        pwd:'',
        username:'',
        changePwd:'',
        varify:'',
        user:''
      }
    },
    methods:{
      isshowTwo(){
        this.isshowOne = false;
      },
      async Tologin(){
        let mes='';
        let {phoneN,pwdTwo,pwd,username,changePwd,varify}=this;
        if(pwd===pwdTwo){
          if(username.trim() && changePwd.trim() && varify.trim()&& pwd.trim() && phoneN.trim()){

            let result = await reqregister({name:username,pwd:pwd,phone:phoneN,code:changePwd,captcha:varify});
            if(result.code===0){
              this.$store.dispatch("getuserInfo",result.data);
              this.$router.replace('/user');
            }else{
              mes = "用户名已存在";
            }
          }else{
            mes = "都必须填写！";
          }
        }else{
          mes="两次密码输入不一致"
          this.pwd='';
          this.pwdTwo='';
        }
        if(mes){
          MessageBox.alert(mes).then(()=>{
            this.username='';
            this.pwd='';
            this.pwdTwo='';
            this.varify='';
            this.changePwd='';
            this.phoneN='';
          })
        }
      },
      loginsms(){
        let phone=this.phoneN;
        reqmes({phone})
      },
      changepicture(){
        this.$refs.haha.src="http://localhost:3000/captcha?name="+Date.now()
      }
    },
    computed:{

      rightNumber(){
        return /^1\d{10}$/.test(this.phoneN)
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .container
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    .formContent
      margin  0 auto
      width 333px
      height 92px
      display flex
      flex-direction column
      justify-content center
      align-items center
      ul
        width 100%
        height 100%
        li
          width 100%
          height 100%
          padding 7px
          box-sizing border-box
          display flex
          justify-content center
          align-items center
          border-bottom solid 1px #d0d0d0
          font-family "Microsoft Yahei",tahoma,arial
          font-size 15px
          color #666
          input
            width 80%
            height 100%
            text-align center

            outline none
            &::-webkit-input-placeholder
              color:#d0d0d0
          span
            margin 0 8px
            font-size 23px
    .registerBtn
      width 100%
      height 38px

      a
        display block
        background-color #d7d7d7
        border-radius 20px
        width 85%
        height 85%
        text-align center
        margin 0 auto
        color white
        line-height 30px
        &.Activeclass
          background-color red


    .Toregister
      width 100%
      height 38px
      position absolute
      bottom 350px
      left 0px
     a
      display block
      background-color #d7d7d7
      border-radius 20px
      width 85%
      height 85%
      text-align center
      margin 0 auto
      color white
      line-height 30px
      &.Activeclass
        background-color red
    .formContenttwo
       li
        width 100%
        height 40px
        text-align center
        line-height 40px
        input
          width 80%
          height 100%
          text-align center

</style>
