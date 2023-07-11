import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './Context/CartContext'
import Cart from './componentes/Cart/Cart'
import { Envios } from './componentes/Envios/Envios'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path ="/cart" element ={<Cart/>} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          </Routes>
          <Envios/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App