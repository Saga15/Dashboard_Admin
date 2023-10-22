import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data: [],
    isSuccess: false,
    message: "",
    loading: false,
  }
 export const getQuotes = createAsyncThunk(
  "user/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteQuotes = createAsyncThunk(
  "post/deleteQuotes",
  async (arg, { dispatch, getState }) => {
    // console.log();
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${arg}`
    );
    // dispatch(getQuotes());
    return response.data;
  }
);

export const postQuotes = createAsyncThunk(
    "user/getData",
    async (arg, { rejectWithValue }) => {
      try {
        const { data } = await axios.post("https://jsonplaceholder.typicode.com/posts",);
        return data;
      } catch (error) {
        rejectWithValue(error.response.data);
      }
    }
  );





const userSlice = createSlice({
  name: "user",
  initialState : initialState,
  reducers: {},
  extraReducers: {
    [getQuotes.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getQuotes.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.data = payload;
      state.isSuccess = true;

    },
    [getQuotes.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false
    },
  },
});
export default userSlice.reducer;