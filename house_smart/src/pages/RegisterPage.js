import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

import '../assets/style/register.less'

export default class RegisterPage extends Component {
  render() {
    return (
      <div className='reg-cont'>
          <header>
           <NavBar
                mode="dark"
                icon={<Icon type="left" />} >
                
                    注册
                </NavBar>
            
                        

          </header>
          <section className='reg-sec'>
              <form>
              <div className='form-cont'>
                    <i > 手机号 </i>
                  <input  placeholder='请输入手机号码~~~' />     
              </div>
              <div className='form-cont'>
                    <i > 验证码 </i>
                  <input placeholder='请输入验证码~~' />  
                  <button>发送验证码</button> 
              </div>
              
              <div className='agree'>
              <div> <input type='checkbox' /></div>
                 
                  我同意  《用户服务协议》及《隐私权政策》
              </div>
              <button>注册</button>
              <p> 已有账号？ </p>

              </form>

          </section>
        
      </div>
    )
  }
}

