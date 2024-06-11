import { Category } from "../category/Category";
import { Notification } from "../notification/Notification";

export type File = {
  category?: Category | null;
  createdAt: Date;
  createdDate: Date | null;
  dueDate: Date | null;
  expirationStatus: boolean | null;
  filename: string | null;
  filePath: string | null;
  id: string;
  isAccepted: boolean | null;
  isDone: boolean | null;
  isReviewed: boolean | null;
  notifications?: Array<Notification>;
  updatedAt: Date;
};
