import React from 'react'

export default(props) => {
  return (
    <div>
    <h2>Login Form</h2>
      <form onSubmit={(event)=>props.handleLogin(event)}>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input type="text" id="user" value={props.user} onChange={props.handleChange('user')}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={props.password} onChange={props.handleChange('password')} />
        </div>
        <div className="form-group">
          <label htmlFor="agency">Agency</label>
          <input type="text" id="agency" value={props.agency} onChange={props.handleChange('agency')}/>
        </div>
        <button type="button" onClick={(event)=>props.handleLogin(event)}>Login</button>
      </form>
    </div>
  )
}
