import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILS,
} from "../constants/productConstant";
import swal from "sweetalert";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.post("/api/products/deleteproduct", { id });
    swal("Product deleted Successfully");
    window.location.href = "/admin/productlist";
    console.log(res);
  } catch (error) {
    swal("Error while deleting product");
  }
};

export const addProduct = (product) => async (dispatch) => {
  dispatch({ type: "ADD_PRODUCT_REQUEST" });
  try {
    const response = await axios.post("/api/products/addproduct", { product });
    console.log(response);
    swal("Product added Successfully");
    // window.location.href = "/admin/productlist";
    dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ADD_PRODUCT_FAILS", payload: error });
    swal("Error while adding product");
  }
};
export const getProductById = (id) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID_REQUEST" });
  try {
    const response = await axios.post("/api/products/getproductbyid", { id });
    console.log(response);
    dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTBYID_FAILS", payload: error });
  }
};
