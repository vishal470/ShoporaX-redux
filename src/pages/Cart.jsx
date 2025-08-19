import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productsReducer.products);

  const cartItems = user.map((item)=>{
    return <>
      <div key={item.id}>
        <img src={item.carts.image} alt="" />
      </div>
    </>
  })
  
  return (
    <div>
      {cartItems}
    </div>
  )
}

export default Cart;
