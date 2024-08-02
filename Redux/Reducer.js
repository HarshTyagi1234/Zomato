import { ADD_TO_CART, REMOVE_TO_CART } from "../Components/Constant";

const intialState = [];

export const reducer = (state = intialState, action) => {
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
    default:
      return state;
  }
};
