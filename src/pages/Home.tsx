import { Button } from "@mui/material";
import { useAuth } from "hooks/useAuth";

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <Button variant="contained" onClick={auth?.onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
