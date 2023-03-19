import React from 'react'
import {FiSearch} from 'react-icons/fi'
function SearchNote({handleSearch}) {
  return (
    <div className='search-box'>
        <FiSearch/>
        <input type='text' onChange={(e)=>handleSearch(e.target.value)} placeholder='search notes....'/>
    </div>
  )
}

export default SearchNote