import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../store/actions/userAction';

const UserProfile = () => {

  const user = useSelector((state) => state.userReducer.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    }
  });

  const UpdateUserHandler = (item) => {
    dispatch(asyncupdateuser(user.id, item));
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(user.id));
    navigate("/");
  }

  const LogoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/");
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-600">
        User not found
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* User Info Card */}
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center space-y-4 w-full max-w-sm">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
            {user.username?.charAt(0).toUpperCase()}
          </div>

          {/* User Details */}
          <h1 className="text-2xl font-bold text-gray-800">{user.username}</h1>
          <h1 className="text-lg text-gray-600">{user.email}</h1>

          {/* Logout Button */}
          <button
            type="button"
            onClick={LogoutHandler}
            className="w-full mt-4 bg-gradient-to-r from-red-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-red-600 hover:to-indigo-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Admin Update Form */}
        {user?.isAdmin && (
          <form
            onSubmit={handleSubmit(UpdateUserHandler)}
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6 w-full max-w-md"
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

            {/* Update Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
            >
              Update User
            </button>

            {/* Delete Button */}
            <button
              type="button"
              onClick={DeleteHandler}
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-md hover:from-red-600 hover:to-pink-700 transition"
            >
              Delete User
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default UserProfile
