import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/UpdateProduct'
import ProductsDetails from '../pages/ProductsDetails'
import UserProfile from '../pages/users/UserProfile'


const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductsDetails />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/admin/create-product' element={<CreateProduct />} />
      <Route path='/admin/user-profile' element={<UserProfile/>} />

      <Route path='/admin/update-product/:id' element={<UpdateProduct />} />



    </Routes>
  )
}

export default Mainroutes
