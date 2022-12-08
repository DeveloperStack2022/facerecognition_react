import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "./services/user_services";

import { User } from "./models/user";
interface AsyncStateI {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface UserState extends AsyncStateI {
  users: [];
}

const initialState: UserState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  users: [],
};

export const getProducts = createAsyncThunk("users", async () => {
  try {
    let datos = await getUsers();
    return datos;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    users: (state, action: PayloadAction<User>) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload?.payload || [];
      })
      .addCase(getProducts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.users = [];
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
