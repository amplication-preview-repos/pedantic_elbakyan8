import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { NotificationUpdateManyWithoutFilesInput } from "./NotificationUpdateManyWithoutFilesInput";

export type FileUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  createdDate?: Date | null;
  dueDate?: Date | null;
  expirationStatus?: boolean | null;
  filename?: string | null;
  filePath?: string | null;
  isAccepted?: boolean | null;
  isDone?: boolean | null;
  isReviewed?: boolean | null;
  notifications?: NotificationUpdateManyWithoutFilesInput;
};
