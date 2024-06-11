import { SortOrder } from "../../util/SortOrder";

export type EmailListOrderByInput = {
  category?: SortOrder;
  categoryLookup?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
