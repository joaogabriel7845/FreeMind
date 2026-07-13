import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function AddButton({ onClick }) {
    const {theme} = useContext(ThemeContext)

    return (
        <button onClick={onClick} className={`fixed bottom-8 right-8 transition-all ${theme.bg} w-10 h-10 md:w-16 md:h-16 font-[Raleway] flex justify-center items-center shadow-md border-2 ${theme.border} rounded-md hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl`}>
            <FontAwesomeIcon icon={faPlus} fontSize={20}/>
        </button>
    )
}

export default AddButton