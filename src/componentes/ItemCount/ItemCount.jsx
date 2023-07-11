import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, SetContador] = useState(initial);

    const incrementar = () => {
        if (contador < stock) {
            SetContador(contador + 1)
        }
    }
    const decrementar = () => {
        if (contador > initial ) {
            SetContador(contador - 1)
        }
    }
    return (
        <div className="counter">
            <div className="controles">
                <button onClick={decrementar}> - </button>
                <p>{contador}</p>
                <button onClick={incrementar}> + </button>
            </div>
            <div className="textoAgregar">
                <button className="agregar"onClick={() => onAdd(contador)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>




    )
}

export default ItemCount

