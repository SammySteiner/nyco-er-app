import React from 'react'

export default(props) => {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td className="text-left">{props.data.dob}</td>
      <td className="text-left">{props.data.gender}</td>
      <td className="text-left">{props.data.address}</td>
    </tr>
  )
}
