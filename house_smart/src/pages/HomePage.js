import React, { Component } from 'react'

import '../assets/style/homePage.less'
import Nav from '../compoents/Home/HomeNav'
import Slider from '../compoents/Home/HomeSlider'
import Sort from '../compoents/Home/HomeSort'
import HomeInfo from '../compoents/Home/HomeInfo'
import GuessLove from './GuessLove'
import Footer from '../compoents/Footer'



const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default class HomePage extends Component {
  render() {
    return (
      <div  className='home-cont'>
      {/* 导航栏 */}
        <Nav />

        {/* 轮播 */}
        <Slider/>

        {/* 分类 */}
        <Sort />

        {/* 信息 */}
        <HomeInfo />

        {/* 你喜欢 */}
         <GuessLove />
      
        {/* 底部 */}
        <Footer />




      </div>
    )
  }
}
