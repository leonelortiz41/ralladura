import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Notas from './components/Notas.jsx'
import "./estilo.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Notas/>
  </React.StrictMode>,
)
