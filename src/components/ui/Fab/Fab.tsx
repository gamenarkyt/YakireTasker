import { FC } from "react";
import IconPlus from "./assets/plus.svg?react";

import styles from "./Fab.module.css";

interface IProps {
  onClick?: () => void;
}
export const Fab: FC<IProps> = ({ onClick }) => {
  return (
    <button className={styles.fab} onClick={onClick}>
      <IconPlus className={styles.iconplus} />
    </button>
  );
};
