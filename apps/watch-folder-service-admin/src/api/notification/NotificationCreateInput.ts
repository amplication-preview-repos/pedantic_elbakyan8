import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type NotificationCreateInput = {
  email?: string | null;
  file?: FileWhereUniqueInput | null;
  sentDate?: Date | null;
};
