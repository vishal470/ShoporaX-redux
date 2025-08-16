// import React from 'react'

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
//       Home
//     </div>
//   )
// }

// export default Home

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asynclogoutuser } from "../store/actions/userAction";

const Home = () => {


  const user = useSelector((state) => state.userReducer.users);

  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(asynclogoutuser());
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Welcome to <span className="text-indigo-600">ShoporaX</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
            Discover the best products at unbeatable prices. Shop now and enjoy a seamless experience like never before.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/products"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-md font-medium hover:from-indigo-600 hover:to-purple-700 transition cursor-pointer"
            >
              Shop Now
            </Link>
            {user ?
              <>
                <button
                  onClick={LogoutHandler}
                  className="px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                >
                  Log out
                </button>
              </>
              :
              <>
                <Link
                  to="/login"
                  className="px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                >
                  Sign In
                </Link>
              </>
            }

          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1713646778050-2213b4140e6b?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Shopping"
            className="w-80 md:w-[289rem] drop-shadow-lg rounded-[20px]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800">🚚 Free Delivery</h3>
          <p className="text-gray-600 mt-2">
            Get free & fast delivery on your first order and save more every time you shop.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800">💳 Secure Payments</h3>
          <p className="text-gray-600 mt-2">
            Shop with confidence using our trusted and safe payment gateways.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800">⭐ Top Products</h3>
          <p className="text-gray-600 mt-2">
            Browse our curated catalog of trending and top-rated items.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

