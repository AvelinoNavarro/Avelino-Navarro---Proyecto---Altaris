import { useState } from 'react'
import EmployeeCard from '../components/EmployeeCard'
import '../styles/Personal.css'
interface Empleado {
  id: number
  name: string
  email: string
  address: {
    city: string
  }
}

function Personal() {
  const [empleados, setEmpleados] = useState<Empleado[]>([])
  const [cargando, setCargando] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [busqueda, setBusqueda] = useState<string>('')

  const cargarEmpleados = async (): Promise<void> => {
    setCargando(true)
    setError('')

    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`)
      }

      const datos: Empleado[] = await respuesta.json()
      setEmpleados(datos)
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      }
    } finally {
      setCargando(false)
    }
  }

  const empleadosFiltrados: Empleado[] = empleados.filter((emp) =>
    emp.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section>
      <h2>Personal</h2>

      <div className="barra-superior">
        <input
          type="text"
          className="buscador"
          placeholder="Buscar empleado por nombre: "
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button className="btn-cargar" onClick={cargarEmpleados}>
          Cargar personal
        </button>
      </div>

      {cargando && <p className="mensaje">Cargando datos del servidor…</p>}
      {error && <p className="mensaje error">{error}</p>}

      <div className="cuadricula">
        {empleadosFiltrados.map((emp) => (
          <EmployeeCard
            key={emp.id}
            nombre={emp.name}
            correo={emp.email}
            ciudad={emp.address.city}
          />
        ))}
      </div>
    </section>
  )
}

export default Personal