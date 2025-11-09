import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

function CreateAccountForm() {
    const { createAccount, users } = useContext(UserContext);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleAccountInfo(e) {
        e.preventDefault();
        if (!users.some((user) => user.email === email) && password.length >= 8 && /\d/.test(password) && /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/.test(password)) {
            createAccount(username, email, password);
            navigate('/');
        }
        else if (users.some((user) => user.email === email)) {
            setMessage("This email already has an account.");
        }
        else if (password.length <= 8 || !/\d/.test(password) || !/[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/.test(password)) {
            setMessage("Your password does not meet the requirements.")
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={handleAccountInfo}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" placeholder="Email Address..." onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                <p className="passwordInfo">Password should contain at least 8 characters, 1 number and 1 special character.</p>
                <p className="warningMessage">{message}</p>
                <button type="submit" className="button">Create Account</button>
            </form>
        </React.Fragment>
    )
}

export default CreateAccountForm;