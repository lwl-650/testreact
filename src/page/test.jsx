import intl from 'react-intl-universal'
import {useState , useEffect} from "react"

const support=[
  {name:'English',value:'en-US'},
  {name:'简体中文',value:'zh-CN'},
  {name:"繁体中文",value:"zh-TW"},
]
//可以支持的选项配置

//翻译的语料
const locales={
    "en-US":{
        name: "W6",
        basicInfo:"Info",
        influence:"influence",
        HELLO: "Hello, {name}. Welcome to {where}!",
        TIP: "This is <span style='color:red'>HTML</span>",
        TIP_VAR: "This is <span style='color:red'>{message}</span>",
        SALE_START: "Sale begins {start, date}",
        SALE_END: "Sale ends {end, date, long}",
        COUPON: "Coupon expires at {expires, time, medium}",
        SALE_PRICE: "The price is {price, number, USD}",
        PHOTO: "You have {photoNum, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}",
        MESSAGE_NOT_IN_COMPONENT: "react-intl-universal is able to internationalize message not in React.Component",
        url:"./baowu.png"
    },
    "zh-CN":{
      name: "天天向上",
      basicInfo:"基础信息",
      influence:"名声",
      HELLO: "你好, {name}。欢迎来到{where}!",
      TIP: "这是<span style='color:red'>HTML</span>",
      TIP_VAR: "这是<span style='color:red'>{message}</span>",
      SALE_START: "拍卖将在{start, date}开始",
      SALE_END: "拍卖将在{end, date, full}结束",
      COUPON: "优惠卷将在{expires, time, medium}过期",
      TIME: "时间是{theTime, time}",
      SALE_PRICE: "售价{price, number, CNY}",
      PHOTO: "你有{photoNum, number}张照片",
      MESSAGE_NOT_IN_COMPONENT: "react-intl-universal可以在非React.Component的js文件进行国际化",
      url:"./icon.png"
      }
}

//使用
function app(){
  let [init,setInit]=useState()
useEffect(()=>{
//加载语料包
useEffect(()=>{
    // 加载语言包
    let currentLocale=intl.determineLocale({
        urlLocaleKey:'lang',
        // 根据url的尾部标识来时别现在的语言环境
        cookieLocaleKey:'lang'
    })
    // 这里会不停的检测location的变化,根据尾部字符串来更新页面
    // 使用语言包
    intl.init({
      currentLocale,
      locales:locales,
    })
    .then((e)=>{
      setInit(true)
    })
  },[])
},[])
}

// 添加语言选择
 export default function renderSelector(){
    return (
      <select onChange={handleSelect} defaultValue="">
          <option value="" disabled>
            Change lanauge
          </option>
          {
            support.map(e=>(
              <option key={e.value} value={e.value}>
                {e.name}
              </option>
            ))
          }
      </select>
    )
  }

//修改参数
  function handleSelect(e){
      let lang=e.target.value
      window.location.search=`?lang=${lang}`
  }
