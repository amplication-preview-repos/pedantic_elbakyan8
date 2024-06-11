import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="File" target="categoryId" label="Files">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
