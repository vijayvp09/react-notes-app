import {createContext, useEffect, useState} from "react"

export const noteContext = createContext();

export const NoteContextProvider = ({children}) => {
    const [notes, setNotes] = useState(()=>{
      const savedNotes = JSON.parse(localStorage.getItem("react-notes-app"))
      return savedNotes? savedNotes: []; 
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [dark, setDark] = useState(false);


    useEffect(()=>{
      localStorage.setItem("react-notes-app", JSON.stringify(notes))
    },[notes]);

    return(
        <noteContext.Provider value={{notes, setNotes, searchTerm, setSearchTerm, dark, setDark}} >
            {children}
        </noteContext.Provider>
    )
}