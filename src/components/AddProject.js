import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  description: "",
  manager: "",
  deadLine: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  description: Yup.string().required("Required!"),
  manager: Yup.string().required("Required!"),
});

const AddProject = ({ onAdd }) => {
  const onSubmit = (values, onSubmitProps) => {
    onAdd(values);
    console.log("values", values);
    onSubmitProps.setSubmitting(false);

    onSubmitProps.resetForm();
  };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (!name) {
  //     alert("Please add a project");
  //     return;
  //   }
  //   onAdd({ name, description, manager, deadLine });

  //   setName("");
  //   setDescription("");
  //   setManager("");
  //   setdeadLine("");
  // };

  return (
    <div>
      <Link to="/projects">Close</Link>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnChange={false}>
        {(formik) => {
          return (
            <Form>
              <div className="form-control">
                <label htmlFor="name">Project</label>
                <Field type="text" id="name" name="name" placeholder="Add project.." />
                {/* onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}  */}
                <ErrorMessage name="name">{(errorMsg) => <div className="errors">{errorMsg}</div>}</ErrorMessage>
              </div>

              <div className="form-control">
                <label htmlFor="description">Description</label>
                <Field as="textarea" type="text" id="description" name="description" placeholder="Write something.." style={{ height: "200px" }}></Field>
                <ErrorMessage name="description">{(errorMsg) => <div className="errors">{errorMsg}</div>}</ErrorMessage>
              </div>

              <div className="form-control">
                <label htmlFor="manager">Project Manager</label>
                <Field type="text" id="manager" name="manager" placeholder="project manager.." />
                <ErrorMessage name="manager">{(errorMsg) => <div className="errors">{errorMsg}</div>}</ErrorMessage>
              </div>

              <div className="form-control">
                <label htmlFor="deadLine">Deadline</label>
                <Field type="date" id="deadLine" name="deadine" />
              </div>
              <button className="submit" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                Save Project
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddProject;
