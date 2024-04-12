import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    return (
        <div className="container p-2" >
            <div>
                <h1 style={{ color: '#AA398F' }} className='text-center'>Login</h1>
            </div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={validate}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <Field type="email" id="email" name="email" className={`form-control`} />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <Field type="password" id="password" name="password" className={`form-control`} />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>

                    <button type="submit" className="btn btn-outline-primary">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;
