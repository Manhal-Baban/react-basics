import styles from "./Footer.module.css";

const Footer = ({ count, setCount }) => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Manhal Baban. All rights reserved. WP25K</p>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </footer>
  );
};

export default Footer;
