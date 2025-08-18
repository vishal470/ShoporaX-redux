import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/UpdateProduct'
import ProductsDetails from '../pages/ProductsDetails'
import UserProfile from '../pages/users/UserProfile'
import PageNotFound from '../PageNotFound'
import AuthWrapper from './AuthWrapper'


const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductsDetails />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/admin/create-product' element={<AuthWrapper><CreateProduct /></AuthWrapper>} />
      <Route path='/admin/user-profile' element={<AuthWrapper><UserProfile /></AuthWrapper>} />

      <Route path='/admin/update-product/:id' element={<UpdateProduct />} />



      <Route path='*' element={<PageNotFound />} />



    </Routes>
  )
}

export default Mainroutes
