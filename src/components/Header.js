import { GiBarbedSun, GiMoon } from "react-icons/gi"
import {useContext} from "react"
import { noteContext } from "../context/NoteContext"

const Header = () => {
    const {dark, setDark} = useContext(noteContext);

    const handleDark = () => {
        setDark((dark)=> !dark);
    }
    return(
        <div className="header">
            <h1>MyNotes</h1>
            {dark 
            ? 
            <GiBarbedSun style={{color: "yellow"}} className="dark-icon" size="2rem" onClick={handleDark}/> 
            :
            <GiMoon className="dark-icon" size="2rem" onClick={handleDark}/>} 
        </div>
    )
}

export default Header;