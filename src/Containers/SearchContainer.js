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
      updatedData: [],
      filterText: '',
      sortColumn: 'name',
      sortDirection: true,
      page: 0,
      count: 20,
      lastPage: 0,
      total: 0
    }
  }

  componentDidMount(){
  }

  handleChange = name => event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    name === "filterText" ? this.setState({
      [name]: value,
      page: 0,
      total: this.filterData(this.state.data, value).length
    })
    : this.setState({ [name]: value })

  };

  handleSearch = event => {
    event.preventDefault()
    var data = search()
    this.setState({
      data: data,
      total: data.length
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
    var lastPage = this.state.data.length ? Math.ceil(this.filterData(this.state.data, this.state.filterText).length / this.state.count) - 1 : 0
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
      page: newPage,
      lastPage: lastPage
    })
  }

  filterData = (data, filterText) => {
    return data.filter( person => Object.keys(person).some(k => {
      return person[k].toLowerCase().includes(filterText.toLowerCase())
    }))
  }

  orderData = (filteredData, sortColumn, sortDirection) => {
    var convertDate = date => {
      if (date !== "") {
        var dateArr = date.split('/')
        return dateArr[2].concat(dateArr[0].concat(dateArr[1]))
      }
      return ""
    }
    if (sortColumn === "dob") {
      return sortDirection ?
      filteredData.sort( (a,b) => a[sortColumn] === '' ? 1 : b[sortColumn] === '' ? -1 : convertDate(a[sortColumn]).localeCompare(convertDate(b[sortColumn]))) :
      filteredData.sort( (a,b) => a[sortColumn] === '' ? 1 : b[sortColumn] === '' ? -1 : convertDate(b[sortColumn]).localeCompare(convertDate(a[sortColumn])))
    } else {
      return sortDirection ?
      filteredData.sort( (a,b) => a[sortColumn] === '' ? 1 : b[sortColumn] === '' ? -1 : a[sortColumn].localeCompare(b[sortColumn])) :
      filteredData.sort( (a,b) => a[sortColumn] === '' ? 1 : b[sortColumn] === '' ? -1 : b[sortColumn].localeCompare(a[sortColumn]))
    }
  }

  limitData = (data) => {
    var begining = (this.state.page * this.state.count)
    var end = ((this.state.page + 1) * this.state.count)
    return data.slice(begining, end)
  }

  updatedData = () => {
    if (this.state.data.length) {
      var filteredData = this.filterData(this.state.data, this.state.filterText)
      var orderedData = this.orderData(filteredData, this.state.sortColumn, this.state.sortDirection)
      var limitedData = this.limitData(orderedData)
      return limitedData
    } else {
      return []
    }
  }

  render(){
    return(
      <div>
        <div className="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row color-light-background">
          <div className="bg-gray-200 p-2 flex-1">
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
                  lastPage={this.state.lastPage}
                  count={this.state.count}
                  total={this.state.total}
                  handleChange={this.handleChange.bind(this)}
                  handleSort={this.handleSort.bind(this)}
                  handleChangePage={this.handleChangePage.bind(this)}
                  updatedData={this.updatedData.bind(this)}

                />
              </div>
            </div>
          </div>



    )
  }

}
