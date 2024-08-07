/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppThunk } from "../store";
import {
  signUserStart,
  signUpUserSuccess,
  signUserFailure,
  signUserSuccess
} from "../slices/authSlice";
import axiosInstance from "../../service/api";
import { ISignupFormValues } from "../../interface/singup";
import { enqueueSnackbar } from "../slices/snackbar";
import { VerificationFormValues } from "../../interface/verification";
import { ILoginFormValues } from "../../interface/login";

export const register =
  (data: ISignupFormValues): AppThunk =>
  async (dispatch) => {
    dispatch(signUserStart());
    try {
      const response = await axiosInstance.post("/auth/register", data);
      dispatch(
        enqueueSnackbar({
          message: response.data?.message,
          options: { variant: "success" },
        })
      );
      dispatch(signUpUserSuccess({ email: data.email }));
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      // const errorStatus = error.response?.status || "Unknown status";

      dispatch(
        enqueueSnackbar({
          message: errorMessage,
          options: { variant: "error" },
        })
      );

      dispatch(signUserFailure(errorMessage));
    }
  };

export const verification =
  (data: VerificationFormValues): AppThunk =>
  async (dispatch) => {
    dispatch(signUserStart());
    try {
      const response = await axiosInstance.post("/auth/verification", data);
      dispatch(
        enqueueSnackbar({
          message: response.data?.message,
          options: { variant: "success" },
        })
      );
      dispatch(signUserSuccess(response.data.object));
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;

      dispatch(
        enqueueSnackbar({
          message: errorMessage,
          options: { variant: "error" },
        })
      );
      dispatch(signUserFailure(errorMessage));
    }
  };

export const login =
  (data: ILoginFormValues): AppThunk =>
  async (dispatch) => {
    dispatch(signUserStart());
    try {
      const response = await axiosInstance.post("/auth/login", data);
      dispatch(
        enqueueSnackbar({
          message: response.data?.message,
          options: { variant: "success" },
        })
      );
      dispatch(signUserSuccess(response.data.object));
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;

      dispatch(
        enqueueSnackbar({
          message: errorMessage,
          options: { variant: "error" },
        })
      );
      dispatch(signUserFailure(errorMessage));
    }
  };
