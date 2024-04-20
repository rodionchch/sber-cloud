import { CssBaseline } from "@mui/material";
import Router from "./Router";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Router />
    </>
  );
};

export default App;
