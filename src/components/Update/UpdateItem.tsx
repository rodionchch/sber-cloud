import {
  Box,
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
} from "@mui/material";
import { format } from "date-fns";

import { BaseType } from "utils/getData";
import getStatus from "./helpers/getStatus";
import { UpdateStatus } from "./Update.types";
import { Schedule } from "@mui/icons-material";

type UpdateItemProps = {
  update: BaseType;
  checked: number[];
  onCheck: (value: number) => void;
  status: {
    [key: string]: string | ReturnType<typeof setTimeout>;
  };
  planed?: { [key: string]: Date | null };
  onCancelPlan?: (id: number) => void;
};

const UpdateItem: React.FC<UpdateItemProps> = ({
  update,
  checked,
  onCheck,
  status,
  planed,
  onCancelPlan,
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
          sx={{
            flex: "1 0 72px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {planed?.[update?.id] && (
            <Tooltip
              sx={{ marginRight: "8px" }}
              title={`Запланировано в ${format(
                planed?.[update?.id] || "",
                "HH:mm"
              )}`}
            >
              <IconButton
                onClick={() => {
                  onCancelPlan?.(update?.id);
                }}
              >
                <Schedule />
              </IconButton>
            </Tooltip>
          )}

          {getStatus(update?.id, status)}
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default UpdateItem;
