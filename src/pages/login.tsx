/* eslint-disable react-hooks/exhaustive-deps */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { ILoginFormValues } from "../interface/login";
import { login } from "../redux/actions/authActions";
import { useEffect } from "react";
import { CircularProgress, Container } from "@mui/material";
import LinkComponent from "../components/link/LinkComponent";
import TextComponent from "../components/text/TextComponent";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { control, handleSubmit } = useForm<ILoginFormValues>();
  const { isLoading, loggedIn } = useTypedSelector((state) => state.auth);

  const onSubmit = (data: ILoginFormValues) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          my: 8,
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
        <TextComponent variant="h2">Kirish</TextComponent>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 2 }}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Elektron pochta majburiy",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Noto'g'ri elektron pochta manzili",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                type="email"
                margin="normal"
                required
                id="email"
                label="Elektron pochta"
                autoComplete="email"
                name="email"
                autoFocus
                color="secondary"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Parol majburiy" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                type="password"
                margin="normal"
                required
                id="password"
                autoComplete="current-password"
                name="password"
                label="Parol"
                color="secondary"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          {isLoading ? (
            <Button
              type="button"
              fullWidth
              disabled
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2, gap: 5, mx: "auto" }}
            >
              <CircularProgress size={20} />
              loading
            </Button>
          ) : (
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Kirish
            </Button>
          )}
          <Grid item xs={12} display={"flex"} justifyContent="end">
            <LinkComponent link="/register">
              <TextComponent>Ro'yxatdan o'ting</TextComponent>
            </LinkComponent>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
