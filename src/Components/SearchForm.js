import React from 'react'

export default(props) => {
  return (
    <div>
    <h2>Search Form</h2>
      <form onSubmit={(event)=>props.handleSearch(event)}>
        <div className="form-group">
          <label htmlFor="borough">Borough</label>
          <input type="text" id="borough" value={props.borough} onChange={props.handleChange('borough')}/>
        </div>
        <button type="button" onClick={(event)=>props.handleSearch(event)}>Search</button>
      </form>
    </div>
  )
}
