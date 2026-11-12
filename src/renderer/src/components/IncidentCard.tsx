interface IncidentCardProps {
  titulo: string
  departamento: number
  completada: boolean
}

function IncidentCard({ titulo, departamento, completada }: IncidentCardProps) {
  return (
    <article className={completada ? 'tarjeta incidencia-resuelta' : 'tarjeta incidencia-pendiente'}>
      <div className="incidencia-cabecera">
        <span className="icono-estado">{completada ? '✅' : '⚠️'}</span>
        <span className="estado-texto">{completada ? 'Resuelta' : 'Pendiente'}</span>
      </div>
      <h3>{titulo}</h3>
      <p>🏢 Departamento {departamento}</p>
    </article>
  )
}

export default IncidentCard