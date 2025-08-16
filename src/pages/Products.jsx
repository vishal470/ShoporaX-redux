import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const product = useSelector((state) => state.productsReducer.products);

  const renderProduct = product?.map((product) => {
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

          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700 cursor-pointer">
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

  return product && product.length > 0 ? (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderProduct}
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen text-xl font-medium text-gray-500">
      Loading...
    </div>
  );
};

export default Products;
