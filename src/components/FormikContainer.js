import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer({ onAdd }) {
  const initialValues = {
    name: "",
    description: "",
    manager: "",
    deadLine: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    description: Yup.string().required("Required!"),
    manager: Yup.string().required("Required!"),
    deadLine: Yup.date().required("Required!").nullable(),
  });
  const onSubmit = (values, onSubmitProps) => {
    onAdd(values);
    onSubmitProps.resetForm();
  };
  return (
    <div>
      <Link to="/projects">Close</Link>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <FormikControl control="input" type="text" label="Name" name="name" />
            <FormikControl control="textarea" label="Description" name="description" />
            <FormikControl control="input" type="text" label="Manager" name="manager" />
            <FormikControl control="input" type="date" label="DeadLine" name="deadLine" />
            <button className="submit" type="submit">
              Save project
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
