import Mock from 'mockjs'
import homeData from './index'
import suprise from './carousel'
import brand from './brand.json'
import allbrand from './allbrand.json'
import classify from './classify.json'


Mock.mock('/homeData',{code:0,data:homeData.menus})
Mock.mock('/homeData01',{code:0,data:homeData.datas})
Mock.mock('/suprise',{code:0,data:suprise})
Mock.mock('/brand',{code:0,data:brand.brand})
Mock.mock('/allbrand',{code:0,data:allbrand.brand})
Mock.mock('/catelist',{code:0,data:classify.categorys})

