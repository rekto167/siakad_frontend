import { ADD_MAPEL, ADD_MAPEL_FAIL } from "../actions/types";

const initialState = {
  mapel: null,
  listMapel: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_MAPEL:
      return {
        ...state,
        mapel: payload,
        loading: false,
      };
    case ADD_MAPEL_FAIL:
      return {
        ...state,
        mapel: null,
        loading: false,
      };
    default:
      return state;
  }
}
