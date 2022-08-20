import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILS,
} from "../constants/productConstant";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_REQUEST":
      return { loading: true, products: [] };
    case "ADD_PRODUCT_SUCCESS":
      return { loading: false, products: action.payload };
    case "ADD_PRODUCT_FAILS":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PRODUCTBYID_REQUEST":
      return { loading: true, ...state };
    case "GET_PRODUCTBYID_SUCCESS":
      return { loading: false, product: action.payload };
    case "GET_PRODUCTBYID_FAILS":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
