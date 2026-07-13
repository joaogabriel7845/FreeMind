import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { NotesContext } from "../context/NotesContext"
import Header from "../components/Header"
import { ThemeContext } from "../context/ThemeContext"
import Input from "../components/Input"
import TextArea from "../components/TextArea"
import ReactMarkDown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faCheck, faPen } from "@fortawesome/free-solid-svg-icons"
import remarkGfm from "remark-gfm"

function NoteDetailsPage() {
    const { theme } = useContext(ThemeContext)
    
    const { id } = useParams()

    const noteEmpty = " # # Titulo\n---\n## ## Subtitulo\n---\n Texto "
    
    const [editing, setEditing] = useState(false)
    const [titleEdit, setTitleEdit] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const { notes, setNotes } = useContext(NotesContext)

    const note = notes.find(not => not.id === id)
    
    return (
        <div className={` transition-all w-full min-h-screen ${theme.bg} flex flex-col ${theme.text}`}>

            <Header />

             <div className={`w-full flex flex-1 flex-col gap-5 px-10 rounded-2xl ${theme.text} ${theme.bg}`}>

                <div className={`flex justify-between gap-5 py-10 mt-30 text-3xl ${theme.text}`}>
                
                    <div className={`${editing ? "w-full" : ""} flex justify-center items-center gap-5 `}>
                        <Link to={`/notes/${note.categoryId} `}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </Link>
                        {
                            editing ? <input onChange={(e) => setTitleEdit(e.target.value)} className={`${submitted && titleEdit.trim() === "" ? "border-b-2 border-red-400" : ""} w-full outline-0 font-bold font-[Inter] ${editing ? "border-b-2" : ""}`} value={titleEdit} type="text" /> : <h1 className="font-bold font-[Inter]">{note.title}</h1>
                        }
                    </div>

                    <div className="flex gap-2">

                        <button onClick={() => {
                            setEditing(true)
                            setTitleEdit(note.title)
                        }} className="transition-all bg-black/50 px-2.5 py-2 rounded-full text-xl hover:cursor-pointer">
                            <FontAwesomeIcon icon={faPen}/>
                        </button>

                        <button onClick={() => {

                            setSubmitted(true)
                            if (titleEdit.trim() === "") return

                            setNotes(notes.map(n =>
                                n.id === id ? {...n, title: titleEdit} : n
                            ))
                            setEditing(false)
                            
                        }} className={`${editing ? "block" : "hidden"} transition-all bg-black/50 px-2.5 py-2 rounded-full text-xl hover:cursor-pointer hover:text-green-400 `}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>

                    </div>

                    

                </div>
                
                <div className="h-full flex-1 flex flex-col md:flex-row gap-5">

                    <div className="min-h-0 flex-1 flex flex-col">
                        <TextArea value={note.content} placeholder={"Fique a vontade para utilizar markdown. Tente # Título"} onChange={(newContent) => {
                            setNotes(notes.map(n => 
                                n.id === id ? {...n, content: newContent} : n
                            ))
                        }} name={"Conteúdo da anotação"}></TextArea>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">

                        <h1 className="text-2xl font-semibold">Preview da Anotação</h1>

                        <div className={`h-full flex-1 flex flex-col gap-2 p-5 border ${theme.border} rounded-md shadow-md font-[Inter] *:mb-2 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:p-2 [&_td]:border [&_td]:p-2 [&_h1]:text-2xl [&_a]:text-blue-500 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-semibold [&_strong]:font-bold [&_em]:italic `}>
                            <ReactMarkDown remarkPlugins={[remarkGfm]}>{note.content === "" ? noteEmpty : note.content}</ReactMarkDown>
                        </div>

                    </div>
                    
                </div>

                <div className="w-full p-2 flex justify-center">
                    <p className="text-[16px] text-gray-400 font-[Inter]">As alterações são salvas automaticamente !</p>
                </div>

            </div>


        </div>
            
    )
}

export default NoteDetailsPage