import { createContext, use, useEffect, useState } from "react";

export const NotesContext = createContext()

export function NotesProvider({ children }) {

    const localData = localStorage.getItem('categories')

    const [categories, setCategories] = useState(() => {

        return localData ? JSON.parse(localData) : [

            {
                id: crypto.randomUUID(),
                name: "Inglês",
                description: "",
                img: "https://www.catho.com.br/carreira-sucesso/wp-content/uploads/sites/3/2022/05/carreira-para-quem-fala-ingles.jpg",
            },
            {
                id: crypto.randomUUID(),
                name: "Programação",
                description: "",
                img: "https://estechead.com.br/wp-content/uploads/2017/02/As-15-principais-linguagens-de-programa%C3%A7%C3%A3o-no-mundo.png",
            },
            {
                id: crypto.randomUUID(),
                name: "Português",
                description: "",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNMa3oNLQCzIAaEmffvmNp1s5DqiQSYAdxMEPMyXcyvqvNeb-uzMg10E&s=10",
            },

        ]
        
    })

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes')
        return savedNotes ? JSON.parse(savedNotes) : []
    })

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories))
    }, [categories])

    return (
        <NotesContext.Provider value={{categories, setCategories, notes, setNotes}}>
            {children}
        </NotesContext.Provider>
    )
}

