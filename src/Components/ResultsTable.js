import React from 'react'
import TableRow from './TableRow'

export default(props) => {

  var filterData = (data, filterText) => {
    return data.filter( person => Object.keys(person).some(k => {
      return person[k].toLowerCase().includes(filterText.toLowerCase())
    }))
  }

  var orderData = (filteredData, sortColumn, sortDirection) => {
    var convertDate = date => {
      if (date !== "") {
        var dateArr = date.split('/')
        return dateArr[2].concat(dateArr[0].concat(dateArr[1]))
      }
      return ""
    }
    if (sortColumn === "dob") {
      return sortDirection ?
      filteredData.sort( (a,b) => (convertDate(a[sortColumn]) > convertDate(b[sortColumn]) ? 1 : -1)) :
      filteredData.sort( (a,b) => (convertDate(a[sortColumn]) < convertDate(b[sortColumn]) ? 1 : -1))
    } else {
      return sortDirection ?
      filteredData.sort( (a,b) => (a[sortColumn] > b[sortColumn] ? 1 : -1)) :
      filteredData.sort( (a,b) => (a[sortColumn] < b[sortColumn] ? 1 : -1))
    }
  }

  var limitData = (data) => {
    // not working properly
    var begining = (props.page * props.count)
    var end = ((props.page + 1) * props.count) - 1
    return data.slice(begining, end)
  }

  var formattedRows = (data, filterText, sortColumn, sortDirection) => {
    if (props.data) {
      var filteredData = filterData(props.data, props.filterText)
      var orderedData = orderData(filteredData, props.sortColumn, props.sortDirection)
      var limitedData = limitData(orderedData)
      return limitedData.map( (data, i) => <TableRow key={i} data={data}/>)
    } else {
      return ""
    }
  }

  var upChevron = <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 35 30"><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></svg>

  var downChevron = <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 35 30"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></svg>

  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-2">
        <div className="w-full">
          <h2 className="inline-block ">Results</h2>
          <input className="inline-block float-right mt-5 mb-2" placeholder="search" type="text" id="filterText" value={props.filterText} onChange={props.handleChange('filterText')}/>
        </div>
        <div className="table w-full">
          <table>
            <thead>
              <tr>
                <td>
                  <button className="hover:text-gray-400 font-bold  rounded inline-flex items-center" onClick={props.handleSort('name')}>
                    <strong>Client Name</strong>
                    {props.sortColumn === 'name' && props.sortDirection === false ? upChevron : downChevron}
                  </button>
                </td>
                <td>
                  <button className="hover:text-gray-400 font-bold  rounded inline-flex items-center" onClick={props.handleSort('dob')}>
                    <strong>DOB</strong>
                    {props.sortColumn === 'dob' && props.sortDirection === false ? upChevron : downChevron}
                  </button>
                </td>
                <td>
                  <button className="hover:text-gray-400 font-bold  rounded inline-flex items-center" onClick={props.handleSort('gender')}>
                    <strong>Gender</strong>
                    {props.sortColumn === 'gender' && props.sortDirection === false ? upChevron : downChevron}
                  </button>
                </td>
                <td>
                  <button className="hover:text-gray-400 font-bold  rounded inline-flex items-center" onClick={props.handleSort('address')}>
                    <strong>Recent Address</strong>
                    {props.sortColumn === 'address' && props.sortDirection === false ? upChevron : downChevron}
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>{formattedRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
