import { Dayjs } from "dayjs";

export interface ITask {
  id: string;
  text: string;
  checked: boolean;
  date: Dayjs;
}
