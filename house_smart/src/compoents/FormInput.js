import React, { Component } from 'react'
import '../assets/style/formInput.less'

export default class FormInput extends Component {
  
    
  render() {
    return (
      <div className='form-cont'>
        <i  className='form-icon'> tu </i>
        <input type={this.props.type} className='form-input' placeholder={this.props.placeholder}  />     
      </div>
    )
  }
}


