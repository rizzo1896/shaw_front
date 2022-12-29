import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Github Users Search
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar style={{ minHeight: 48 }} />
        <Container maxWidth="xl" style={{ paddingLeft: 12, paddingRight: 12 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
