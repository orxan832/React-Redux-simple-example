import { INCREMENT } from "../actions/contants";
import { DECREMENT } from "../actions/contants";

const initialState = {
  count: 0
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};
