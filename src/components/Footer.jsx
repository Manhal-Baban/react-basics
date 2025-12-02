import { Button, Typography } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = ({ count, setCount }) => {
  return (
    <footer className={styles.footer}>
      <Typography variant="body1">
        © 2025 Manhal Baban. All rights reserved. WP25K
      </Typography>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </footer>
  );
};

export default Footer;
