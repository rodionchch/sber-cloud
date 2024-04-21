import { Box, CircularProgress } from "@mui/material";
import { Pause, Error, CheckCircle } from "@mui/icons-material";
import { UpdateStatus } from "../Update.types";

const getStatus = (
  id: number,
  status: {
    [key: string]: string | ReturnType<typeof setTimeout>;
  }
) => {
  switch (status?.[id]) {
    case UpdateStatus.UPDATE:
      return <Error color="warning" />;
    case UpdateStatus.PAUSE:
      return <Pause color="info" />;
    case UpdateStatus.DONE:
      return <CheckCircle color="success" />;

    default:
      return <CircularProgress size={22} />;
  }
};

export default getStatus;
