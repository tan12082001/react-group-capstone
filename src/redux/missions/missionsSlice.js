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
  reducers: {
    joinMission: (state, action) => {
      const newState = state.missions.map((mission) => (mission.missionId === action.payload
        ? ({ ...mission, missionJoin: true })
        : mission));
      state.missions = newState;
    },
  },
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
            missionId: mission.mission_id,
            missionName: mission.mission_name,
            missionDescription: mission.description,
            missionJoin: false,
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

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
