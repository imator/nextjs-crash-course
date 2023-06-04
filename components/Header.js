import Link from "next/link";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/product">
          <li>Produt</li>
        </Link>
        <Link href="/users">
          <li>User</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
