import { Typography } from "@/components/ui/Typography/Typography";

import { useTasksStorage } from "@/hooks/useTasksStorage";

export const TasksPage = () => {
  const { tasks, addTask, deleteTask } = useTasksStorage("tasks", []);

  if (!tasks) return "loading...";
  return (
    <div>
      <Typography>Tasker test</Typography>
      <button onClick={() => addTask(12, "1221")}>add task</button>
      <button onClick={() => deleteTask(12)}>delete 12 task</button>
      {tasks.map((task) => {
        return <div>{task.text}</div>;
      })}
    </div>
  );
};
