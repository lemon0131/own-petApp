
import {CAPTCHADATA,HOME_DATASTATE,AUTOUSER,HOME_DATASTATE01,Super_DATASTATE,USERINFODATA,CATE_GORYDATA,PINPAI_DATA,ALLPINPAIData} from './matutions_types'

export default {
    [HOME_DATASTATE](state,{homeDataInfo}){

      state.homeDataInfo=homeDataInfo
    },
    [HOME_DATASTATE01](state,{homeDataInfo01}){

    state.homeDataInfo01=homeDataInfo01
  },
  [Super_DATASTATE](state,{superData}){

    state.superData=superData
  },
  [USERINFODATA](state,{userInfo}){
    state.userInfo=userInfo
  },
  [CATE_GORYDATA](state,{Categorydata}){
    state.Categorydata=Categorydata
  },
  [PINPAI_DATA](state,{pinpaiLists}){
    state.pinpaiLists=pinpaiLists
  },
  [ALLPINPAIData](state,{allpinpailist}){
    state.allpinpailist=allpinpailist
  },
  [AUTOUSER](state,{userInfo}){
    state.userInfo=userInfo
  },
  [CAPTCHADATA](state,{captcha}){
    state.captcha=captcha
  }
}
