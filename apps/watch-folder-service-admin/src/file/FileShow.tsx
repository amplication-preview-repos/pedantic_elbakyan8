import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FILE_TITLE_FIELD } from "./FileTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const FileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdDate" source="createdDate" />
        <TextField label="dueDate" source="dueDate" />
        <BooleanField label="expirationStatus" source="expirationStatus" />
        <TextField label="filename" source="filename" />
        <TextField label="filePath" source="filePath" />
        <TextField label="ID" source="id" />
        <BooleanField label="isAccepted" source="isAccepted" />
        <BooleanField label="isDone" source="isDone" />
        <BooleanField label="isReviewed" source="isReviewed" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Notification"
          target="fileId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <ReferenceField label="File" source="file.id" reference="File">
              <TextField source={FILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="sentDate" source="sentDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
