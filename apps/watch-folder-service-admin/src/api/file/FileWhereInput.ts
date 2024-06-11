import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type FileWhereInput = {
  category?: CategoryWhereUniqueInput;
  createdDate?: DateTimeNullableFilter;
  dueDate?: DateTimeNullableFilter;
  expirationStatus?: BooleanNullableFilter;
  filename?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
  isAccepted?: BooleanNullableFilter;
  isDone?: BooleanNullableFilter;
  isReviewed?: BooleanNullableFilter;
  notifications?: NotificationListRelationFilter;
};
