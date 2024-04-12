import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation,useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

function Register() {
  const location=useLocation();
  const history=useHistory();
  const match=useRouteMatch();
    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        nameErr: "",
        usernameErr: "",
        emailErr: "",
        passwordErr: "",
        confirmPasswordErr: ""
    });

    const changeData = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });

        let error = "";
        if (name === "name") {
            error = value.trim() === "" ? "This field is required" : value.length < 3 ? "Please enter a valid name" : "";
        } else if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            error = value.trim() === "" ? "This field is required" : !emailRegex.test(value) ? "Please enter a valid email address" : "";
        } else if (name === "username") {
            error = value.trim() === "" ? "This field is required" : value.length < 3 ? "Please enter a valid username" : "";
        } else if (name === "password") {
            error = value.trim() === "" ? "This field is required" : value.length < 5 ? "Password must be at least 5 characters long" : "";
        } else if (name === "confirmPassword") {
            error = value.trim() === "" ? "This field is required" : value !== userData.password ? "Passwords do not match" : "";
        }
        setErrors({ ...errors, [`${name}Err`]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(errors).every(error => error === "")) {
            console.log(userData);
            history.push("/");
            
        } else {
            console.log("Form has errors. Cannot submit.");
        }
    };

    return (
        <div className="container p-2">
            <div>
                <h1 className='text-center' style={{ color: '#AA398F'}} >Register</h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control className={`form-control ${errors.nameErr ? "border-danger" : ""}`} type="text" placeholder="Enter Name" name="name" value={userData.name} onChange={changeData} />
                    <p className='text-danger'>{errors.nameErr}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" className={`form-control ${errors.emailErr ? "border-danger" : ""}`} name="email" value={userData.email} onChange={changeData} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Control type="text" placeholder="Username" className={`form-control ${errors.usernameErr ? "border-danger" : ""}`} name="username" value={userData.username} onChange={changeData} />
                    <p className='text-danger'>{errors.usernameErr}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" className={`form-control ${errors.passwordErr ? "border-danger" : ""}`} name="password" value={userData.password} onChange={changeData} />
                    <p className='text-danger'>{errors.passwordErr}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" className={`form-control ${errors.confirmPasswordErr ? "border-danger" : ""}`} name="confirmPassword" value={userData.confirmPassword} onChange={changeData} />
                    <p className='text-danger'>{errors.confirmPasswordErr}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button disabled={Object.values(errors).some(error => error !== "")} variant='outline-primary' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Register;
