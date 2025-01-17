import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

import App from "./root/App";
import { store } from "store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const darkMode = true;

const darkTheme = createTheme({
  palette: {
    mode: darkMode ? "dark" : "light",
    primary: {
      main: "#148f2b",
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiLocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </MuiLocalizationProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
