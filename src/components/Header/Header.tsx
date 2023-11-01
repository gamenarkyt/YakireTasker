import { Typography } from "@/components/ui/Typography/Typography";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Typography className={styles.sitename}>Tasker</Typography>
    </div>
  );
};
