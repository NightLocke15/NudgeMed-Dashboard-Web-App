import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import EditUsername from "../Components/AccountSettingsComponents/EditUsername";
import EditEmail from "../Components/AccountSettingsComponents/EditEmail";
import EditPassword from "../Components/AccountSettingsComponents/EditPassword";
import EditSignature from "../Components/AccountSettingsComponents/EditSignature";

function Account() {
    const { users, currentUser } = useContext(UserContext);
    const [editing, setEditing] = useState("");

    return (
        <React.Fragment>
            <section>
                <h1>Account</h1>
                <article>
                    <p>Username:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0].username}</p>                    
                    <button onClick={() => setEditing("username")}>Edit</button>
                </article>
                <article>
                    <p>Email:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0].email}</p>
                    <button onClick={() => setEditing("email")}>Edit</button>
                </article>
                <article>
                    <p>Password:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0].password}</p>
                    <button onClick={() => setEditing("password")}>Edit</button>
                </article>
                <article>
                    <p>Signature:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0].signature}</p>
                    <button onClick={() => setEditing("signature")}>Edit</button>
                </article>
            </section>
            {editing === "username" ? (
                <EditUsername editingState={setEditing} currentUsername={users.filter((user) => user.id === currentUser)[0].username} />
            ) : 
            editing === "email" ? (
                <EditEmail editingState={setEditing} currentEmail={users.filter((user) => user.id === currentUser)[0].email} />
            ) : 
            editing === "password" ? (
                <EditPassword editingState={setEditing} currentPassword={users.filter((user) => user.id === currentUser)[0].password} />
            ) : 
            editing === "signature" ? (
                <EditSignature editingState={setEditing} currentSignature={users.filter((user) => user.id === currentUser)[0].signature} />
            ) : (
                <React.Fragment>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Account;