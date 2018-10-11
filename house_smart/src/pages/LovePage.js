import React, { Component } from 'react'

import Img from '../assets/images/img.jpg'
import Footer from '../compoents/Footer'


import { ListView } from 'antd-mobile';


//  定义数据源
const data = [
  {
    img: Img,
    // title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: Img,
    // title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: Img,
    // title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];


const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];


export default class LovePage extends Component {
  constructor(props) {
    super(props);
 
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 1 / 4,
    };
  }

  componentDidMount() {
    // simulate initial Ajax
    // 模拟发送Ajax
    setTimeout(() => {
      // genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
       
      });
    }, 600);
  }

 
  render() {
  
    let index = data.length - 1;
    // 定义一个renderRow
    const renderRow = (rowData, sectionID, rowID) => {
      return(
        <div>ddd</div>
      )
    };

    return (
      <div>
      <ListView
      // 自定义规则
        // ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>猜你喜欢</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {/* {this.state.isLoading ? 'Loading...' : 'Loaded'} */}
        </div>)}
      
        renderRow={renderRow}
      
        style={{
          // 高度
          height: this.state.height,
          overflow: 'auto',
        }}
     
      />
      
         <Footer/>
       </div>
    );
  }
}
