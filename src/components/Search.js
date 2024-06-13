import {MdSearch} from "react-icons/md"
import { useContext } from "react"
import { noteContext } from "../context/NoteContext"

const Search = () => {
    const { setSearchTerm} = useContext(noteContext);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <div className="search">
            <MdSearch className="search-icon" />
            <input type="text" placeholder="Search" name="search" onChange={handleChange} />
        </div>
    )
}

export default Search;