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
            patients: [],
            patientAppointments: []
        }
    ]);
    const [authenticated, setAuthenticated] = useState(() => {
        const Auth = localStorage.getItem("isAuthenticated");
        return Auth === "true";
    })
    const [currentUser, setCurrentUser] = useState({});
    const [currentUserInfo, setCurrentUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("isAuthenticated", authenticated);
    }, [authenticated]);

    useEffect(() => {
        setCurrentUserInfo(users.filter((user) => user.id === currentUser)[0]);
    }, [users])

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
            let array = [];
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 4; j++) {
                    array = [...array, `${String(8 + i).padStart(2, '0')}:${String(15 * j).padStart(2, '0')}`];
                }            
            }

            const newId = Date.now().toString(36);
            setUsers([...users, {
                id: newId,
                username: username,
                password: password,
                email: email,
                appointments: array,
                patients: [],
                patientAppointments: [],
            }]);
            setAuthenticated(true);
            setCurrentUser(newId);
        }
    }

    return (
        <UserContext.Provider value={{ users, setUsers, authenticated, currentUser, currentUserInfo, login, logout, createAccount }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;