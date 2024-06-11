import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { NotificationCreateNestedManyWithoutFilesInput } from "./NotificationCreateNestedManyWithoutFilesInput";

export type FileCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  createdDate?: Date | null;
  dueDate?: Date | null;
  expirationStatus?: boolean | null;
  filename?: string | null;
  filePath?: string | null;
  isAccepted?: boolean | null;
  isDone?: boolean | null;
  isReviewed?: boolean | null;
  notifications?: NotificationCreateNestedManyWithoutFilesInput;
};
