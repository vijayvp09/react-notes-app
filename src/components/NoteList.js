import Note from "./Note"
import AddNote from "../components/AddNote"
import {useContext} from "react"
import {noteContext} from "../context/NoteContext"

const NoteList = () => {
    const {notes, searchTerm} = useContext(noteContext);
    const filterdNotes = notes.filter((note)=>note.text.toLowerCase().includes(searchTerm.toLowerCase(  ))) 
    return(
        <div className="notes-list">
             {filterdNotes.map((note, index)=> {
                return(
                <Note key={index} id={note.id} text={note.text} date={note.date} />
             )})}
             <AddNote />
        </div>
    )
}

export default NoteList;