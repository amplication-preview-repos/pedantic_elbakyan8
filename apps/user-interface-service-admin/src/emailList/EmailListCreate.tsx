import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmailListCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="categoryLookup" source="categoryLookup" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};
