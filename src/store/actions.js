import {reqautoLogin,req_homeData,reqcaptcha,req_homeData01,reqsuper_data,req_brand,req_allbrand,req_catelist} from '../api/index'
import {HOME_DATASTATE,HOME_DATASTATE01,Super_DATASTATE,USERINFODATA,CATE_GORYDATA,PINPAI_DATA,ALLPINPAIData,AUTOUSER,CAPTCHADATA} from './matutions_types'

export default {
  async gethomeData({commit},cb){
    let homeData = await req_homeData;
    let homeDataInfo = homeData.data
    if(homeData.code===0){
      commit(HOME_DATASTATE,{homeDataInfo})
    }
    cb && cb ();
  },
  async gethomeData01({commit},cb){
    let homeData = await req_homeData01;
    let homeDataInfo01 = homeData.data
    if(homeData.code===0){
      commit(HOME_DATASTATE01,{homeDataInfo01})
    }
    cb && cb ();
  },
  async gersuper_data({commit},cb){
    let super_data = await reqsuper_data;
    let superData = super_data.data

    if(super_data.code===0){
      commit(Super_DATASTATE,{superData})
    }
    cb && cb ();
  },
  getuserInfo({commit},userInfo){
    commit(USERINFODATA,{userInfo})
  },
  async getCategorydata({commit},cb){
    let Category = await req_catelist;
    console.log(Category)
    if(Category.code===0){
      let Categorydata = Category.data
      commit(CATE_GORYDATA,{Categorydata})
    }
    cb && cb ();
  },
  async getpinpaiList({commit},cb){
    let pinpaiList = await req_brand;

    if(pinpaiList.code===0){
      let pinpaiLists = pinpaiList.data
      commit(PINPAI_DATA,{pinpaiLists})
    }
    cb && cb ();
  },
  async getallbrand({commit},cb){
    let allpinpai = await req_allbrand;

    if(allpinpai.code===0){
      let allpinpailist = allpinpai.data
      commit(ALLPINPAIData,{allpinpailist})
    }
    cb && cb ();
  },
  async getautouser({commit},cb){
    let userIn = await reqautoLogin();
    if(userIn.code===0){
     let userInfo = userIn.data;
     if(userInfo.code===0){
       commit(AUTOUSER,{userInfo});
     }

     cb && cb()
    }
  }
}
