import React, {Component} from 'react'
import SearchForm from '../Components/SearchForm.js'
import {search} from '../api'

export default class SearchContainer extends Component {
  constructor(){
    super()
    this.state = {
      borough: '',
      zip: '',
      ageLow: '',
      ageHigh: '',
      disabled: false,
      floodZone: false,
      youthAndElderly: false,
      homeless: false,
      aPS: false
    }
  }

  componentDidMount(){
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSearch = event => {
    event.preventDefault()
    search()
    .then( cookie => {
      console.log("recieved cookie: " + cookie);
    })
  }


  render(){
    return(
      <div>
        <h1>Search Container</h1>
        <SearchForm
          borough={this.state.borough}
          zip={this.state.zip}
          ageLow={this.state.ageLow}
          ageHigh={this.state.ageHigh}
          disabled={this.state.disabled}
          floodZone={this.state.floodZone}
          youthAndElderly={this.state.youthAndElderly}
          homeless={this.state.homeless}
          aPS={this.state.aPS}
          handleSearch={this.handleSearch.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }

}
