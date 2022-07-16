import { TAMBAH_JADWAL, TAMBAH_JADWAL_GAGAL } from "../actions/types";

const initialState = {
  jadwal: null,
  listJadwal: [],
  error:{},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TAMBAH_JADWAL:
      return {
        ...state,
        listJadwal: [payload, ...state.listJadwal],
        loading: false,
      };
    case TAMBAH_JADWAL_GAGAL:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}
