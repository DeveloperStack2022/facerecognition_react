import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user_persistenciaI } from "features/user_persistencia/models/user_persistencia";
import { getUserPersistencia as getUserPersistencia_ } from "features/user_persistencia/services/user_persistencia_service";

interface AsyncStateI {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface UserState extends AsyncStateI {
  user_persistencia: user_persistenciaI;
  user_array: user_persistenciaI[];
}

const initialState: UserState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  user_persistencia: {
    numero_cedula: "",
    image_base64: "",
    nombres: "",
  },
  user_array: [
    {
      numero_cedula: "",
      image_base64: "",
      nombres: "",
      anio_ins_nacimiento: "",
      calles_domicilio: "",
      codigo_dactilar: "",
      conyuge: "",
      doble_nacionalidad: "",
    },
  ],
};

export const getUserPersisitencia = createAsyncThunk(
  "user_persistencia",
  async (numero_cedula: string) => {
    try {
      let datos = await getUserPersistencia_(numero_cedula);
      return datos;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userPersistenciaSlice = createSlice({
  name: "user_persistencia",
  initialState: initialState,
  reducers: {
    user_persistencia: (state, action: PayloadAction<user_persistenciaI>) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserPersisitencia.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getUserPersisitencia.fulfilled,
        (
          state,
          action: PayloadAction<{
            success: boolean;
            payload: user_persistenciaI;
          }>
        ) => {
          console.log(action);
          state.isLoading = false;
          if (action.payload.success) {
            state.isSuccess = true;
            state.user_persistencia = action.payload.payload;
            state.user_array.push(state.user_persistencia);
          }
        }
      )
      .addCase(getUserPersisitencia.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.user_persistencia = {
          numero_cedula: "",
          image_base64: "",
          nombres: "",
        };
      });
  },
});

export const {} = userPersistenciaSlice.actions;
export default userPersistenciaSlice.reducer;
