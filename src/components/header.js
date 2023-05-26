import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=2000"
        alt="logo"
        width={50}
        height={50}
      />
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Food
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.link}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
