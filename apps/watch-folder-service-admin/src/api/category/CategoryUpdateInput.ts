import { FileUpdateManyWithoutCategoriesInput } from "./FileUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  files?: FileUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
