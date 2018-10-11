import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import '../../assets/style/home/homeNav.less'


import Search from '../../compoents/Home/HomeSearch'
import Acc from '../../compoents/Home/HomeAcc'

export default class nav extends Component {
  // state={
  //   value:'地图'
  // }
  render() {
    return (
        <div>
            <NavBar  
              mode="dark"
              leftContent={ <Acc/>}
              rightContent={[ <Icon key="1" type="ellipsis"  />, ]}>
              <Search   />
            </NavBar>
        </div>
    )
  }
}
