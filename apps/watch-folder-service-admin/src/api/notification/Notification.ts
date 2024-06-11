import { File } from "../file/File";

export type Notification = {
  createdAt: Date;
  email: string | null;
  file?: File | null;
  id: string;
  sentDate: Date | null;
  updatedAt: Date;
};
