import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { NotesContext } from "../context/NotesContext"
import CategoryCard from "./CategoryCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faSpiral } from "@fortawesome/free-solid-svg-icons"
import Input from "./Input"
import AddButton from "./AddButton"
import Footer from "./Footer"

function Hero() {
    const {theme} = useContext(ThemeContext)
    const { categories, setCategories } = useContext(NotesContext)
    const { notes, setNotes } = useContext(NotesContext) 
    
    const [modalView, setModalView] = useState(false)
    const [editingCategory, setEditingCategory] = useState(null)

    const [imgCategory, setImgCategory] = useState("")
    const [categoryName, setCategoryName] = useState("")
    const [descriptionCategory, setDescriptionCategory] = useState("")

    const [submitted, setSubmitted] = useState(false)

    const noImage = "https://placehold.co/400x200?text=Sem+imagem"

    function cleanStates() {
        setImgCategory("")
        setCategoryName("")
        setDescriptionCategory("")
        setEditingCategory(null)
        setSubmitted(false)
    }

    return (
        <div className={`${theme.text} flex-1 flex flex-col gap-5 font-['Darker_Grotesque']`}>

            {
                modalView && (
                    <div onMouseDown={(e) => {if (e.target === e.currentTarget) {setModalView(false), cleanStates()}}} className="fixed inset-0 z-10 p-5 flex justify-center items-center bg-black/50">

                        <div onClick={(e) => e.stopPropagation()} className={`w-full max-w-3xl flex flex-col gap-5 p-10 rounded-2xl ${theme.bg}`}>
                            <h1 className="text-3xl font-semibold">{editingCategory ? "Editar categoria" : "Adicione sua própria categoria !"}</h1>

                            <Input value={categoryName} onChange={setCategoryName} name={"Nome da categoria"} className={submitted && categoryName.trim() === "" ? "ring-2 ring-red-400" : ""} placeholder={"Ex: Matemática"}></Input>
                            <Input value={descriptionCategory} onChange={setDescriptionCategory} name={"Descrição da categoria (opcional)"} placeholder={"Descreva sua categoria"}></Input>
                            <Input value={imgCategory} onChange={setImgCategory} name={"URL da imagem"} placeholder={"https://image.png"}></Input>

                            <button onClick={() => {
                                
                                if (editingCategory) {

                                    setCategories(categories.map((c) => 
                                        c.id === editingCategory.id
                                            ? {...c,  name: categoryName, description: descriptionCategory,  img: imgCategory}
                                            : c
                                    ))
                                    setModalView(false)
                                    cleanStates()
                                    
                                } else {

                                    setSubmitted(true)
                                    if (categoryName.trim() === "") return
    
                                    setCategories([...categories, {
                                        id: crypto.randomUUID(),
                                        description: descriptionCategory,
                                        name: categoryName,
                                        img: imgCategory,
                                    }])
                                    setModalView(false)
                                    cleanStates()

                                }
                            }} 
                            className={`transition-all text-xl font-[Raleway] font-semibold p-5 rounded-3xl text-white ${theme.buttonModal} hover:scale-97 active:scale-95 `}>
                                {editingCategory ? "Salvar alterações" : "Adicionar categoria"}
                            </button>
                        </div>

                    </div>
                )
            }

            <div className={`flex flex-col gap-3 px-5 pt-30`}>
                <h1 className="text-6xl font-semibold text-center">Crie anotações sobre quaisquer assuntos.</h1>
                <p className="text-3xl font-medium text-center ">Use seu tempo como quiser !</p>
                <div className="flex justify-center items-center">
                    <div className={`w-200 border-t ${theme.border}`}></div>
                </div>

                <div className="p-5">
                    <h1 className="text-5xl text-center font-semibold">Adicione Categorias</h1>
                </div>
            </div>


            <div className="flex flex-1 p-5 ">
                <div className={`w-full grid items-center text-4xl gap-10 border ${theme.border} p-5 rounded-2xl shadow-md overflow-auto`}>
                {
                    categories.length === 0
                    ? <div className={"w-full flex flex-col text-gray-400 justify-center items-center"}>
                        <div className={`border border-dashed ${theme.border} p-9 flex flex-col justify-center items-center gap-3 rounded-2xl `}>
                            <FontAwesomeIcon icon={faSpiral} fontSize={64}/>
                            <h1 className="text-4xl font-bold">Você não possui categorias !</h1>
                        </div>
                      </div>
                    : <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:p-10 gap-5">


                    {categories.map((c) => (
                        <CategoryCard
                            descriptionCategory={c.description}
                            onDelete={() => {
                                setNotes(notes.filter(note => note.categoryId !== c.id))
                                setCategories(categories.filter(cat => cat.id !== c.id))
                            }}

                            onEdit={() => {
                                setCategoryName(c.name)
                                setImgCategory(c.img)
                                setDescriptionCategory(c.description)
                                setEditingCategory(c)
                                setModalView(true)
                            }} 
                            key={c.id} id={c.id} img={!c.img.startsWith("https://") ? noImage : c.img}
                            >
                            {c.name}
                        </CategoryCard>
                    ))}
                </div>
                }
            </div>
        </div>

        <AddButton onClick={() => setModalView(true)} />
            
        <Footer />

        </div>

    )
}

export default Hero