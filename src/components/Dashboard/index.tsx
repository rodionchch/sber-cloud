import { Box } from "@mui/material";
import DashboardCard from "./DashboardCard";
import { useAuth } from "hooks/useAuth";
import { getData } from "utils/getData";

const Dashboard = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        px: "12px",
        marginRight: "10px",
        flexWrap: "wrap",
        justifyContent: { xs: "center", lg: "flex-start" },
      }}
    >
      {getData(auth?.user)?.servers?.map((server) => (
        <Box
          key={server.id}
          sx={{
            flex: "1 0 276px",
            maxWidth: 276,
            padding: "0 10px 20px",
          }}
        >
          <DashboardCard {...server} />
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;
