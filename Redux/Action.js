import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  DELETE_TO_CART,
} from "../Components/Constant";

export function add_To_Cart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function remove_To_Cart(id) {
  return {
    type: REMOVE_TO_CART,
    data: id,
  };
}

export function delete_To_Cart(id) {
  return {
    type: DELETE_TO_CART,
    data: id,
  };
}
