import './styles/AssetCard.css'
interface AssetCardProps {
  nombre: string
  precio: number
  categoria: string
  imagen: string
}

function AssetCard({ nombre, precio, categoria, imagen }: AssetCardProps) {
  return (
    <article className={precio > 50 ? 'tarjeta tarjeta-valor' : 'tarjeta'}>
      <img src={imagen} alt={nombre} className="imagen-activo" />
      <h3>{nombre}</h3>
      <p className="precio">{precio.toFixed(2)} $</p>

      {precio > 50 && <span className="etiqueta-valor">Activo de Alto Valor</span>}
    </article>
  )
}

export default AssetCard