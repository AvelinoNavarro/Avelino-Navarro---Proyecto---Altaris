import { useState } from 'react'
import AssetCard from '../components/AssetCard'

// Solo los campos de la API que vamos a usar
interface Activo {
  id: number
  title: string
  price: number
  category: string
  image: string
}

function Inventario() {
  const [activos, setActivos] = useState<Activo[]>([])
  const [cargando, setCargando] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const cargarActivos = async (): Promise<void> => {
    setCargando(true)
    setError('')

    try {
      const respuesta = await fetch('https://fakestoreapi.com/products?limit=6')

      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`)
      }

      const datos: Activo[] = await respuesta.json()
      setActivos(datos)
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
      <h2>Inventario</h2>

      <div className="barra-superior">
        <button className="btn-cargar" onClick={cargarActivos}>
          Cargar inventario
        </button>
      </div>

      {cargando && <p className="mensaje">Cargando datos del servidor…</p>}
      {error && <p className="mensaje error">{error}</p>}

      <div className="cuadricula">
        {activos.map((activo) => (
          <AssetCard
            key={activo.id}
            nombre={activo.title}
            precio={activo.price}
            categoria={activo.category}
            imagen={activo.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Inventario