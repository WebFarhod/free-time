/* eslint-disable react-hooks/exhaustive-deps */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { ILoginFormValues } from "../interface/login";
import { login } from "../redux/actions/authActions";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const defaultTheme = createTheme();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { control, handleSubmit } = useForm<ILoginFormValues>();
  const { isLoading, loggedIn } = useTypedSelector((state) => state.auth);

  const onSubmit = (data: ILoginFormValues) => {
    dispatch(login(data));
    // navigate("/");
  };
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kirish
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
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
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Elektron pochta"
                  autoComplete="email"
                  autoFocus
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
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Parol"
                  type="password"
                  id="password"
                  autoComplete="current-password"
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
                sx={{ mt: 3, mb: 2, gap: 5, mx: "auto" }}
              >
                <CircularProgress size={20} />
                loading
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Kirish
              </Button>
            )}
            <Grid container spacing={5}>
              <Grid item>
                <Link to="#">Parolni unutdingizmi?</Link>
              </Grid>
              <Grid item>
                <Link to="/register">Ro'yxatdan o'ting</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
