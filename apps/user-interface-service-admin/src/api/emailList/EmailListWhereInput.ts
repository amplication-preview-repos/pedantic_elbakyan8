import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailListWhereInput = {
  category?: StringNullableFilter;
  categoryLookup?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
};
