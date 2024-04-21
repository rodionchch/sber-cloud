import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useAuth } from "hooks/useAuth";
import { Logout } from "@mui/icons-material";
import { getData } from "utils/getData";

type UserPopoverProps = {
  anchorEl: Element | null;
  onClose: () => void;
  open: boolean;
};

const UserPopover = ({ anchorEl, onClose, open }: UserPopoverProps) => {
  const auth = useAuth();

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      onClose={onClose}
      open={open}
      slotProps={{ paper: { sx: { width: "240px" } } }}
    >
      <Box sx={{ p: "16px 20px " }}>
        <Typography variant="subtitle1">
          {getData(auth?.user)?.user?.name}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {getData(auth?.user)?.user?.email}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        sx={{ p: "8px", "& .MuiMenuItem-root": { borderRadius: 1 } }}
      >
        <MenuItem onClick={auth?.onLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Выйти
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

export default UserPopover;
