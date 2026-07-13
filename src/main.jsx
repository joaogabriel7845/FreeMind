import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotesProvider } from './context/NotesContext.jsx'
import NotesPage from './pages/NotesPage.jsx'
import NoteDetailsPage from './pages/NoteDetailsPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <NotesProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/notes/:categoryId" element={<NotesPage />} />
          <Route path="/note/:id" element={<NoteDetailsPage />} />
        </Routes>
      </NotesProvider>
    </ThemeProvider>
  </BrowserRouter>,
)
