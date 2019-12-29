import React, {Component} from 'react'
import SearchForm from '../Components/SearchForm.js'
import ResultsTable from '../Components/ResultsTable.js'
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
      aPS: false,
      data: [],
      filterText: '',
      sortColumn: 'name',
      sortDirection: true,
      page: 0,
      count: 20
    }
  }

  componentDidMount(){
  }

  handleChange = name => event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  handleSearch = event => {
    event.preventDefault()
    var data = search()
    this.setState({
      data: data
    })
  }

  handleSort = name => event => {
    var sort = this.state.sortColumn === name && this.state.sortDirection === false ? true : false
    this.setState({
      sortColumn: name,
      sortDirection: sort
    })
  }

  handleChangePage = name => event => {
    var newPage = 0
    var lastPage = (this.state.data.length / this.state.count) - 1
    switch (name) {
      case 'first':
        newPage = 0
        break;
      case 'prev':
        newPage = this.state.page === 0 ? 0 : this.state.page - 1
        break;
      case 'next':
        newPage = this.state.page === lastPage ? lastPage : this.state.page + 1
        break;
      case 'last':
        newPage = lastPage
        break;
      default:
        newPage = this.state.page
    }
    this.setState({
      page: newPage
    })
  }


  render(){
    return(
      <div>
        <div className="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <div className="bg-gray-200 p-2 h-full flex-1">
                <SearchForm
                  borough={this.state.borough}
                  zip={this.state.zip}
                  ageRange={this.state.ageRange}
                  disabled={this.state.disabled}
                  floodZone={this.state.floodZone}
                  youthAndElderly={this.state.youthAndElderly}
                  homeless={this.state.homeless}
                  aPS={this.state.aPS}
                  handleSearch={this.handleSearch.bind(this)}
                  handleChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="bg-gray-200 p-2 flex-grow">
                <ResultsTable
                  data={this.state.data}
                  filterText={this.state.filterText}
                  sortColumn={this.state.sortColumn}
                  sortDirection={this.state.sortDirection}
                  page={this.state.page}
                  count={this.state.count}
                  handleChange={this.handleChange.bind(this)}
                  handleSort={this.handleSort.bind(this)}
                  handleChangePage={this.handleChangePage.bind(this)}
                />
              </div>
            </div>
          </div>



    )
  }

}
