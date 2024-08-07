import "./App.css";
import Snackbar from "./components/snackbar/Snankbar";
import Router from "./routes/section";
// import {
//   Alert,
//   Button,
//   IconButton,
//   Snackbar,
//   SnackbarCloseReason,
// } from "@mui/material";
// import { useState } from "react";

function App() {
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (
  //   event: React.SyntheticEvent | Event,
  //   reason?: SnackbarCloseReason
  // ) => {
  //   console.log("====================================");
  //   console.log(reason);
  //   console.log("====================================");
  //   // if (reason === "clickaway") {
  //   //   return;
  //   // }

  //   setOpen(false);
  // };

  // const action = (
  //   <IconButton
  //     size="small"
  //     aria-label="close"
  //     color="inherit"
  //     onClick={handleClose}
  //   >
  //     <CloseIcon fontSize="small" />
  //   </IconButton>
  // );
  return (
    <>
      <Snackbar />
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}

      <Router />
      {/* <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => handleClose()}
        message="This Snackbar will be dismissed in 5 seconds."
        action={action}
      /> */}
    </>
  );
}

export default App;
