import { useField, Field } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
export default function HRMSTextInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props}>
          {props.children}
        </input>
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
    </div>
  );
}
