import { CheckBox } from "@/components/ui/CheckBox/CheckBox";
import { ITask } from "@/types/task.interface";
import { FC } from "react";
import styles from "./TaskItem.module.css";
import dayjs from "dayjs";
import { Typography } from "@/components/ui/Typography/Typography";

interface IProps {
  task: ITask;
}
export const TaskItem: FC<IProps> = ({ task }) => {
  return (
    <div className={styles.taskitem}>
      <CheckBox label={task.text} labelWidth="50vw" />
      <div className={styles.end}>
        <Typography className={styles.date}>{dayjs().to(task.date)}</Typography>
      </div>
    </div>
  );
};
