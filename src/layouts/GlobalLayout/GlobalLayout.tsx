import { Outlet } from "react-router-dom";

import styles from "./GlobalLayout.module.css";
import { Header } from "@/components/Header/Header";

export const GlobalLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>footer</div>
    </>
  );
};
