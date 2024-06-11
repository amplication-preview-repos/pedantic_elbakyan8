import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fileId?: SortOrder;
  id?: SortOrder;
  sentDate?: SortOrder;
  updatedAt?: SortOrder;
};
