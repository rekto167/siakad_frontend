import { CREATE_CLASS_FAIL, CREATE_CLASS_SUCCESS } from "../actions/types";

const initialState = {
  classes: [],
  class: null,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_CLASS_SUCCESS:
      return {
        ...state,
        classes: [payload, ...state.classes],
        loading: false,
      };
    case CREATE_CLASS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
