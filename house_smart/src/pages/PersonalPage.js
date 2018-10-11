import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import PerList from '../compoents/Personal/List'
import '../assets/style/personal.less'
import Footer from '../compoents/Footer'

import Img from '../assets/images/img.jpg'

export default class Personal extends Component {
  render() {
    return (
      <div className='personal-cont' >
        <header>
          <Flex>
            <Flex.Item>
              <div className='perImg'> <img src={Img} alt='' style={{ width: 120 }} /></div>

            </Flex.Item>
            <Flex.Item className='per-center'>
              <div className='per-logreg'>
                登录&emsp; <i>/</i>&emsp; 注册
              </div>
              <div>
                可以给经纪人发起聊天
              </div>
            </Flex.Item>
            <Flex.Item className='per-set'>
              设置
            </Flex.Item>
          </Flex>
          <Flex>
            <Flex.Item>
            <div className='per-grad'>
                <div>
                    0
                </div>
                  <div>
                  <i>tu</i>
                  &emsp;
                    钱包
                </div>
              </div>
            </Flex.Item>
            <Flex.Item>
              <div className='per-grad'>
                <div>
                    0
                </div>
                  <div>
                    <i>tu</i>
                    &emsp;
                    钱包
                </div>
              </div>

            </Flex.Item>
            <Flex.Item>
            <div className='per-grad'>
                <div>
                    0
                </div>
                  <div>
                  <i>tu</i>
                  &emsp;
                    钱包
                </div>
              </div>
            </Flex.Item>
          </Flex>
        </header>


        {/* 列表 */}
        <PerList />

        <Footer />

      </div>
    )
  }
}