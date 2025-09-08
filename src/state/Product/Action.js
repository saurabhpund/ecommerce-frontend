import {api} from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_BY_ID_FAILURE, FIND_PRODUCTS_BY_ID_REQUEST, FIND_PRODUCTS_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) =>{
    dispatch({type: FIND_PRODUCTS_REQUEST});
    const {colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize} = reqData;
    try{
        const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
        dispatch({type: FIND_PRODUCTS_SUCCESS, payload: data});
    }catch(err){
        dispatch({type: FIND_PRODUCTS_FAILURE, payload: err.message});
    }
}

export const findProductsById = (reqData) => async (dispatch) =>{
    dispatch({type: FIND_PRODUCTS_BY_ID_REQUEST});
    const {productid} = reqData;
    try{
        const {data} = await api.get(`/api/products/id/${productid}`);
        dispatch({type: FIND_PRODUCTS_BY_ID_SUCCESS, payload: data});
    }catch(err){
        dispatch({type: FIND_PRODUCTS_BY_ID_FAILURE, payload: err.message});
    }
}

export const createProduct = (reqData) => async(dispatch) =>{
    try{
        dispatch({type: CREATE_PRODUCT_REQUEST});
        const {data} = await api.post("/api/admin/products/", reqData.data);
        console.log("Data: ", data)
        dispatch({type: CREATE_PRODUCT_SUCCESS, payload: data});
    }catch(err){
        dispatch({type: CREATE_PRODUCT_FAILURE, payload: err.message});
    }
}

export const deleteProduct = (reqData) => async(dispatch) =>{
    try{
        dispatch({type: DELETE_PRODUCT_REQUEST});
        const {data} = await api.delete(`/api/admin/products/${reqData}`);
        console.log("Product Delete: ", data);
        dispatch({type: DELETE_PRODUCT_SUCCESS, payload: data});
    }catch(err){
        dispatch({type: DELETE_PRODUCT_FAILURE, payload: err.message});
    }
}