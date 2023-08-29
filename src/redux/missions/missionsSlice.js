import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default missionsSlice.reducer;
