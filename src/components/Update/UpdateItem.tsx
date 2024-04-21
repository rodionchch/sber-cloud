import {
  Box,
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { BaseType } from "utils/getData";
import getStatus from "./helpers/getStatus";
import { UpdateStatus } from "./Update.types";

type UpdateItemProps = {
  update: BaseType;
  checked: number[];
  onCheck: (value: number) => void;
  status: {
    [key: string]: string | ReturnType<typeof setTimeout>;
  };
};

const UpdateItem: React.FC<UpdateItemProps> = ({
  update,
  checked,
  onCheck,
  status,
}) => {
  const labelId = `checkbox-list-label-${update?.id}`;

  return (
    <ListItem key={update?.id} disablePadding>
      <ListItemButton
        onClick={() => {
          if (status?.[update?.id] !== UpdateStatus.DONE) {
            onCheck(update?.id);
          }
        }}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            disabled={status?.[update?.id] === UpdateStatus.DONE}
            checked={checked.indexOf(update?.id) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={update?.name}
          secondary={update?.description}
        />
        <Box
          sx={{ flex: "1 0 24px", display: "flex", justifyContent: "flex-end" }}
        >
          {getStatus(update?.id, status)}
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default UpdateItem;
