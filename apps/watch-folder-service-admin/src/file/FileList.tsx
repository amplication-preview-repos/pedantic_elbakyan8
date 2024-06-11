import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const FileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Files"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
