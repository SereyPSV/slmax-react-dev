import { FC, PropsWithChildren } from "react";
import styles from "./GlobalCenterContainer.module.css";

export const GlobalCenterContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.globalCenterContainer}>
      <div className={styles.contentContainer}>{children}</div>
    </main>
  );
};
