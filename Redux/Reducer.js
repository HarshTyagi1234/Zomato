import {
  ADD_TO_CART,
  DELETE_TO_CART,
  REMOVE_TO_CART,
} from "../Components/Constant";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    case REMOVE_TO_CART:
      let removed = false;
      return state.filter((product) => {
        if (removed === true) {
          return true;
        }

        if (product.id === action.data) {
          removed = true;
          return false;
        }
        return true;
      });

    case DELETE_TO_CART:
      return state.filter((product)=> product.id != action.data);
    default:
      return state;
  }
};
