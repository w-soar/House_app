import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import '../../assets/style/home/homeSort.less'
import Img from '../../assets/images/icon09.png'
import Img1 from '../../assets/images/icon10.png'
import Img2 from '../../assets/images/icon11.png'
import Img3 from '../../assets/images/icon12.png'


export default class Sort extends Component {

    render() {
        return (
            <div className="info-cont">
                <Flex>
                    <Flex.Item>
                        <div>
                            <img src={Img} />
                        </div>
                        <div className='sort-text'>独家优惠</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <img src={Img1} />
                        </div>
                        <div className='sort-text'>免费看房</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <img src={Img2} />
                        </div>
                        <div  className='sort-text'>信用贷</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <img src={Img3} />
                        </div>
                        <div  className='sort-text'>房事资讯</div>
                    </Flex.Item>
                </Flex>
              
            </div>
        )

    }

}




