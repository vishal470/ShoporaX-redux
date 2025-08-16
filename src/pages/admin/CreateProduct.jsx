import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/actions/productAction";

const CreateProduct = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();



    const CreateProductHandler = (product) => {
        product.id = nanoid();
        console.log(product)
        dispatch(asynccreateproduct(product));
        navigate("/products")
        reset();
    }

    return ( 
        <div className=" flex justify-center items-center min-h-screen min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
            <form onSubmit={handleSubmit(CreateProductHandler)} className="flex flex-col w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4">
                <input
                    {...register("image")}
                    type="url"
                    placeholder="Image URL"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    {...register("title")}
                    type="text"
                    placeholder="Title"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    {...register("price")}
                    type="number"
                    placeholder="Price"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("description")}
                    placeholder="Enter Description Here...">

                </textarea>
                <input
                    {...register("category")}
                    type="text"
                    placeholder="Category"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Create Product
                </button>

            </form>
        </div>
    )
}

export default CreateProduct
