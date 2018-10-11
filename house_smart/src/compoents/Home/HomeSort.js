import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import '../../assets/style/home/homeSort.less';
import Img from '../../assets/images/icon01.png'
import Img1 from '../../assets/images/icon02.png'
import Img2 from '../../assets/images/icon03.png'
import Img3 from '../../assets/images/icon04.png'
import Img4 from '../../assets/images/icon05.png'
import Img5 from '../../assets/images/icon06.png'
import Img6 from '../../assets/images/icon07.png'
import Img7 from '../../assets/images/icon08.png'

const data1 = [
    {
        img:Img,
        text:'新房'
    }, 
     {
        img:Img1,
        text:'二手房'
    },
    {
        img:Img2,
        text:'租房'
    },
    {
        img:Img3,
        text:'商铺写字楼'
    },
]
const data2 = [
    {
        img:Img4,
        text:'卖房'
    }, 
     {
        img:Img5,
        text:'海外地产'
    },
    {
        img:Img6,
        text:'小区房价'
    },
    {
        img:Img7,
        text:'问答'
    },
]


export default class HomeSort extends Component {
    pro(data){
          // 循环 
        const cont = data.map((item,index)=>{
            return <Flex.Item key={index}>
            <div>
                <img src={item.img} />
            </div>
            <div className='sort-text'>{item.text}</div>
        </Flex.Item>
        });
        return cont

    }

    render() {
      

        return (
            <div className="flex-container">
                <Flex>

                    {/* {cont} */}
                    {this.pro(data1)}
                   


                    {/* <Flex.Item>
                        <div>
                            <img src={Img} />
                        </div>
                        <div className='sort-text'>新房</div>
                    </Flex.Item> */}
                    {/* <Flex.Item>
                        <div>
                            <img src={Img1} />
                        </div>
                        <div className='sort-text'>二手房</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <img src={Img2} />
                        </div>
                        <div  className='sort-text'>租房</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <img src={Img3} />
                        </div>
                        <div  className='sort-text'>商铺写字楼</div>
                    </Flex.Item> */}
                </Flex>
                <Flex>
                {this.pro(data2)}
                </Flex>
              
            </div>
        )

    }










}




