import { MdDeleteForever } from "react-icons/md"
import {useContext, useState} from "react"
import {noteContext} from "../context/NoteContext"

const Note = ({text, date, id, color}) => {
    const {notes, setNotes} = useContext(noteContext);
    const [isEditable, setIsEditable] = useState(false);
    const handleDelete = () => {
        setNotes(notes.filter((note)=> note.id !==id));
    }

    const handleDivClick = () => {
        setIsEditable(true);
    };

    const handleBlur = () => {
        setIsEditable(false);
    };

    const handleInputChange = (e) => {
        setNotes(notes.map((note)=> {
           if(note.id === id){
             note.text=e.target.value;
           } 
           return note;
        }));
    };
    return(
    <div className="note" onClick={handleDivClick}>
         {isEditable ? 
                <textarea
                rows="8"
                cols="10"
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autoFocus
                />
             : 
             <span>{text}</span>
            }
        
            <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick={handleDelete} className="delete-icon" size="1.3em"/>
        </div>
    </div>        
    )
}

export default Note;