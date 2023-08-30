import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissionsData = createAsyncThunk(
  'missions/fetchMission',
  async (_, thunkAPI) => {
    try {
      const response = await axios('https://api.spacexdata.com/v3/missions');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMissionsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissionsData.fulfilled, (state, action) => {
        state.isLoading = false;
        const fetchedData = [];
        action.payload.forEach((mission) => {
          const data = {
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            mission_description: mission.description,
          };
          fetchedData.push(data);
        });
        state.missions = fetchedData;
      })
      .addCase(fetchMissionsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default missionsSlice.reducer;
