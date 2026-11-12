import { useState } from 'react'
import IncidentCard from '../components/IncidentCard'

interface Incidencia {
  id: number
  userId: number
  title: string
  completed: boolean
}

function Incidencias() {
  const [incidencias, setIncidencias] = useState<Incidencia[]>([])
  const [cargando, setCargando] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const cargarIncidencias = async (): Promise<void> => {
    setCargando(true)
    setError('')

    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')

      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`)
      }

      const datos: Incidencia[] = await respuesta.json()
      setIncidencias(datos)
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      }
    } finally {
      setCargando(false)
    }
  }

  return (
    <section>
      <h2>Incidencias</h2>

      <div className="barra-superior">
        <button className="btn-cargar" onClick={cargarIncidencias}>
          Cargar incidencias
        </button>
      </div>

      {cargando && <p className="mensaje">Cargando datos del servidor…</p>}
      {error && <p className="mensaje error">{error}</p>}

      <div className="cuadricula">
        {incidencias.map((inc) => (
          <IncidentCard
            key={inc.id}
            titulo={inc.title}
            departamento={inc.userId}
            completada={inc.completed}
          />
        ))}
      </div>
    </section>
  )
}

export default Incidencias