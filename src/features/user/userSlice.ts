import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers, deleteUserPersistencia } from "./services/user_services";

import { User } from "./models/user";
interface AsyncStateI {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  deletUserIsLoading: boolean;
  deleteUserIsError: boolean;
  delteUserIsSuccess: boolean;
}

interface UserState extends AsyncStateI {
  users: User[];
}

const initialState: UserState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  deletUserIsLoading: false,
  deleteUserIsError: false,
  delteUserIsSuccess: false,
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

export const delteUserPersistenciaAsyncThunk = createAsyncThunk(
  "delete_user_persistencia",
  async (numero_cedula: string) => {
    try {
      let datos = await deleteUserPersistencia(numero_cedula);
      console.log(datos);
      return datos;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    delete_user: (state, action: PayloadAction<{ numero_cedula: string }>) => {
      let data_ = state.users.filter(
        (elm) => elm.numero_cedula !== action.payload.numero_cedula
      );
      state.users = data_;
    },
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
      })
      .addCase(delteUserPersistenciaAsyncThunk.pending, (state) => {
        state.deletUserIsLoading = true;
      })
      .addCase(
        delteUserPersistenciaAsyncThunk.fulfilled,
        (
          state,
          action: PayloadAction<{ success: boolean; detail: string }>
        ) => {
          state.deletUserIsLoading = false;
          if (action.payload.success) {
            state.delteUserIsSuccess = true;
          }
        }
      )
      .addCase(
        delteUserPersistenciaAsyncThunk.rejected,
        (state, action: PayloadAction<{}>) => {
          state.deleteUserIsError = true;
        }
      );
  },
});

export const { delete_user } = userSlice.actions;

export default userSlice.reducer;
