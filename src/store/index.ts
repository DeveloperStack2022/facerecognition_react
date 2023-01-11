import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/user/userSlice";
import UserSlicePersistencia from "features/user_persistencia/user_persistenciaSlice";
export const store = configureStore({
  reducer: {
    users: UserSlice,
    user_persistencia: UserSlicePersistencia,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
