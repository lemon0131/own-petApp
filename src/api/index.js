import ajax from  './ajax'


export const requserLogin=({name,pwd})=>ajax('/api/login_pwd',{name,pwd},'POST')
export const reqautoLogin=()=>ajax('/api/userinfo');

export const reqmesLogin=({phone,code,captcha})=>ajax('/api/login_sms',{phone,code,captcha},'POST')
export const reqregister=({phone,code,captcha,name,pwd})=>ajax('/api/register',{phone,code,captcha,name,pwd},'POST')
export const reqmes=({phone})=>ajax('/api/sendcode',{phone},'GET');
export const reqcaptcha=()=>ajax('/api/captcha')


export const req_homeData=ajax('/homeData')
export const req_homeData01=ajax('/homeData01')
export const reqsuper_data=ajax('/suprise')
export const req_brand=ajax('/brand')
export const req_allbrand=ajax('/allbrand')
export const req_catelist=ajax('/catelist')

