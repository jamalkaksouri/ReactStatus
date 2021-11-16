import styles from "./navBar.module.css";

const Navbar = (props) => {
  console.log("Navbar.js");

  return (
    <header className={styles.navBar}>
      <h2>DigiShop</h2>
      <span>{props.totalItems}</span>
    </header>
  );
};

export default Navbar;
