import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Personal from './views/Personal'
import Inventario from './views/Inventario'
import Incidencias from './views/Incidencias'


function App() {
  const [seccion, setSeccion] = useState<string>('Personal')

  return (
    <div id="app-container">
      <Header />
      <div id="cuerpo">
        <Sidebar seccion={seccion} onCambiar={setSeccion} />
        <main id="panel_central">
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </main>
      </div>
    </div>
  )
}

export default App