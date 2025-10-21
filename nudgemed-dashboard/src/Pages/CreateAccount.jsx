import React from "react";
import CreateAccountForm from "../Components/AccountComponents/CreateAccountForm";
import { Link } from "react-router-dom";

function CreateAccount() {

    return (
        <React.Fragment>
            <h1>NUDGEmed</h1>
            <CreateAccountForm />
            <p>Already have an account?</p>
            <Link to={'/login'}>Log In</Link>
        </React.Fragment>
    )
}

export default CreateAccount;