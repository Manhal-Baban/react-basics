import { Link } from "react-router";
import styles from "./Header.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Header = () => {
  // return (
  //   <header
  //     className={styles.header}
  //     style={{ display: "flex", justifyContent: "space-between" }}
  //   >
  //     <h1>HR-App</h1>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/about">About</Link>
  //       <Link to="/todos">Todos</Link>
  //     </nav>
  //   </header>
  // );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/todos">
            Todos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
