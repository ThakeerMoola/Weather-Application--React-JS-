import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'

function weather() {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search'/>
        {/* images */}
        <img src={search_icon} alt=""/>
      </div>
      <img src="" alt=""/>
    </div>
  )
}

export default weather
