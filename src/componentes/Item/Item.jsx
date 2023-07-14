import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
  return (

    <div className='contenedor-flex'>
    <div className='productos'>
      <div className='info-productos'>
        <img className='producto-imagen' src={img} alt={nombre} />
        <h3 className='nombre-producto'>{nombre}</h3>
        <p className='precio-producto'>$ {precio}</p>
        <Link className ='link-productos' to={`/item/${id}`}> Ver Mas </Link>
        
      </div>
    </div>
    </div>
  
  )
}

export default Item