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
          <Grid sm={3} xs={0}>
            <SideNav />
          </Grid>
          <Grid sm={9} xs={12}>
            <Dashboard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
