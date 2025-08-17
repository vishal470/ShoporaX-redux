// import axios from "../api/axiosconfig";
// import { loaduser } from "./userSlice";

import { loaduser, removeuser } from "../reducers/userSlice";l
import axios from "../../api/axiosconfig" 



export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch(loaduser(user))
        }
        else {
            console.log("User Not Logged In")
        }
    } catch (error) {
        console.log(error)
    }

}

export const asynclogoutuser = (user) => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeuser());
        console.log("User Logged Out!");
    } catch (error) {
        console.log(error)
    }

}

export const asyncloginuser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        );
        // const res=axios.post("/users",user);
        console.log(data[0])
        localStorage.setItem("user", JSON.stringify(data[0]));
    } catch (error) {
        console.log(error)
    }
}


export const asyncregisteruser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user);
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}


export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch("/users/" + id, user);
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
        console.log(error)
    }
}


export const asyncdeleteuser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/users/" + id); 
        dispatch(asynclogoutuser());
    } catch (error) {
        console.error("Error updating product:", error);
    }
};


// // thunk function
// export const asyncgetUsers = () => async (dispatch) => {
//   try {
//     const res = await axios.get("/users");
//     console.log(res.data[0]); // debug log
//     dispatch(loaduser(res.data)); // now updating store
//   } catch (error) {
//     console.log(error);
//   }
// };
