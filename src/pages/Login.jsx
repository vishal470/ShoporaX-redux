import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch = useDispatch();

  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const navigate=useNavigate();
  
  const LoginHandler = (user) => {
    user.id = nanoid();
    dispatch(asyncloginuser(user));
    // navigate('/')
  }



  return (
    <div className=" flex justify-center items-center min-h-screen min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <form onSubmit={handleSubmit(LoginHandler)} className="flex flex-col w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4">
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
          Login
        </button>
        <p>Don't have account? </p>
        <Link className="text-blue-500 hover:text-blue-900" to={"/register"}>Register</Link>
      </form>
    </div>
  );
};

export default Login;
