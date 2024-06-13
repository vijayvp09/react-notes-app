import Search from "./components/Search"
import NoteList from "./components/NoteList"
import Header from "./components/Header"
import { useEffect, useContext } from "react"
import { noteContext } from "./context/NoteContext"


const App = () => {
  const { dark, setNotes } = useContext( noteContext );
 
  
  return(
    <div className={dark ? `dark-mode`: "wrapper"}>
      <div className={dark ?"dark-mode container":"container"}>
        <Header />
        <Search />
        <NoteList />
      </div>
    </div>
  )
}

export default App;