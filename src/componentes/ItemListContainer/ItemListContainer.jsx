import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorCategoria} from "../../asyncmock";
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
  const [productos, SetProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductosPorCategoria : getProductos;
    funcion (idCategoria)
        .then (res => SetProductos(res))

  },[idCategoria])

  return (
    <>
      <h2> {props.greeting}</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer