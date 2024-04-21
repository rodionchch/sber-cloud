import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { BaseType } from "utils/getData";
import LoopIcon from "@mui/icons-material/Loop";

type UpdateItemProps = {
  update: BaseType;
};

const UpdateItem: React.FC<UpdateItemProps> = ({ update }) => {
  const labelId = `checkbox-list-label-${update?.id}`;

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ListItem key={update?.id} secondaryAction={<LoopIcon />} disablePadding>
      <ListItemButton role={undefined} onClick={handleToggle(update?.id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
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
      </ListItemButton>
    </ListItem>
  );
};

export default UpdateItem;
