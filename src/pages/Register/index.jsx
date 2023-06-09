import React from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import BCR83 from "../../assets/img/Group 83.png"
import LogoBCR from "../../assets/img/logo2.svg";
// import swal from 'sweetalert';
import { Link } from "react-router-dom";
import UseRegister from "./hooks/useRegister";
import NoAuth from "../../components/noauth";



function Register() {

const  { loading,formValues,setFormValues, handleSubmit } = UseRegister();

    return (
        <NoAuth>
            <div>
                <Row>
                    <Col className="col-lg-6">
                        <div className="position-relative align-items-center justify-content-center">
                            {/* { loading ? (
                                swal("Anda Berhasil Untuk Registrasi!", "Silahkan Klik Tombol Berikut", "success")
                                
                                ) : ("") } */}
                        </div>
                        <Container style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center">
                            <Form 
                            style={{
                                width: "50%"
                            }}
                            onSubmit={handleSubmit}
                            >
                                <div className="mb-3">
                                    <img src={LogoBCR} alt=""></img>
                                </div>
                                <h3 className="mb-3">Sign Up</h3>
                                <div className="mb-3">
                                    <Form.Label htmlFor="text">Name</Form.Label>
                                    <Form.Control
                                    name="name"
                                    id="name"
                                    placeholder="your name"
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            name: e.target.value,
                                        })
                                    }}
                                    value={formValues.name ?? ""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control
                                    name="email"
                                    id="email"
                                    placeholder="contoh: john@gmail.com"
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            email: e.target.value,
                                        })
                                    }}
                                    value={formValues.email ?? ""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="password 6+"
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            password: e.target.value,
                                        })
                                    }}
                                    value={formValues.password ?? ""}
                                    />
                                </div>
                                <Button
                                type="submit"
                                variant="primary"
                                className="d-block w-100 mb-3 mt-3"
                                disabled={loading} 
                                >
                                    {
                                        loading ? "please wait...." : "Sign Up"
                                    } 
                                </Button>
                                <div>
                                    <p>
                                        Alread have an account?
                                        <Link to="/">  Sign in here</Link>
                                    </p>
                                </div>
                            </Form>
                        </Container>
                    </Col>
                    <Col className="col-lg-6 d-lg-flex d-sm-none">
                        <img className="w-100" src={BCR83} alt="" />
                    </Col>
                </Row>
            </div>
           
        </NoAuth>
        
    )
}

export default Register; 