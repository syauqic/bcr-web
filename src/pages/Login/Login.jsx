import React from "react";
import "./Login.css";
import { Form, Button, Card } from "react-bootstrap";

import Logologin from "../../assets/img/logo2.svg";
import Closelogo from "../../assets/img/close.svg";
import loginimage from "../../assets/img/login-image.png";
import useLogin from "./Hooks/useLogin";
import NoAuth from "../../components/noauth/index";

const Login = () => {
  const { loading,
    formValues,
    setFormValues,
    handleSubmit,
    formErrors,
    isSubmit,
    } = useLogin();
  return (
    <NoAuth>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 lf-login">
              <div className="logo-login">
                <a href="/">
                  <img src={Logologin} alt="BCR" className="homelogo" />
                </a>

                <img src={Closelogo} alt="close" className="closelogo" />
              </div>
              <h2>Welome Back !</h2>
              {Object.keys(formErrors).length === 0 ? (
                ""
              ) : (
                <Card className="bg-danger-subtle mb-3" style={{height: '75%'}}>
                  <div className="text-danger ms-3 mt-3 mb-3">Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital !</div>
                </Card>
                // <pre>{JSON.stringify(formValues, undefined, 2)}</pre> //memunculkan data input
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => {
                      setFormValues({ ...formValues, email: e.target.value });
                    }}
                    value={formValues.email ?? ""}
                  />
                  <p className="text-danger">{formErrors.email}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        password: e.target.value,
                      });
                    }}
                    value={formValues.password ?? ""}
                  />
                   {
                  formErrors.password ? (
                    <p className="text-danger">{formErrors.password}</p>
                    
                  ) : (
                    <p>Password minimal 6 karakter !!</p>
                  )
                }
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mb-3"
                  disabled={loading}
                >
                  {loading ? "Sabar bangg..." : "Sign In"}
                </Button>
              </Form>
              <div className="sign-text">
                <p className="text-center">
                  Don't have an account?
                  <a href="/register">Sign Up for free</a>
                </p>
              </div>
            </div>

            <div className="col-6 rg-login">
              <h1 className="text-white mb-5">Binar Car Rental</h1>
              <img className="w-100" src={loginimage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </NoAuth>
  );
};

export default Login;
