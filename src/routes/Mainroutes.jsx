import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const UpdateProduct = lazy(() => import("../pages/admin/UpdateProduct"));
const ProductsDetails = lazy(() => import("../pages/ProductsDetails"));
const UserProfile = lazy(() => import("../pages/users/UserProfile"));
const PageNotFound = lazy(() => import("../PageNotFound"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const Cart = lazy(() => import("../pages/Cart"));





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

      <Route path='/cart' element={<Cart />} />



      <Route path='*' element={<PageNotFound />} />



    </Routes>
  )
}

export default Mainroutes
