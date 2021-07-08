import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function EditProject({ projects, onEdit }) {
  let history = useHistory();
  let query = useQuery();
  const id = query.get("name");

  const filterProject = (id) => {
    return projects.filter((project) => project.id == id);
  };

  const project = filterProject(id);
  console.log(project[0].name);
  console.log(project[0].deadLine);
  const initialValues = {
    name: project[0].name,
    description: project[0].description,
    manager: project[0].manager,
    deadLine: project[0].deadLine.split("/").reverse().join("-"),
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    description: Yup.string().required("Required!"),
    manager: Yup.string().required("Required!"),
    deadLine: Yup.string().required("Required!"),
  });
  const onSubmit = (values) => {
    onEdit(values, id);
    console.log(values, id);
    history.push("/projects");
  };
  return (
    <div>
      <Link to="/projects">Close</Link>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <FormikControl control="input" type="text" label="Name" name="name" />
          <FormikControl control="textarea" label="Description" name="description" />
          <FormikControl control="input" type="text" label="Manager" name="manager" />
          <FormikControl control="input" type="date" label="DeadLine" name="deadLine" />
          <button className="submit" type="submit">
            Save project
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default EditProject;
