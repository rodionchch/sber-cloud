import { Box, IconButton, List, Tooltip, Typography } from "@mui/material";
import { useAuth } from "hooks/useAuth";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getData } from "utils/getData";
import UpdateItem from "./UpdateItem";
import { Pause, PlayArrow, Schedule, Loop } from "@mui/icons-material";

const Update = () => {
  const { id } = useParams();
  const auth = useAuth();

  const server = useMemo(() => {
    return getData(auth?.user)?.servers?.find(
      (server) => server.id === Number(id)
    );
  }, [auth?.user, id]);

  return (
    <Box
      sx={{
        display: "flex",
        px: "22px",
        marginRight: "10px",
        flexWrap: "wrap",
      }}
    >
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
          <IconButton>
            <Schedule />
          </IconButton>
        </Tooltip>

        <Tooltip title="Обновить все">
          <IconButton>
            <Loop />
          </IconButton>
        </Tooltip>

        <Tooltip title="Отменить">
          <IconButton disabled>
            <Pause />
          </IconButton>
        </Tooltip>

        <Tooltip title="Обновить">
          <IconButton disabled>
            <PlayArrow />
          </IconButton>
        </Tooltip>
      </Box>

      <List
        sx={{
          width: "100%",
          bgcolor: "#191919",
          borderRadius: 4,
          overflow: "hidden",
          padding: 0,
        }}
      >
        {server?.updates &&
          server?.updates.map((update) => {
            return <UpdateItem update={update} />;
          })}
      </List>
    </Box>
  );
};

export default Update;
