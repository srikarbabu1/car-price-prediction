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
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: () => {
      formik.resetForm();
      localStorage.setItem("login", true);
      navigate("/Home");
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
              <div className="text-center">
                <button type="submit" className="btn btn-primary mt-4">
                  LogIn
                </button>
              </div>
              <div className="login-link">
                <p className="text-center mt-4">
                  New here? <a href="/register">SignUp</a>
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
