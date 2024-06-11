import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NotificationWhereInput = {
  email?: StringNullableFilter;
  file?: FileWhereUniqueInput;
  id?: StringFilter;
  sentDate?: DateTimeNullableFilter;
};
