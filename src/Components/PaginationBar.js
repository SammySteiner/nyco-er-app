import React from 'react'

export default(props) => {
  return (
    <tr className="bottom">
      <td colSpan={4}><span className="inline-flex float-left mt-2">Showing {props.begining} to {props.end} of {props.total} results</span>
      <span className="inline-flex float-right mt-2">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={props.handleChangePage('first')}>
          First
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" onClick={props.handleChangePage('prev')}>
          Prev
        </button>
        <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" onClick={props.handleChangePage('none')}>
          {props.page}
        </span>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" onClick={props.handleChangePage('next')}>
          Next
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={props.handleChangePage('last')}>
          Last
        </button>
        </span>
      </td>
    </tr>
  )
}
