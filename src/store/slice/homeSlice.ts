import { getAxiosInstance } from "@/api/apiConfig";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialStateType = {
  countryData: any[];
};

const initialState: InitialStateType = {
  countryData: [],
};

export const fetchAllCountryApi = createAsyncThunk(
  "homeReducer/fetchAllCountryApi",
  async (params: any, { rejectWithValue }) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.get("all", { params });

      return response;
    } catch (error: any) {
      return rejectWithValue(error?.response);
    }
  }
);

export const homeSlice = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCountryApi.pending, (state, action) => {});
    builder.addCase(fetchAllCountryApi.fulfilled, (state, action) => {
      state.countryData = action.payload.data;
    });
    builder.addCase(fetchAllCountryApi.rejected, (state, action) => {});
  },
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
