// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   data: [],
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     loaduser: (state, action) => {
//       state.data = action.payload; // store the fetched data
//     },
//   },
// });

// export const { loaduser } = userSlice.actions;
// export default userSlice.reducer;


const initialState = {
    users: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            state.users = action.payload;
        },
        removeuser: (state, action) => {
            state.users = null;
        }
    }
})

export default userSlice.reducer;
export const { loaduser, removeuser } = userSlice.actions;
