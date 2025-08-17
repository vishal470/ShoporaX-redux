import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../store/actions/userAction';

const UserProfile = () => {

  const user = useSelector((state) => state.userReducer.users);

  // FORM
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    }
  });

  const UpdateUserHandler = (item) => {
    console.log(item)
    dispatch(asyncupdateuser(user.id, item));
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(user.id));
    // navigate("/login");
  }

  const LogoutHandler=()=>{
    dispatch(asynclogoutuser());
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-600">
        User not found
      </div>
    );
  }


  return user ? (
    <div className=" flex justify-center items-center min-h-screen min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <form
        onSubmit={handleSubmit(UpdateUserHandler)}
        className="w-full max-w-2xl bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Update User</h2>

        <input
          {...register("username")}
          type="text"
          placeholder="Username"
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
        />

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
        >
          Update User
        </button>
        <button
          type="button"
          onClick={DeleteHandler}
          className="w-full bg-gradient-to-r from-red-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
        >
          Delete User
        </button>

        <button
          type="button"
          onClick={LogoutHandler}
          className="w-full bg-gradient-to-r from-red-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
        >
          Logout User
        </button>
      </form>

    </div>
  ) : "Loading..."
}

export default UserProfile
