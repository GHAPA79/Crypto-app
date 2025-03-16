import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto Application</h1>
        <p>Saman Ghapanuri | React.js Project</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Saman with ♡</p>
      </footer>
    </>
  );
};

export default Layout;
