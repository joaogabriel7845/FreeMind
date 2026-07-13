import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faHeartBroken, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";
import AddButton from "../components/AddButton";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import ReactMarkDown from "react-markdown";
import NoteDetailsPage from "./NoteDetailsPage";
import remarkGfm from "remark-gfm";

function NotesPage() {

    const { categoryId } = useParams()

    const {categories} = useContext(NotesContext)

    const noteEmpty = " # # Titulo\n---\n## ## Subtitulo\n---\n Texto "

    const categoryCurrent = categories.find(c => c.id === categoryId)

    const {theme} = useContext(ThemeContext)
    const {notes, setNotes} = useContext(NotesContext)

    const notesFromCategory = notes.filter(n => n.categoryId === categoryId)

    const [titleNote, setTitleNote] = useState("")
    const [contentNote, setContentNote] = useState(" # # Titulo\n---\n## ## Subtitulo\n---\n Texto")
    
    const [modalView, setModalView] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    function cleanStates() {
        setSubmitted(false)
        setTitleNote("")
        setContentNote("")
    }

    return (
        <div className={`transition-all w-full min-h-screen ${theme.bg} flex flex-col ${theme.text}`}>
            
            <Header />

             {
                modalView && (
                    <div onMouseDown={(e) => e.target === e.currentTarget && setModalView(false)} className="fixed inset-0 z-100 p-5 flex justify-center items-center bg-black/50 font-['Darker_Grotesque'] ">

                        <div onClick={(e) => e.stopPropagation()} className={`w-full max-w-7xl overflow-y-auto max-h-[90vh] flex flex-col gap-5 p-10 rounded-2xl ${theme.text} ${theme.bg}`}>

                            <h1 className="text-3xl font-semibold">Adicione sua anotação !</h1>

                            <Input onChange={setTitleNote} name={"Título da anotação"} className={submitted && titleNote.trim() === "" ? "ring-2 ring-red-400" : ""} placeholder={"Ex: Aprendendo a pensar"}></Input>
                            
                            <div className="flex flex-1 flex-col md:flex-row gap-5">

                                <div className="flex-1">
                                    <TextArea height="h-64" placeholder={"Fique a vontade para utilizar markdown. Tente # Título"} onChange={setContentNote} name={"Conteúdo da anotação"}></TextArea>
                                </div>

                                <div className="flex flex-col gap-2 flex-1">

                                    <h1 className="text-2xl font-semibold">Preview da Anotação</h1>

                                    <div className={`h-64 flex flex-col gap-2 p-5 border ${theme.border} rounded-md shadow-md font-[Inter] *:mb-2 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:p-2 [&_td]:border [&_td]:p-2 [&_h1]:text-2xl [&_a]:text-blue-500 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-semibold [&_strong]:font-bold [&_em]:italic  `}>
                                        <ReactMarkDown remarkPlugins={[remarkGfm]}>{contentNote === "" ? noteEmpty : contentNote}</ReactMarkDown>
                                    </div>

                                </div>
                                
                            </div>

                            <button onClick={() => {

                                setSubmitted(true)
                                if (titleNote.trim() === "") return

                                setNotes([...notes, {
                                    id: crypto.randomUUID(),
                                    title: titleNote,
                                    categoryId: categoryId,
                                    content: contentNote 
                                }])
                                setModalView(false)
                                cleanStates()

                            }} 
                            className={`transition-all text-xl font-[Raleway] font-semibold p-4 rounded-3xl text-white ${theme.buttonModal} hover:scale-97 active:scale-95 `}>
                                Adicionar Nota
                            </button>
                        </div>

                    </div>
                )
            }


            <div className={`flex gap-5 p-10 mt-30 text-3xl ${theme.text}`}>
                
                <Link to={"/"}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </Link>
                
                <h1 className="font-bold font-[Inter]">{categoryCurrent?.name}</h1>

            </div>

            <div className="flex flex-1 p-5">
                <div className={`flex-1 border ${theme.border} rounded-2xl `}>
                    {
                        notesFromCategory.length === 0 

                        ? <div className="w-full h-full flex flex-col justify-center items-center text-gray-400 px-5">
                            <div className={`border border-dashed ${theme.border} p-9 flex flex-col justify-center items-center gap-3 rounded-2xl `}>
                                <FontAwesomeIcon icon={faHeartBroken} fontSize={64}/>
                                <h1 className="text-center text-4xl font-bold font-[Raleway]">Você não possui anotações !</h1>
                            </div>
                        </div>

                        : <div className={`grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] p-5 gap-5 md:p-10 ${theme.text}`}>

                            {notesFromCategory.map((n) => (
                                <NoteCard onDelete={() => {
                                    setNotes(notes.filter(note => note.id !== n.id))
                                }} key={n.id} id={n.id}>
                                    {n.title}
                                </NoteCard>
                            ))}

                          </div>
                        
                    }
                    
                </div>
            </div>

            <AddButton onClick={() => setModalView(true)} />

        </div>
    )
}

export default NotesPage;