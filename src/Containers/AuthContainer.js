import React, {Component} from 'react'
import LoginForm from '../Components/LoginForm.js'
import {login} from '../api'

export default class AuthContainer extends Component {
  constructor(){
    super()
    this.state = {
      user: '',
      password: '',
      agency: '',
      agencyList: []
    }
  }

  componentDidMount(){
    //check for a cookie and login if it exists
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault()
    var params = {user: this.state.user, password: this.state.password, agency: this.state.agency}
    login(params)
    .then( cookie => {
      console.log("recieved cookie: " + cookie);
    })
  }

  render(){
    return(
        <LoginForm
          user={this.state.user}
          password={this.state.password}
          agency={this.state.agency}
          agencyList={this.state.agencyList}
          handleChange={this.handleChange.bind(this)}
          handleLogin={this.handleLogin.bind(this)}
        />
    )
  }

}
