import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import '../assets/style/footer.less'
import Img from '../assets/images/footer1.png'
import Img1 from '../assets/images/footer2.png'
import Img2 from '../assets/images/footer3.png'
import Img3 from '../assets/images/footer4.png'


export default class Sort extends Component {

    render() {
        return (
            <div className="footer-cont">
                <Flex>
                    <Flex.Item>
                        <div>
                            <img src={Img} />
                        </div>
                        <div className='footer-text'>首页</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <img src={Img1} />
                        </div>
                        <div className='footer-text'>微聊</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <img src={Img2} />
                        </div>
                        <div  className='footer-text'>推荐</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <img src={Img3} />
                        </div>
                        <div  className='footer-text'>我的</div>
                    </Flex.Item>
                </Flex>
              
            </div>
        )

    }










}




