import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { asyncdeleteproduct, asyncupdateproduct } from '../store/actions/productAction';

const ProductsDetails = () => {

  const { id } = useParams();
  const products = useSelector((state) => state.productsReducer.products);
  const user= useSelector((state)=>state.userReducer.users);

  const product = products.find((product) => product.id == id);
  // FORM
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category
    }
  });

  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id,product));
  }

  const DeleteHandler=()=>{
    dispatch(asyncdeleteproduct(id));
    navigate('/products')
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-600">
        Product not found
      </div>
    );
  }

  return product ? (
    <>
      {/* Product Details Section */}
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10">

          {/* Left: Product Image */}
          <div className="flex justify-center items-start">
            <img
              src={product.image}
              alt={product.title}
              className="h-[420px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Middle: Product Info */}
          <div className="col-span-1 flex flex-col">
            <h1 className="text-3xl font-extrabold text-gray-900 leading-snug">{product.title}</h1>
            <p className="text-yellow-500 text-sm mt-3">★★★★☆ <span className="text-gray-600">(120 ratings)</span></p>
            <p className="text-gray-700 mt-6 text-base leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <span className="text-xl font-medium text-gray-700">Price: </span>
              <span className="text-3xl font-bold text-green-600">₹{product.price}</span>
            </div>

            <p className="text-sm text-gray-500 mt-3">Inclusive of all taxes</p>
            <p className="text-sm text-gray-500">Free delivery available</p>
          </div>

          {/* Right: Purchase Box */}
          <div className="rounded-2xl p-8 shadow-lg bg-white flex flex-col gap-5">
            <p className="text-3xl font-bold text-green-600">₹{product.price}</p>
            <p className="text-sm text-gray-500">+ Free Shipping</p>

            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-yellow-600 shadow-md transition cursor-pointer">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 shadow-md transition cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Update Product Form */}

      {user && user?.isAdmin && <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="w-full max-w-2xl bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Update Product</h2>

          <input
            {...register("image")}
            type="url"
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />

          <input
            {...register("title")}
            type="text"
            placeholder="Title"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />

          <input
            {...register("price")}
            type="number"
            placeholder="Price"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />

          <textarea
            {...register("description")}
            placeholder="Enter Description Here..."
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            rows="4"
          ></textarea>

          <input
            {...register("category")}
            type="text"
            placeholder="Category"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
          >
            Update Product
          </button>
          <button
          type="button"
            onClick={DeleteHandler}
            className="w-full bg-gradient-to-r from-red-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
          >
            Delete Product
          </button>
        </form>
        
      </div> }
      
    </>
  ) : "Loading"
}

export default ProductsDetails
