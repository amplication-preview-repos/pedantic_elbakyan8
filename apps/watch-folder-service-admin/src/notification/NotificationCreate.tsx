import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { FileTitle } from "../file/FileTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput source="file.id" reference="File" label="File">
          <SelectInput optionText={FileTitle} />
        </ReferenceInput>
        <DateTimeInput label="sentDate" source="sentDate" />
      </SimpleForm>
    </Create>
  );
};
