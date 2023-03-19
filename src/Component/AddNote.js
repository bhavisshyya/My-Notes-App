import React from 'react'

export default function AddNote({noteText, setNoteText, addNote}) {

  return (
    <div className='note new'>
        <textarea cols='30' rows=' 10' maxLength={250} value={noteText} placeholder="Type here....."
        onChange={(e)=>{
            setNoteText(e.target.value);
        }}></textarea>
        <div className="footer">
            <small className="remaining">Remaining: {250-noteText.length}</small>
            <button className="add" onClick={addNote}>ADD</button>
        </div>
    </div>
  )
}
