import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type NotificationUpdateInput = {
  email?: string | null;
  file?: FileWhereUniqueInput | null;
  sentDate?: Date | null;
};
