import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const { authenticated, logout } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <React.Fragment>
            {authenticated ? (
                <React.Fragment>
                    <button onClick={logout}>Logout</button>
                    <button onClick={() => navigate('/account')}>Account</button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <h1>Welcome to NUDGEmed</h1>
                    <Link to={"/login"}><p>Log In</p></Link>
                    <Link to={"/createaccount"}><p>Create Account</p></Link>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Home;