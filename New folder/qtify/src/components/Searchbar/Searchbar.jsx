import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className='searchbar'>
        <input type="text" placeholder='Search a album of your choice'/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default Searchbar