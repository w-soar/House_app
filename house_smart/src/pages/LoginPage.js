import React, { Component } from 'react'
// 引入表单input框组件
import FormInput from '../compoents/FormInput'
// 引入表单按钮组件
import FormBtn from '../compoents/FormBtn'

import '../assets/style/loginPage.less'

import logoImg from '../assets/images/logo.png'

export default class LoginPage extends Component {
  render() {
    return (
     <div className='login-cont'>
     {/* logo */}
        <header className='login-logo'>
            <div className='login-logo-img'>
               <img src={logoImg} alt='' />
            </div>
        </header>
        {/* 表单 */}
         <section className='form-out'>
             {/* 表单 */}
             <FormInput type='text' placeholder={'请输入电话号码~~'}/>
             <FormInput type='password'  placeholder={'请输入密码~~'}/>

             {/* 按钮 */}
             <FormBtn block={true} value='登录' />
             <FormBtn value='忘记密码?' type='plain' />
             <FormBtn value='免费注册' />
             <FormBtn value='游客登录' />

         </section>
         
     </div>
    )
  }
}
