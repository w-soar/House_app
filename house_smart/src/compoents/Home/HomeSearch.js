import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import '../../assets/style/home/homeSearch.less'

export default class Search extends Component {


     state = {
    value: '搜索',
  };

  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className='search'  > 
      
     
      <SearchBar
        value={this.state.value}
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        // onCancel={() => console.log('onCancel')}
        // showCancelButton = {true}
        cancelText = 'X'
        onChange={this.onChange}
      />
      </div>
    )
  }
}


