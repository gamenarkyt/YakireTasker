import { ITask } from "@/types/task.interface";
import { useEffect, useState } from "react";

export const useTasksStorage = (key: string, initialValue: any) => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("usestate error");
      console.log(error);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [tasks]);

  // TASK API
  const addTask = (id: number, text: string) => {
    setTasks([...tasks, { id: id, text: text, checked: false }]);
  };

  const deleteTask = (id: number) => {
    const nextTasksState = tasks.filter((task) => task.id !== id);
    console.log(nextTasksState);

    setTasks(nextTasksState);
  };
  return { tasks, setTasks, addTask, deleteTask };
};
