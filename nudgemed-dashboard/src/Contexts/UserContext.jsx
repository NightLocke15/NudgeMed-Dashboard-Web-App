import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function UserProvider ({ children }) {
    const [users, setUsers] = useState([
        {
            id: "00001",
            username: "user",
            password: "password",
            email: "usermail",
            signature: "",
        }
    ]);
    const [authenticated, setAuthenticated] = useState(() => {
        const Auth = localStorage.getItem("isAuthenticated");
        return Auth === "true";
    })
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("isAuthenticated", authenticated);
    }, [authenticated]);

    function login(email, password) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email && users[i].password === password) {
                setAuthenticated(true);
                setCurrentUser(users[i].id);
                navigate('/');
            }            
            else {

            }
        }
    }

    function logout() {
        setAuthenticated(false);
        setCurrentUser({});
        navigate('/');
    }

    function createAccount(username, email, password) {
        if (!users.some((user) => user.email === email) && password.length >= 8 && /\d/.test(password) && /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/.test(password)) {
            const newId = Date.now().toString(36);
            setUsers([...users, {
                id: newId,
                username: username,
                password: password,
                email: email,
            }]);
            setAuthenticated(true);
            setCurrentUser(newId);
        }
    }

    return (
        <UserContext.Provider value={{ users, setUsers, authenticated, currentUser, login, logout, createAccount }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;