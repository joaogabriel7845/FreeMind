import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Footer() {
    const { theme } = useContext(ThemeContext)
    
    return (
        <div className={`w-full flex justify-center p-3 border-t ${theme.border} shadow-2xl `}>
            <p className="font-[Inter] font-medium text-gray-400">Utilize também: <a className="text-blue-400 underline hover:text-blue-300 transition-all" href="https://pomodoro-hazel-three.vercel.app/" target="_blank">Pomodoro</a></p>
        </div>
    )
}

export default Footer