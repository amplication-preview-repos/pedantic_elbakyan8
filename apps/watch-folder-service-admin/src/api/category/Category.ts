import { File } from "../file/File";

export type Category = {
  createdAt: Date;
  files?: Array<File>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
