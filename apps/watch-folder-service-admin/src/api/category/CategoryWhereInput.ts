import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  files?: FileListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
