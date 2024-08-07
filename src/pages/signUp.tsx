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
import { register } from "../redux/actions/authActions";
import { ISignupFormValues } from "../interface/singup";
import { AppDispatch, RootState } from "../redux/store";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

const defaultTheme = createTheme();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function SignupPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, state, loggedIn } = useTypedSelector(
    (state) => state.auth
  );

  const { control, handleSubmit } = useForm<ISignupFormValues>();

  const onSubmit = (data: ISignupFormValues) => {
    dispatch(register(data));
  };
  useEffect(() => {
    if (state == "verification") {
      navigate("/verification");
    }
    if (loggedIn) {
      navigate("/");
    }
  }, [state, loggedIn]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className="">
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
            Ro'yxatdan o'tish
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Ism majburiy" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="firstName"
                      label="Ism"
                      autoFocus
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Familiya majburiy" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="lastName"
                      label="Familiya"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
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
                      id="email"
                      label="Elektron pochta"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Parol majburiy" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="password"
                      label="Parol"
                      type="password"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              {/* </Grid> */}
              <Grid item xs={12}>
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
                    Ro'yxatdan o'tish
                  </Button>
                )}
              </Grid>
              <Grid item xs={12} display={"flex"} justifyContent="end">
                <Link to="/login">Hisobingiz bormi? Kirish</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
