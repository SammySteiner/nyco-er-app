import React from 'react'

export default(props) => {

  return (
      <div className="w-full center">
      <form className="bg-white shadow-md rounded max-w-md px-8 pt-6 pb-8 my-2" onSubmit={(event)=>props.handleSearch(event)}>
      <h2 >Enter Search Criteria</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="borough">
            Borough
          </label>
          <select className="select shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="borough" type="text" value={props.borough} onChange={props.handleChange('borough')}>
            <option value="">SELECT</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="bronx">Bronx</option>
            <option value="manhattan">Manhattan</option>
            <option value="queens">Queens</option>
            <option value="staten-island">Staten Island</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
            Zip Code
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="number" placeholder="Zip Code" value={props.zip} onChange={props.handleChange('zip')}/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ageRange">
            Age Range
          </label>
          <select className="select shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="ageRange" type="text" value={props.ageRange} onChange={props.handleChange('ageRange')}>
            <option value="">SELECT</option>
            <option value="0">0 - 4 Years</option>
            <option value="5">5 - 9 Years</option>
            <option value="10">10 - 14 Years</option>
            <option value="15">15 - 19 Years</option>
            <option value="20">20 - 24 Years</option>
            <option value="25">25 - 29 Years</option>
            <option value="30">30 - 34 Years</option>
            <option value="35">35 - 39 Years</option>
            <option value="40">40 - 44 Years</option>
            <option value="45">45 - 49 Years</option>
            <option value="50">50 - 54 Years</option>
            <option value="55">55 - 59 Years</option>
            <option value="60">60 - 64 Years</option>
            <option value="65">65 - 69 Years</option>
            <option value="70">70 - 74 Years</option>
            <option value="75">75 - 79 Years</option>
            <option value="80">80 - 84 Years</option>
            <option value="85">85 - 89 Years</option>
            <option value="90">90 - 94 Years</option>
            <option value="95">95 - 99 Years</option>
            <option value="100">100 - 104 Years</option>
            <option value="105">105 - 109 Years</option>
            <option value="110">110+ Years</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="checkbox checkmark" htmlFor="disabled">
              <input id="disabled" type="checkbox" checked={props.disabled} onChange={props.handleChange('disabled')}/><span className="checkbox__label check-container">Disabled</span>
          </label>
          <label className="checkbox" htmlFor="floodZone">
              <input id="floodZone" type="checkbox" checked={props.floodZone} onChange={props.handleChange('floodZone')}/><span className="checkbox__label">Flood Zone</span>
          </label>
          <label className="checkbox" htmlFor="youthAndElderly">
              <input id="youthAndElderly" type="checkbox" checked={props.youthAndElderly} onChange={props.handleChange('youthAndElderly')}/><span className="checkbox__label">Youth & Elderly</span>
          </label>
          <label className="checkbox" htmlFor="homeless">
              <input id="homeless" type="checkbox" checked={props.homeless} onChange={props.handleChange('homeless')}/><span className="checkbox__label">Homeless</span>
          </label>
          <label className="checkbox" htmlFor="aPS">
              <input id="aPS" type="checkbox" checked={props.aPS} onChange={props.handleChange('aPS')}/><span className="checkbox__label">APS</span>
          </label>


        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(event)=>props.handleSearch(event)}>
            Search
          </button>
        </div>
      </form>
    </div>

  )
}
