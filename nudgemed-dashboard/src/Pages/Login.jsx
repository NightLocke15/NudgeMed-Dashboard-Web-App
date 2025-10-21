import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/AccountComponents/LoginForm";

function Login() {

    return (
        <React.Fragment>
            <h1>NUDGEmed</h1>
            <LoginForm />
            <p>Don't have an account?</p>
            <Link to={'/createaccount'}><p>Create an Account</p></Link>
        </React.Fragment>
    )
}

export default Login;