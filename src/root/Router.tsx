import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Login from "pages/Login";
import { AuthProvider } from "hooks/useAuth";
import ProtectedRoute from "./ProtectedRoute";

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
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default Router;
