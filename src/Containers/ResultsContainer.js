import React, {Component} from 'react'
import ResultsTable from '../Components/ResultsTable.js'

export default class ResultsContainer extends Component {
  constructor(){
    super()
    this.state = {
      data: {}
    }
  }

  componentDidMount(){
  }


  render(){
    return(
      <div>
        <h1>Results Container</h1>
        <ResultsTable
          data={this.state.data}
        />
      </div>
    )
  }

}
