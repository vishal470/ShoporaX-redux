import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateuser } from '../store/actions/userAction';

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productsReducer.products);


  const IncreaseQuantityHandler = (index, product) => {
    // Logic for increasing the quantity of the product in the cart
    // This function should update the user's cart state
    const copyuser = { ...user, carts: [...user.carts] };
    copyuser.carts[index] = {
      ...copyuser.carts[index],
      quantity: copyuser.carts[index].quantity + 1
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  }

  const DecreaseQuantityHandler = (index, product) => {
    // Logic for increasing the quantity of the product in the cart
    // This function should update the user's cart state
    const copyuser = { ...user, carts: [...user.carts] };

    if (copyuser.carts[index].quantity > 1) {
      // Only decrease if quantity is greater than 1
      copyuser.carts[index] = {
        ...copyuser.carts[index],
        quantity: copyuser.carts[index].quantity - 1
      }
    } else {
      // If quantity is 1, remove the item from the cart
      copyuser.carts.splice(index, 1);
    }
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  }

  const cartItems = user?.carts?.map((item, index) => (
    <div
      key={item.product.id}
      className="bg-white shadow-md rounded-2xl p-4 flex flex-col sm:flex-row sm:items-start gap-6 border hover:shadow-lg transition m-2"
    >
      {/* Product Image */}
      <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={item.product.image}
          alt={item.product.title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {item.product.title}
        </h1>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {item.product.description}
        </p>
        <p className="text-xl font-bold text-green-600 mt-2">
          ₹{item.product.price}
        </p>

        {/* Quantity Buttons */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => DecreaseQuantityHandler(index, item)}
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            -
          </button>
          <span className="px-4 font-medium">{item.quantity}</span>
          <button
            onClick={() => IncreaseQuantityHandler(index, item)}
            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    </div>

  ));




  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Checkout Section */}
      {cartItems}
    </div>
  );
};

export default Cart;
