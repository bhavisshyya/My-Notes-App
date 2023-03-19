import React, { useState } from 'react'
import Note from './Note'
import {nanoid} from 'nanoid'
import AddNote from './AddNote';
export default function NoteList({notes , setNotes}) {

    const [noteText, setNoteText] = useState('');

    function addNote(){
        if(noteText.trim().length > 0){
        const date=new Date().toLocaleDateString();
        const newNote= {
            text: noteText,
            date: date,
            id:nanoid()
        }
        const updateNotes= [...notes, newNote];
        setNotes(updateNotes);
        }else{
            alert('add some text');
        }
        setNoteText('');
    }

    function deleteNotes(id){
        const updateNotes= notes.filter(note=> note.id !== id);
        setNotes(updateNotes);
    }   
    
  return (
    <div className='note-container'>
        <AddNote noteText={noteText} setNoteText={setNoteText} setNotes={setNotes} addNote={addNote} />
        {notes.map(note => <Note note={note} key={note.id} deleteNotes={deleteNotes}/>)}
    </div>
  )
}


