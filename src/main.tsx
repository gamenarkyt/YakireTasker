import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/pages";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("ru");
dayjs.extend(relativeTime);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
