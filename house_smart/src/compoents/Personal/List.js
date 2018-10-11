import React, { Component } from 'react'
import { List } from 'antd-mobile';
import '../../assets/style/personal/list.less'

const Item = List.Item;
const Brief = Item.Brief;
export default class PerList extends Component {
    state = {
        disabled: false,
      }
    
      render() {
        return (
        <div>
        
         
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的积分</Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              我的订阅
            </Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
             微信联系人
            </Item>
          </List>

           <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >房贷计算器</Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
             我的房子
            </Item>
          
          </List>
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的看房记录</Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              我的问答
            </Item>
          
          </List>
          <List>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >设置</Item>
            <Item
              
              onClick={() => {}}
              arrow="horizontal"
            >
             反馈问题
            </Item>
           
          
          </List>
         
         
         
        </div>);
      }
}




