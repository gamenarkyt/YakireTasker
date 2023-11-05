import { TasksList } from "@/components/business/TasksList/TasksList";
import { Fab } from "@/components/ui/Fab/Fab";
import { Typography } from "@/components/ui/Typography/Typography";
import { useTasksStorage } from "@/hooks/useTasksStorage";
import dayjs from "dayjs";

export const TasksPage = () => {
  const { tasks, addTask } = useTasksStorage();

  return (
    <div>
      <button onClick={() => console.log(dayjs().locale("ru").format())}>
        test
      </button>
      <button onClick={() => console.log(dayjs().fromNow)}>test2</button>
      <Typography>Tasker test</Typography>
      <TasksList tasks={tasks} />
      <Fab onClick={() => addTask("test")} />
    </div>
  );
};
