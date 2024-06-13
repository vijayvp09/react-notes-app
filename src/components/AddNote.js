import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { noteContext } from "../context/NoteContext";

const AddNote = () => {
    const date = new Date();
    const { setNotes } = useContext(noteContext);
    const [note, setNote] = useState({
        id: nanoid(),
        text: "",
        date: date.toDateString()
    });
    
   
    const remaining = 200-note.text.trim().length;
    

    const handleOnChange = (e) => {
        if(remaining > 0){
            setNote(prevNote => ({ ...prevNote, [e.target.name]: e.target.value }));
        }
    };

    const handleSave = () => {
        if(note.text.trim().length > 0){
            setNotes(prevNotes => ([...prevNotes, note]));
            setNote({ id: nanoid(), text: "",date: date.toDateString() }); 
        }
    };

    return (
        <div className="note new" >
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a note..."
                name="text"
                value={note.text}
                onChange={handleOnChange}
            ></textarea>  
            <div className="note-footer">
                <small>{remaining} Remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;