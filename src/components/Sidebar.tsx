import NavBtn from './NavBtn'
import './styles/Sidebar.css'

interface SidebarProps {
  seccion: string
  onCambiar: (nueva: string) => void
}

function Sidebar({ seccion, onCambiar }: SidebarProps) {
  const secciones: string[] = ['Personal', 'Inventario', 'Incidencias']

  return (
    <aside id="sidebar">
      {secciones.map((s) => (
        <NavBtn
          key={s}
          titulo={s}
          activo={seccion === s}
          onClick={() => onCambiar(s)}
        />
      ))}
    </aside>
  )
}

export default Sidebar