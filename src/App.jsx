import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";
import HeroCards from "./components/Hero";
import Hero from "./components/Hero";

function App() {
  const { theme } = useContext(ThemeContext);
 
  return (

    <div className={`transition-all w-full min-h-screen flex flex-col ${theme.bg}`}>

      <Header />
      <Hero />

    </div>

  )
}

export default App;