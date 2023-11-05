import { FC } from "react";
import styles from "./CheckBox.module.css";
import IconCheck from "./assets/check.svg?react";
import clsx from "clsx";

interface IProps {
  className?: string;
  label?: string;
  labelWidth?: string;
}

export const CheckBox: FC<IProps> = ({ className, label, labelWidth }) => {
  return (
    <label className={styles.rootcheckbox}>
      <input className={styles.realcheckbox} type="checkbox" />
      <div className={styles.yuicheckbox}>
        <IconCheck className={styles.iconcheck} />
      </div>
      <span
        className={styles.label}
        style={{ width: labelWidth, border: "1px solid red" }}
      >
        {label}
      </span>
    </label>
  );
};
