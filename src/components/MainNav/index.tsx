import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Container, Typography, css } from "@mui/material";
import UserPopover from "../UserPopover";
import { usePopover } from "components/UserPopover/usePopover";
import { ReactComponent as Logo } from "assets/images/logo.svg";

/** @jsxImportSource @emotion/react */

const MainNav = () => {
  const navigate = useNavigate();
  const userPopover = usePopover<HTMLDivElement>();

  return (
    <>
      <Box
        component="header"
        sx={{
          borderBottom: "1px solid var(--mui-palette-divider)",
          backgroundColor: "#191919",
          position: "sticky",
          top: 0,
          zIndex: "100",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "64px",
              px: 2,
            }}
          >
            <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
              <Box
                onClick={() => navigate("/")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Logo
                  css={css`
                    width: 112px;
                    margin-right: 6px;
                  `}
                />
                <Typography variant="h5" fontWeight={500}>
                  Cloud
                </Typography>
              </Box>
            </Stack>
            <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
              <Avatar
                onClick={userPopover.handleOpen}
                ref={userPopover.anchorRef}
                src="/assets/avatar.png"
                sx={{ cursor: "pointer" }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <UserPopover
        anchorEl={userPopover.anchorRef.current}
        onClose={userPopover.handleClose}
        open={userPopover.open}
      />
    </>
  );
};

export default MainNav;
