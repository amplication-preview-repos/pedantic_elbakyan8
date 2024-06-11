import { EmailList as TEmailList } from "../api/emailList/EmailList";

export const EMAILLIST_TITLE_FIELD = "category";

export const EmailListTitle = (record: TEmailList): string => {
  return record.category?.toString() || String(record.id);
};
