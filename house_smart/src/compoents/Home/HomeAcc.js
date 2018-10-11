import React, { Component } from 'react'
import { Accordion, List } from 'antd-mobile';
import '../../assets/style//home/homeAcc.less'

export default class Acc extends Component {
      onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
       <div style={{  width:'100%',height:'100%'}}>
        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="请选择">
            <List className="my-list">
              <List.Item>成都</List.Item>
              <List.Item>上海</List.Item>
              <List.Item>北京</List.Item>
            </List>
          </Accordion.Panel>
        
        </Accordion>
      </div>
    )
  }
}





