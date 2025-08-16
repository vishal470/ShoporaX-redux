import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

const Register = () => {

  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin=false;
    dispatch(asyncregisteruser(user));
    navigate("/login")
  }

  return (
    <div className=" flex justify-center items-center min-h-screen min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <form onSubmit={handleSubmit(RegisterHandler)} className="flex flex-col w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4">
        <input
          {...register("username")}
          type="text"
          placeholder="John Doe"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="jhondoe@gmail.com"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>
        <p>Already Have An Account </p>
        <Link className="text-blue-500 hover:text-blue-900" to={"/login"}>Login</Link>
      </form>
    </div>
  )
}

export default Register
