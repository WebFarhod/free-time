/* eslint-disable react-hooks/exhaustive-deps */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authActions";
import { ISignupFormValues } from "../interface/singup";
import { AppDispatch, RootState } from "../redux/store";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import TextComponent from "../components/text/TextComponent";
import LinkComponent from "../components/link/LinkComponent";

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
    <Container component="main" maxWidth="xs" className="">
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
        <TextComponent variant="h2">Ro'yxatdan o'tish</TextComponent>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 2 }}
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
                    required
                    variant="filled"
                    type="text"
                    autoComplete="firstName"
                    name="firstName"
                    color="secondary"
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
                    required
                    variant="filled"
                    type="text"
                    autoComplete="lastName"
                    name="lastName"
                    color="secondary"
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
                    variant="filled"
                    type="email"
                    margin="normal"
                    required
                    autoComplete="email"
                    name="email"
                    color="secondary"
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
            </Grid>
            {/* </Grid> */}
            <Grid item xs={12}>
              {isLoading ? (
                <Button
                  type="button"
                  fullWidth
                  disabled
                  color="secondary"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, gap: 5, mx: "auto" }}
                >
                  <CircularProgress color="info" size={20} />
                  loading
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  color="secondary"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ro'yxatdan o'tish
                </Button>
              )}
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent="end">
              <Link to={"/login"}>kl</Link>
              <LinkComponent link="/login">
                <TextComponent>Hisobingiz bormi? Kirish</TextComponent>
              </LinkComponent>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
