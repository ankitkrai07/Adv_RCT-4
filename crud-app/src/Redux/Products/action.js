import axios from "axios";
import {
  POST_PRODUCT_SUCCESS,
  PROCUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionType";

export const postProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/products", newProduct)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: PROCUCT_FAILURE, payload: err.message });
      console.log(err);
    });
};

//Get Products
export const getproducts = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios.get("http://localhost:8080/products").then();
};

const productRequest = () => {
  return { type: GET_PRODUCT_REQUEST };
};
const productSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};
const productFailure = () => {
  return { type: GET_PRODUCT_FAILURE };
};

// export const getProducts = (objParam) => (dispatch) => {
//   dispatch(productRequest());
//   axios
//     .get(`http://localhost:8080/products`, objParam)
//     .then((res) => {
//       dispatch(productSuccess(res.data));
//       return res.data;
//     })
//     .catch(() => {
//       dispatch(productFailure());
//     });
// };
