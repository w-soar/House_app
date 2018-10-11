import React, { Component } from 'react'
import '../assets/style/wechat.less'
import Img from '../assets/images/img.jpg'

export default class WechatPage extends Component {
  render() {
    return (
      <div className='wechat-cont'>
      <div className='wechat-img'>
          <img src={Img}/>
      </div> 
     <p>置业顾问：某某</p>
     <p>专业服务诚信做人诚实做事</p>
     <button>我要聊天</button>
       
      </div>
    )
  }
}
