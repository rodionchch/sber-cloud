import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import getServerLogo from "./helpers/getServerLogo";

type DashboardCardProps = {
  id: number;
  name: string;
  description: string;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  id,
  name,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`server/${id}`);
      }}
      sx={{
        width: "100%",
        borderRadius: 4,
        cursor: "pointer",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Avatar sx={{ bgcolor: "#121212", marginBottom: "24px" }}>
            {getServerLogo(name)}
          </Avatar>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div"
            color={"#8d8d8d"}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DashboardCard;
