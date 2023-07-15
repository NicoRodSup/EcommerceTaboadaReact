import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const {agregarProducto} = useContext (CartContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item ={id,img,nombre,precio};
        agregarProducto (item,cantidad);
    }
    return (
        <div className='div-contenedor'>
            <div>
                <img className='img-detail' src={img} alt={nombre} />
                
            </div>
            <div className='item-detail'>
                <h2 className='nombre-detail'>{nombre}</h2>
                <h3 className='precio-detail'>${precio}</h3>
                <h3 className='id-detail'>ID : {id}</h3>
                {
                    agregarCantidad > 0 ? (<Link className='link-productos' to="/cart">Finalizar pedido</Link>) : (<ItemCount initial={1} stock={stock} onAdd={manejadorCantidad} />)
                }
            </div>

        </div>
    )
}

export default ItemDetail