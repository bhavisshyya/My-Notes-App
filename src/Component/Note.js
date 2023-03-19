import React from 'react'
import {BsTrashFill} from 'react-icons/bs'
export default function Note({note , deleteNotes}) {
  return (
    <div className='note'>
        <span>{note.text}</span>
        <div className="footer">
            <small className="date">{note.date}</small>
            <button className="delete" onClick={()=>deleteNotes(note.id)}><BsTrashFill/></button>
        </div>
    </div>
  )
}
