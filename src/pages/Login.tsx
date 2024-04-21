import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import { css } from "@emotion/react";
import { SyntheticEvent, useState } from "react";
import { useAuth } from "hooks/useAuth";
import { getData } from "utils/getData";
import { Navigate } from "react-router-dom";

/** @jsxImportSource @emotion/react */

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    login: false,
    password: false,
  });
  const auth = useAuth();

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (login && password) {
      const user = getData(login)?.user;

      if (login === user?.login && password === user?.password) {
        await auth?.onLogin({ login });

        console.log({
          login: login,
          password: password,
        });
      } else {
        alert("Неверный логин или пароль");
        setPassword("");
      }
    }

    setError({ login: !login, password: !password });
  };

  const clearError = () => {
    setError({
      login: false,
      password: false,
    });
  };

  if (auth?.user) {
    return <Navigate to="/" />;
  }

  return (
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
        <Logo
          css={css`
            max-width: 300px;
            margin-bottom: 32px;
          `}
        />

        <Typography component="h1" variant="h5">
          Вход в Cloud
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Логин"
            name="login"
            autoComplete="login"
            autoFocus
            value={login}
            error={error?.login}
            onChange={(e) => {
              clearError();
              setLogin(e.target.value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            error={error?.password}
            onChange={(e) => {
              clearError();
              setPassword(e.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти в панель управления
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
