import { FileCreateNestedManyWithoutCategoriesInput } from "./FileCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  files?: FileCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
