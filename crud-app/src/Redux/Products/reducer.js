import {
  POST_PRODUCT_SUCCESS,
  PROCUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "./actionType";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: "",
};

//Post Products
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case PROCUCT_FAILURE:
      return { ...state, isLoading: false, isError: true, error: payload };
    case POST_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    default:
      return state;
  }
};

//Get Products

export const getReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, products: payload, isLoading: false };
    case GET_PRODUCT_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
