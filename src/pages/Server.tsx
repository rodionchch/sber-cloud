import { Box, Container, Grid } from "@mui/material";
import MainNav from "components/MainNav";
import SideNav from "components/SideNav";
import Update from "components/Update";

const Server = () => {
  return (
    <Box>
      <MainNav />

      <Container maxWidth="lg" sx={{ py: "22px", display: "flex" }}>
        <Grid container>
          <Grid sm={3} xs={0}>
            <SideNav />
          </Grid>
          <Grid sm={9} xs={12}>
            <Update />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Server;
