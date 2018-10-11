import React, { Component } from 'react'
import '../assets/style/formBtn.less'

export default class FormBtn extends Component {
   
  render() {

        
        
        // 判断是否是块级样式 
        let clName = 'form-btn';
        if(this.props.block&&this.props.type!='plain'){
              clName += ' block';
        }
  
        let content =  <button type='button'  className={clName}>{this.props.value}</button>
        console.log(this.props.value);
        if(this.props.type&&this.props.type==='plain'){
            content = <p className='forgotPsw'> {this.props.value} </p>
        }
    
           
    return (
      <div className='btn-out'>
      {content}

      </div>
    )
  }
}
