import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interface/user";

export interface AuthState {
  user: IUser;
  isLoading: boolean;
  loggedIn: boolean;
  error: string | null;
  state: string;
}

const initialState: AuthState = {
  user: {
    firstName: null,
    lastName: null,
    email: "",
    image: null,
    token: localStorage.getItem("token"),
  },
  isLoading: false,
  loggedIn: !!localStorage.getItem("token"),
  error: null,
  state: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    signUpUserSuccess(state, action: PayloadAction<{ email: string }>) {
      state.state = "verification";
      state.isLoading = false;
      state.user.email = action.payload.email;
    },
    // verificationUserSuccess(state, action: PayloadAction<IUser>) {
    //   state.state = "/";
    //   state.isLoading = false;
    //   state.user = action.payload;
    // },
    signUserSuccess(state, action: PayloadAction<IUser>) {
 
      state.isLoading = false;
      state.loggedIn = true;
      state.user.token = action.payload.token;
      state.user = action.payload;
      state.error = null;
      action.payload.token &&
        localStorage.setItem("token", action?.payload?.token);
    },
    signUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signUserStart,
  signUpUserSuccess,
  signUserSuccess,
  signUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
