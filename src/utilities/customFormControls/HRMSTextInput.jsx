import { useField } from "formik";
import {
  Form
} from 'antd';
import React from "react";
import { FormField, Label } from "semantic-ui-react";
export default function HRMSTextInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <Form.Item error={meta.touched && !!meta.error}>
        <input {...field} {...props}>
          {props.children}
        </input>
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </Form.Item>
    </div>
  );
}
