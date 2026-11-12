import '../styles/NavBtn.css'

interface NavBtnProps {
  titulo: string
  activo: boolean
  onClick: () => void
}

function NavBtn({ titulo, activo, onClick }: NavBtnProps) {
  return (
    <button className={activo ? 'nav-btn activo' : 'nav-btn'} onClick={onClick}>
      {titulo}
    </button>
  )
}

export default NavBtn