import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import LoginPage from './LoginPage'
import HomePage from './HomePage'
// import LovePage from './LovePage'
// import PersonalPage from './PersonalPage'
// import RegisterPage from './RegisterPage'
// import GuessLove from './GuessLove'
// import WechatPage from './WechatPage'
// import DetailsPage from './DetailsPage'




import '../assets/style/varibels.less'

export default class App extends Component {
  render() {

    return (
              
    // <LoginPage />
    <HomePage/>
    // <LovePage/>
    // <PersonalPage/>
    // <RegisterPage/>
    // <WechatPage/>
    // <GuessLove/>
    // <DetailsPage />
  )

  }
}

ReactDOM.render(<App />, document.getElementById('root'));