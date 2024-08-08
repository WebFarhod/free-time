/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import AuthCode, { AuthCodeRef } from "react-auth-code-input";
import "./verification.css";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { verification } from "../redux/actions/authActions";
import { VerificationFormValues } from "../interface/verification";
import { useNavigate } from "react-router-dom";
import TextComponent from "../components/text/TextComponent";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function Verification() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, loggedIn, user } = useTypedSelector((state) => state.auth);

  const AuthInputRef = useRef<AuthCodeRef>(null);

  const [data, setData] = useState<string>("");
  const handleOnChange = (res: string) => {
    setData(res);
  };

  const onSubmit = async () => {
    const resdata: VerificationFormValues = {
      email: user?.email,
      code: data,
    };
    await dispatch(verification(resdata));
    AuthInputRef.current?.clear();
  };

  useEffect(() => {
    AuthInputRef.current?.focus();
    if (user.email == "") {
      navigate("/register");
    }
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  return (
    <Container component="main" maxWidth="xs" className="">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sizes="20"
          sx={{ m: 1, bgcolor: "secondary.main", width: 70, height: 70 }}
        >
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <TextComponent variant="h2">Ro'yxatdan o'tish</TextComponent>

        <Box sx={{ mt: 3 }}>
          <AuthCode
            autoFocus={false}
            onChange={handleOnChange}
            ref={AuthInputRef}
            containerClassName="authCodeInputContainer"
            inputClassName="authCodeInput"
          />
        </Box>
        {isLoading ? (
          <Button
            type="button"
            fullWidth
            color="secondary"
            disabled
            variant="contained"
            sx={{ mt: 3, mb: 2, gap: 5, mx: "auto" }}
          >
            <CircularProgress size={20} />
            loading
          </Button>
        ) : (
          <Button
            type="submit"
            fullWidth
            color="secondary"
            disabled={data.length != 6}
            variant="contained"
            onClick={() => onSubmit()}
            sx={{ mt: 3, mb: 2 }}
          >
            tasdiqlash
          </Button>
        )}
      </Box>
    </Container>
  );
}
