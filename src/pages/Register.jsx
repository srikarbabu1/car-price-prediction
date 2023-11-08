import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../styles/register.css";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required").email("Invalid email"),
      mobile: Yup.string()
        .required("Mobile number is required")
        .max(10, "Mobile number should be of 10 digits")
        .min(10, "Mobile number should be of 10 digits"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password should be of minimum 6 characters"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf(
          [Yup.ref("password"), null],
          "Password and Confirm Password should be same"
        ),
    }),
    onSubmit: () => {
      formik.resetForm();
      navigate("/login");
    },
  });

  // function to validate form fields

  return (
    <div>
      <Container className="container">
        <Row>
          <Col lg="6" className="image-info"></Col>
          <Col lg="6" className="form">
            <h3 className="text-center">Register</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label
                  htmlFor="name"
                  className={`${
                    formik.touched.name && formik.errors.name && "text-danger"
                  }`}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="email"
                  className={`${
                    formik.touched.email && formik.errors.email && "text-danger"
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="mobile"
                  className={`${
                    formik.touched.mobile &&
                    formik.errors.mobile &&
                    "text-danger"
                  }`}
                >
                  {formik.touched.mobile && formik.errors.mobile
                    ? formik.errors.mobile
                    : "Mobile Number"}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="password"
                  className={`${
                    formik.touched.password &&
                    formik.errors.password &&
                    "text-danger"
                  }`}
                >
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : "Password"}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="confirmPassword"
                  className={`${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword &&
                    "text-danger"
                  }`}
                >
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : "Confirm Password"}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary mt-4">
                  Register
                </button>
              </div>
              <div className="login-link">
                <p className="text-center mt-4">
                  Already have an account? <a href="/login">Login</a>
                </p>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
