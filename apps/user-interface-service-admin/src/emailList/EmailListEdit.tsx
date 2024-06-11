import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EmailListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="categoryLookup" source="categoryLookup" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Edit>
  );
};
