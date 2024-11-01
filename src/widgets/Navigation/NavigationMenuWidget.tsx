import Link from "next/link";
import styles from "./NavigationMenu.module.css";

export const NavigationMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            <span className={styles.navLink}>Home</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/products">
            <span className={styles.navLink}>Products</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/cart">
            <span className={styles.navLink}>Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
