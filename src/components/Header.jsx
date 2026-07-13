import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


function Header() {

    const {isDark, setIsDark, theme} = useContext(ThemeContext)

    return (
        <div className={`transition-all w-full fixed z-50 flex justify-between items-center p-8 border-b shadow-md border-black/20 ${theme.bgHeader}`}>

            <h1 className={`text-2xl ${theme.text} font-bold font-['Darker_Grotesque']`}>Free<span className="text-[#1985A1]">Mind</span></h1>

            <div className="flex justify-center items-center">
                <button
                    className={`transition-all w-12 h-12 rounded-full border ${theme.border} hover:cursor-pointer ${isDark ? "hover:bg-[#34434d]" : "hover:bg-gray-200"}`}
                    onClick={() => isDark ? setIsDark(false) : setIsDark(true)}
                >
                    <FontAwesomeIcon icon={isDark ? faSun : faMoon} color={isDark ? "white" : "black"} fontSize={16}/>
                </button>
            </div>

        </div>
    )
}

export default Header;