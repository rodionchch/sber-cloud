import { Box, Container, Grid } from "@mui/material";
import Dashboard from "components/Dashboard";
import MainNav from "components/MainNav";
import SideNav from "components/SideNav";

const Home = () => {
  return (
    <Box>
      <MainNav />

      <Container maxWidth="lg" sx={{ py: "22px", display: "flex" }}>
        <Grid container>
          <Grid lg={3} >
            <SideNav />
          </Grid>
          <Grid lg={9}>
            <Dashboard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
