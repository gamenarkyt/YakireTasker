import { TaskItem } from "@/components/business/TaskItem/TaskItem";
import { ITask } from "@/types/task.interface";
import { FC } from "react";

import styles from "./TasksList.module.css";

interface IProps {
  tasks: ITask[];
}
export const TasksList: FC<IProps> = ({ tasks }) => {
  return (
    <div className={styles.taskslist}>
      {tasks.map((task) => {
        return <TaskItem task={task} />;
      })}
    </div>
  );
};
