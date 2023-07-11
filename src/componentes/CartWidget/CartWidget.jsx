import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext);
    const imgCarrito ="https://cdn-icons-png.flaticon.com/512/3050/3050238.png"
  return (
    <div>
        <Link className='cantidad-total'  to="/cart">
        <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
        {
          cantidadTotal > 0 && <strong > {cantidadTotal}</strong>

        }
        </Link>
    </div>
  )
}

export default CartWidget