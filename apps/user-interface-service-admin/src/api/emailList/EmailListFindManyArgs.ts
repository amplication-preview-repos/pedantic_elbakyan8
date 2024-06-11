import { EmailListWhereInput } from "./EmailListWhereInput";
import { EmailListOrderByInput } from "./EmailListOrderByInput";

export type EmailListFindManyArgs = {
  where?: EmailListWhereInput;
  orderBy?: Array<EmailListOrderByInput>;
  skip?: number;
  take?: number;
};
