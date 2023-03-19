import { useState } from "react";
import Header from "./Component/Header";
import NoteList from "./Component/NoteList";
import SearchNote from "./Component/SearchNote";

function App() {

  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("")
  const [darkmode , setDarkmode] = useState(false)
  function handleSearch(e){
    setSearchNote(e);
  }

  return (
    <div className={darkmode && "dark-mode"}>
    <Header setDarkmode={setDarkmode} />
    <SearchNote handleSearch={handleSearch}/>
    <NoteList  notes={notes.filter(note => note.text.includes(searchNote))} setNotes={setNotes} />
    </div>
  );
}

export default App;
