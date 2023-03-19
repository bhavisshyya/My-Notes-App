import React from 'react'

function Header({ setDarkmode}) {
  return (
    <div className='header'>
        <h1>My Notes App</h1>

        <label class="switch">
            <input type="checkbox" onClick={()=> setDarkmode((previousValue)=> !previousValue)} />
            <span class="slider"></span>
        </label>
    </div>
  )
}

export default Header