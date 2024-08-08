import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Snackbar from "./components/snackbar/Snankbar";
import Router from "./routes/section";
import { ColorModeContext, useMode } from "./theme";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Snackbar />
        <Router />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
