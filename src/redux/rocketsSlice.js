import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchRocketsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRocketsSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchRocketsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    reserveRocket: (state, action) => {
      const id = action.payload;
      const newState = state.data.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      state.data = newState;
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      const newState = state.data.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
      state.data = newState;
    },
  },
});

export const {
  fetchRocketsStart, fetchRocketsSuccess, fetchRocketsFailure, reserveRocket, cancelReservation,
} = rocketsSlice.actions;

export const fetchRockets = () => async (dispatch) => {
  try {
    dispatch(fetchRocketsStart());

    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    const rocketsData = response.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      type: rocket.type,
      flickr_images: rocket.flickr_images,
      reserved: false,
    }));

    dispatch(fetchRocketsSuccess(rocketsData));
  } catch (error) {
    dispatch(fetchRocketsFailure(error.message));
  }
};

export default rocketsSlice.reducer;
