import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function CategoryCard({ children, img, onEdit, onDelete, descriptionCategory, id }) {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`group relative transition-all font-[Raleway] flex flex-col shadow-md border ${theme.border} rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 `}>

            <div className="relative">
                <img className={"w-full h-48 object-cover"} src={img} alt="" />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <button onClick={onEdit} className="transition-all bg-black/50 px-2.5 py-2 rounded-full md:opacity-0 group-hover:opacity-100 text-xl absolute top-2 right-2 hover:cursor-pointer">
                <FontAwesomeIcon icon={faPen} color="white"/>
            </button>

            <button onClick={onDelete} className="transition-all bg-black/50 px-2.5 py-2 rounded-full md:opacity-0 group-hover:opacity-100 text-xl absolute top-2 left-2 hover:cursor-pointer hover:text-red-400">
                <FontAwesomeIcon icon={faTrash} color="white"/>
            </button>

            <div className={` ${theme.bgCard} flex justify-between items-center p-5 border-b ${theme.border}`}>
                <h1 className="text-2xl text-center">{children}</h1>
                <Link to={`/notes/${id}`} className={`${theme.button} text-xl p-3 font-[Inter] text-white rounded-xl `}><FontAwesomeIcon icon={faAngleRight}/></Link>
            </div>

            {
                descriptionCategory.trim() === ""
                ? <div className="p-5">
                    <p className="text-gray-400 text-[16px]">Sem descrição</p>
                </div>
                : <div className="p-5">
                    <p className="text-[16px]">Descrição: {descriptionCategory}</p>
                </div>
                
            }


        </div>
    )
}

export default CategoryCard;