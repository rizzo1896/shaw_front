import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface ICardProps {
  id: number;
  login: string;
}

const card = ({ id, login }: ICardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID: {id}
        </Typography>
        <Typography variant="h5" component="div">
          {login}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/user/${login}`);
          }}
        >
          See Details
        </Button>
      </CardActions>
    </>
  );
};

export default function UserCard(props: ICardProps) {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 300, margin: 1, borderRadius: 2 }}>
      <Card variant="outlined">{card(props)}</Card>
    </Box>
  );
}
