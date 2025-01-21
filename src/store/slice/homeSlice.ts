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

      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const homeSlice = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCountryApi.pending, (state, action) => {});
    builder.addCase(fetchAllCountryApi.fulfilled, (state, action) => {});
    builder.addCase(fetchAllCountryApi.rejected, (state, action) => {});
  },
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
