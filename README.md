# 🧠 FreeMind

Aplicação de anotações pessoais com suporte a **Markdown**, organização por categorias e tema claro/escuro.

---

## ✨ Funcionalidades

- 📁 **Categorias** — crie, edite e delete categorias com nome e imagem
- 📝 **Anotações** — crie e edite anotações com suporte completo a Markdown
- 👁️ **Preview em tempo real** — visualize o Markdown formatado enquanto escreve
- 🌙 **Tema claro/escuro** — alternância de tema persistida no navegador
- 💾 **Persistência local** — dados salvos automaticamente no localStorage
- 📱 **Responsivo** — layout adaptado para mobile e desktop

---

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)
- [Font Awesome](https://fontawesome.com/)

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/joaogabriel7845/FreeMind

# Entre na pasta
cd FreeMind

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Acesse em `http://localhost:5173`

---

## 📁 Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── CategoryCard.jsx
│   ├── NoteCard.jsx
│   ├── AddButton.jsx
│   ├── Input.jsx
│   ├── TextArea.jsx
│   └── Footer.jsx
├── context/          # Contextos globais
│   ├── ThemeContext.jsx
│   └── NotesContext.jsx
├── pages/            # Páginas da aplicação
│   ├── NotesPage.jsx
│   └── NoteDetailsPage.jsx
└── main.jsx
```

---

## 📌 Sobre

Projeto desenvolvido para uso pessoal com foco em aprendizado de React — incluindo `useContext`, `useEffect`, React Router, localStorage e boas práticas de componentização.

Desenvolvido por [João Gabriel](https://github.com/joaogabriel7845)
