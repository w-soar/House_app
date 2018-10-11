import React, { Component } from 'react'

import Img from '../assets/images/img.jpg'
import   '../assets/style/guessLove.less';

import Footer from '../compoents/Footer'


import { ListView } from 'antd-mobile';

const data = [
  {
    img: Img,
    title: '融创天府商铺',
    des: '天府大道',
    size: '一室一厅 63平米',
    shop: '商场 ',
    park: '公园',
    markt: '大型超市',
    sale: '售价待定'

  },
  {
    img: Img,
    title: '融创天府商铺',
    des: '天府大道',
    size: '一室一厅 63平米',
    shop: '商场 ',
    park: '公园',
    markt: '大型超市',
    sale: '售价待定'
  },
  {
    img: Img,
    title: '融创天府商铺',
    des: '天府大道',
    size: '一室一厅 63平米',
    shop: '商场 ',
    park: '公园',
    markt: '大型超市',
    sale: '售价待定'
  },
];




export default class GuessLove extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {

    // simulate initial Ajax
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        isLoading: false,
      });
    }, 600);
  }

  render() {


    const row = (rowData, sectionID, rowID) => {
      // 返回内容
      return (

        <div style={{ display: 'flex', padding: '15px 0', position: 'relative' }}>

          < img style={{ height: '100px', marginRight: '15px' }} src={rowData.img} alt="" />
          <div style={{ lineHeight: 1 }}>
            <div style={{ marginTop: '8px', fontWeight: 'bold', fontSize: '16px' }}>{rowData.title}</div>
            <div>
              <p style={{ fontSize: 12 }}>{rowData.des}</p >
              <p style={{ fontSize: 12 }}>{rowData.size}</p >
              <p style={{ fontSize: 12 }}>
                <i style={{ backgroundColor: 'rgba(169, 236, 125, 0.3)', color: 'green', marginRight: '5px' }}>{rowData.shop}</i>
                <i style={{ backgroundColor: 'rgba(235, 179, 115, 0.3)', color: 'orangered', marginRight: '5px' }}>{rowData.park}</i>
                <i style={{ backgroundColor: 'rgba(115, 207, 235, 0.3)', color: 'skyblue', marginRight: '5px' }}>{rowData.markt}</i>

              </p >
            </div>
            <p style={{ position: 'absolute', right: '30px', top: '30px', color: 'red', fontWeight: 'bold' }}>{rowData.sale}</p >
          </div>
        </div>

      )
    };
    return (
      <div>
          <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderHeader={() => <span>猜你喜欢</span>}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            // renderSeparator={separator}
            className="am-list"
            pageSize={4}
            useBodyScroll
            onScroll={() => { console.log('scroll'); }}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
          />
              <Footer /> 
      </div>

    );
  }
}

