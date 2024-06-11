import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { NotificationTitle } from "../notification/NotificationTitle";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <DateTimeInput label="createdDate" source="createdDate" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <BooleanInput label="expirationStatus" source="expirationStatus" />
        <TextInput label="filename" source="filename" />
        <TextInput label="filePath" source="filePath" />
        <BooleanInput label="isAccepted" source="isAccepted" />
        <BooleanInput label="isDone" source="isDone" />
        <BooleanInput label="isReviewed" source="isReviewed" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
