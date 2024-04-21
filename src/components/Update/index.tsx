import { Box, List } from "@mui/material";

import UpdateItem from "./UpdateItem";
import useUpdate from "./useUpdate";
import UpdateActions from "./UpdateActions";

const Update = () => {
  const {
    server,
    getDone,
    checked,
    onPause,
    onPlay,
    onCheck,
    status,
    onPlayAll,
    planed,
    onPlanned,
    onCancelPlan
  } = useUpdate();

  return (
    <Box
      sx={{
        display: "flex",
        px: "22px",
        marginRight: "10px",
        flexWrap: "wrap",
      }}
    >
      <UpdateActions
        server={server}
        getDone={getDone}
        onPause={onPause}
        onPlay={onPlay}
        onPlayAll={onPlayAll}
        checked={checked}
        onPlanned={onPlanned}
      />

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
            return (
              <UpdateItem
                key={update.id}
                update={update}
                checked={checked}
                onCheck={onCheck}
                status={status.current}
                planed={planed}
                onCancelPlan={onCancelPlan}
              />
            );
          })}
      </List>
    </Box>
  );
};

export default Update;
