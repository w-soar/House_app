import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import '../../assets/style/home/homeSlider.less';

import Img from '../../assets/images/img.jpg';
import Img1 from '../../assets/images/img.jpg';
import Img2 from '../../assets/images/img.jpg';



export default class Slider extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [Img,Img1 ,Img2],
      });
    }, 100);
  }
  render() {
    return (
        <div className='slider'>
            <WingBlank>
                <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map(val => (
                    <a
                    key={val}
                    // href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={val}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
            </WingBlank>
      </div>
    );
  }
}





