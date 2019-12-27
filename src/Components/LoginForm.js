import React from 'react'

export default(props) => {
  return (
      <div className="w-full">
      <form className="bg-white shadow-md rounded max-w-lg px-8 pt-6 pb-8 my-2 mx-auto" onSubmit={(event)=>props.handleLogin(event)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user" type="text" placeholder="Username" value={props.user} onChange={props.handleChange('user')}/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" value={props.password} onChange={props.handleChange('password')} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="agency">
            Agency
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="agency" type="text" placeholder="Agency" value={props.agency} onChange={props.handleChange('agency')}/>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(event)=>props.handleLogin(event)}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}
