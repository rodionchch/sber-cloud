import { Box, IconButton, Tooltip, Typography, Dialog } from "@mui/material";
import { Pause, PlayArrow, Schedule, Loop } from "@mui/icons-material";

import { ServerType } from "utils/getData";
import { StaticTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

type UpdateActionsProps = {
  server?: ServerType;
  checked: number[];
  getDone: () => boolean;
  onPause: () => void;
  onPlay: () => void;
  onPlayAll: () => void;
  onPlanned: (date: Date | null) => void;
};

const UpdateActions: React.FC<UpdateActionsProps> = ({
  server,
  checked,
  getDone,
  onPause,
  onPlay,
  onPlayAll,
  onPlanned,
}) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px",
        flex: 1,
      }}
    >
      <Typography sx={{ flex: 1 }} variant="h3">
        {server?.name}
      </Typography>
      <Tooltip title="Запланировать">
        <IconButton
          disabled={!checked.length}
          onClick={() => {
            setShowDialog(true);
          }}
        >
          <Schedule />
        </IconButton>
      </Tooltip>

      <Dialog
        open={showDialog}
        onClose={() => {
          setShowDialog(!showDialog);
        }}
      >
        <StaticTimePicker
          ampm={false}
          minutesStep={15}
          onAccept={(date) => {
            onPlanned(date);
          }}
          onClose={() => {
            setShowDialog(false);
          }}
        />
      </Dialog>

      <Tooltip title="Обновить все">
        <IconButton disabled={getDone()} onClick={onPlayAll}>
          <Loop />
        </IconButton>
      </Tooltip>
      <Tooltip title="Отменить">
        <IconButton disabled={!checked.length} onClick={onPause}>
          <Pause />
        </IconButton>
      </Tooltip>
      <Tooltip title="Обновить">
        <IconButton disabled={!checked.length} onClick={onPlay}>
          <PlayArrow />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default UpdateActions;
