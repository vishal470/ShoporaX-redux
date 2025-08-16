import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { asynclogoutuser } from '../store/actions/userAction';

const Nav = () => {

    const user = useSelector((state) => state.userReducer.users);

    const dispatch = useDispatch();

    const LogoutHandler = () => {
        dispatch(asynclogoutuser());
    }
    return (
        <nav className="flex justify-center items-center gap-x-6 p-8 bg-gray-800 text-white shadow-md">
            <NavLink
                to="/"
                className="hover:text-yellow-400 transition"
            >
                Home
            </NavLink>
            <NavLink
                to="/products"
                className="hover:text-yellow-400 transition"
            >
                Products
            </NavLink>

            {/* | Main Part | */}

            {
                user ? (
                    <>
                        <NavLink
                            to="/admin/create-product"
                            className="hover:text-yellow-400 transition"
                        >
                            Create-Product
                        </NavLink>
                        <button onClick={LogoutHandler}>Log Out</button>
                    </>

                ) : (
                    <>
                        <NavLink
                            to="/login"
                            className="hover:text-yellow-400 transition"
                        >
                            Login
                        </NavLink>
                    </>
                )
            }

        </nav>
    )
}

export default Nav
