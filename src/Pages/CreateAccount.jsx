import React from "react";
import CreateAccountForm from "../Components/AccountComponents/CreateAccountForm";
import { Link } from "react-router-dom";
import '../Styles/CreateAccount.css'

function CreateAccount() {

    return (
        <React.Fragment>
            <section className="logoHolderCreateAccount">
                <h1 className="logoOneHome">NUDGE</h1>
                <p className="logoTwoHome">med</p>
            </section>
            <CreateAccountForm />
            <p>Already have an account?</p>
            <Link to={'/login'} className="pureLinks"><p>Log In</p></Link>
        </React.Fragment>
    )
}

export default CreateAccount;