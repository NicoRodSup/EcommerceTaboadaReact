import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './CartItem.css';


const CartItem = ({ item, cantidad, img }) => {
    const { eliminarProducto } = useContext(CartContext);
    return (
        <>
            <div  className="cart-flex" key ={item.id} >
                <h4>{item.nombre}</h4>
                <p>Cantidad : {cantidad}</p>
                <img className="img-cart" src={item.img} alt={item.nombre} />
                <p>$ {item.precio} X Unidad</p>
                <button className="btn-eliminar" onClick={() => eliminarProducto(item.id)}>Eliminar</button>
            </div>
        </>

    )
}

export default CartItem