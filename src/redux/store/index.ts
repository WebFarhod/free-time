import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import snackbarReducer from "../slices/snackbar";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbars: snackbarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
