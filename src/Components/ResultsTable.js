import React from 'react'
import TableRow from './TableRow'
import PaginationBar from './PaginationBar'

export default(props) => {

  var begining = 0
  var end = 0
  var formatData = () => {
    var data = props.updatedData()
    begining = data.length ? props.page * props.count + 1 : 0
    end = data.length ? begining + data.length - 1 : 0
    return data.map( (row, i) => <TableRow key={i} data={row}/>)
  }

  var upChevron = <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 35 30"><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></svg>

  var downChevron = <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 35 30"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></svg>

  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-2 overflow-auto">
        <div className="w-full">
          <h2 className="inline-block w-full">Results</h2>
          <input className="inline-block float-right mt-5 mb-2" placeholder="search" type="text" id="filterText" value={props.filterText} onChange={props.handleChange('filterText')}/>
        </div>
        <div className="table w-full">
          <table>
            <thead>
              <tr>
                <td>
                  <button className="hover:text-gray-400 font-bold rounded inline-flex items-center" onClick={props.handleSort('name')}>
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
            <tbody>{formatData()}</tbody>
            <tfoot>
            <PaginationBar
              begining={begining}
              end={end}
              total={props.total}
              page={props.page + 1}
              handleChangePage={props.handleChangePage}
            />
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
