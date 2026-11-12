import { useState } from 'react'
import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
  const [hora, setHora] = useState<string>(() => new Date().toLocaleTimeString())


    setInterval(() => {
    setHora(new Date().toLocaleTimeString())
    }, 1000)

  return (
    <header id="cabecera">
      <div className="marca">
        <img src={logo} alt="Logo Altairs" className="logo" />
        <h1>Altaris</h1>
      </div>
      <span className="hora">{hora}</span>
    </header>
  )
}

export default Header