import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

function LoginForm() {
    const { login, users } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleLoginInfo(e) {
        e.preventDefault();
        console.log(email)
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email && users[i].password === password) {
                setMessage("");
                login(email, password);
            }
            else {
                setMessage("Your email or password is incorrect.")
            }
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={handleLoginInfo}>
                <p className="warningMessage">{message}</p>
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="button">Log In</button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm;