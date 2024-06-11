import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  dueDate?: SortOrder;
  expirationStatus?: SortOrder;
  filename?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  isAccepted?: SortOrder;
  isDone?: SortOrder;
  isReviewed?: SortOrder;
  updatedAt?: SortOrder;
};
