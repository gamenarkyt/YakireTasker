import { ITask } from "@/types/task.interface";
import { useLocalStorage } from "@uidotdev/usehooks";
import dayjs from "dayjs";
import { nanoid } from "nanoid";

export const useTasksStorage = () => {
  const [tasks, setTasks] = useLocalStorage<ITask[]>("tasks", [
    {
      id: nanoid(),
      text: "First task completed!",
      checked: true,
      date: dayjs(),
    },
  ]);
  const addTask = (text: string) => {
    setTasks([
      ...tasks,
      { id: nanoid(), text: text, checked: false, date: dayjs() },
    ]);
  };
  return { tasks, setTasks, addTask };
};
