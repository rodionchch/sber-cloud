import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Server from "pages/Server";
import Login from "pages/Login";
import ProtectedRoute from "./ProtectedRoute";

import { AuthProvider } from "hooks/useAuth";

const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="server/:id"
          element={
            <ProtectedRoute>
              <Server />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default Router;
