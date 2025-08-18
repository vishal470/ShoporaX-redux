import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-center p-6">
      <h1 className="text-6xl font-extrabold text-indigo-600 drop-shadow-lg">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <NavLink
        to="/"
        className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold shadow-md hover:from-indigo-600 hover:to-purple-700 transition"
      >
        Go Back Home
      </NavLink>
    </div>
  )
}

export default PageNotFound
