import Link from "next/link";
import styles from "./NavigationMenu.module.css";

const NavigationMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            <span className={styles.navLink}>Главная</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/products">
            <span className={styles.navLink}>Товары</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/cart">
            <span className={styles.navLink}>Корзина</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
