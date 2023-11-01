import { GlobalLayout } from "@/layouts/GlobalLayout/GlobalLayout";
import { TasksPage } from "@/pages/TasksPage/TasksPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route path="" element={<TasksPage />} />
    </Route>
  )
);
