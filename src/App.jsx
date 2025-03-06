import NavBar from './TopNavBar/NavBar'
import ItemCart from './ItemCart/Itemcart'
import SingleitemComponent from './SingleItem/singleitem'
import CartItem from './CartItem/cartItem'
import OrdersCart from './OrdersCart/Orderscart'
import CategoriesComponent from './categories/Categories'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="*" element={
            <div>
              <NavBar />
              <div>
                <Routes>
                  <Route path="/" element={<CategoriesComponent />} />
                  <Route path="itemsdetails" element={<ItemCart />} />
                  <Route path="singleitemdetail" element={<SingleitemComponent />} />
                  <Route path="cartitems" element={<CartItem />} />
                  <Route path="orders" element={<OrdersCart />} />
                </Routes>
              </div>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
