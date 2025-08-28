import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userAction";
import axios from "../api/axiosconfig";

import InfiniteScroll from "react-infinite-scroll-component"

const Products = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.users);

  // const product = useSelector((state) => state.products  Reducer.products);

  const [product, setProduct] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`/products?_start=${product.length}&_limit=6`); 

      if (data.length == 0) {
        sethasMore(false);
      }
      else {
        sethasMore(true);
        setProduct([...product, ...data]);
      }

    } catch (error) {
      console.log(error);
      sethasMore(false);
    }
  }

  useEffect(() => {

    fetchProducts();

  }, [])

  const AddtoCartHandler = (product) => {
    const copyuser = { ...user, carts: [...user.carts] };

    const index = copyuser.carts.findIndex((item) => item.product.id == product.id);
    // console.log(index)

    if (index == -1) {
      copyuser.carts.push({ product, quantity: 1 });
    } else {
      copyuser.carts[index] = {
        product,
        quantity: copyuser.carts[index].quantity + 1,
      };
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
    console.log("Updated cart:", copyuser.carts);
  };


  const filterProducts = product.filter((items) =>
    items.title.toLowerCase().includes(searchTerm.toLowerCase())
  );





  const renderProduct = filterProducts?.map((product) => {
    return (

      <div
        key={product.id}
        className="bg-white shadow-md rounded-2xl p-4 flex flex-col hover:shadow-xl transition"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain mx-auto"
        />
        <h1 className="text-lg font-semibold mt-2 line-clamp-1">{product.title}</h1>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-green-600">₹{product.price}</p>

          <button
            onClick={() => AddtoCartHandler(product)}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700 cursor-pointer"
          >
            Add to Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="px-4 py-2 bg-gray-700 text-white text-sm rounded-xl hover:bg-gray-800 cursor-pointer"
          >
            More Info
          </Link>
        </div>

      </div>
    );
  });

  return (



    <InfiniteScroll
      dataLength={product.length}
      next={fetchProducts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >


      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 mb-6 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200 outline-none placeholder-gray-400 text-gray-700"
        />
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Suspense fallback={<h1>Loading....</h1>}>
            {renderProduct}
          </Suspense>
        </div>
      </div>


    </InfiniteScroll>

  )
};

export default Products;