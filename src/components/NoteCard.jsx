import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function NoteCard({ children, id, onDelete }) {
    const { theme } = useContext(ThemeContext)
    
    return (
        <div className={`group relative flex h-56 flex-col gap-5 p-5 justify-center items-center rounded-2xl border ${theme.border}`}>

            <button onClick={onDelete} className="transition-all bg-black/50 px-2.5 py-2 rounded-full md:opacity-0 group-hover:opacity-100 text-xl absolute top-2 right-2 hover:cursor-pointer hover:text-red-400">
                <FontAwesomeIcon icon={faTrash}/>
            </button>
            
            <div className={`w-full p-5 border-b ${theme.border} `}>
                <h1 className=" text-2xl font-bold font-[Inter]">{children}</h1>
            </div>
            <div className="w-full flex justify-center p-3 font-semibold bg-[]">
                <Link to={`/note/${id}`} className={`${theme.button} px-5 py-3 rounded-2xl text-xl text-white`}>Ver Nota</Link>
            </div>
        </div>
    )
}

export default NoteCard