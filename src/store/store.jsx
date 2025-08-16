// import { configureStore } from '@reduxjs/toolkit'
// import userSlice from './userSlice'

import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/userSlice'
import productSlice from './reducers/productsSlice'
import cartSlice from './reducers/cartsSlice'



// export const store = configureStore({
//     reducer: {
//         user: userSlice
//     },
// })

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productsReducer: productSlice,
        cartsReducer: cartSlice
    }
})
