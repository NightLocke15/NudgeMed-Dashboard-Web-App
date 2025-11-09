import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/AccountComponents/LoginForm";
import '../Styles/Login.css'

function Login() {

    return (
        <React.Fragment>
            <section className="logoHolderHome">
                <h1 className="logoOneHome">NUDGE</h1>
                <p className="logoTwoHome">med</p>
            </section>
            <LoginForm />
            <p>Don't have an account?</p>
            <Link to={'/createaccount'} className="pureLinks"><p>Create an Account</p></Link>
        </React.Fragment>
    )
}

export default Login;