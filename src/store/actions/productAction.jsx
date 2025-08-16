import axios from "../../api/axiosconfig"
import { loadproduct } from "../reducers/productsSlice";


export const asyncloadproduct = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/products");
        dispatch(loadproduct(data));
    }
    catch (error) {
        console.log(error)
    }

}


export const asynccreateproduct = (product) => async (dispatch, getState) => {
    try {
        await axios.post("/products", product);
        dispatch(asyncloadproduct())
    } catch (error) {
        console.log(error)
    }

}


export const asyncupdateproduct = (id,product) => async (dispatch, getState) => {
    try {
        await axios.patch("/products/" + id, product); // send product data in body
        dispatch(asyncloadproduct()); // refresh products after update
    } catch (error) {
        console.error("Error updating product:", error);
    }
};


export const asyncdeleteproduct = (id,product) => async (dispatch, getState) => {
    try {
        await axios.delete("/products/" + id); 
        dispatch(asyncloadproduct()); // refresh products after update
    } catch (error) {
        console.error("Error updating product:", error);
    }
};

