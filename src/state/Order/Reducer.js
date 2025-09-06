import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";

const initialState = {
  orders: [],
  order: null,
  error: null,
  loading: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { loading: true, error: null, ...state };
    case CREATE_ORDER_SUCCESS:
      return { loading: false, error: null, order: action.payload };
    case CREATE_ORDER_FAILURE:
      return { loading: false, error: action.payload };
    case GET_ORDER_BY_ID_REQUEST:
      return { loading: true, ...state };
    case GET_ORDER_BY_ID_SUCCESS:
      return { loading: false, error: null, order: action.payload };
    case GET_ORDER_BY_ID_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
