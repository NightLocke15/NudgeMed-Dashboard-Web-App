import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Octicon, { PlusIcon, SearchIcon, XIcon } from '@primer/octicons-react';

function EditEmail({ editingState, currentEmail }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newEmail, setNewEmail] = useState("");
    const [oldEmail, setOldEmail] = useState("");
    const [message, setMessage] = useState("");

    function edit() {
        if (oldEmail === currentEmail && oldEmail !== newEmail) {
            const newUsers = users.map((user) => {
                if (user.id === currentUser) {
                    return {
                        ...user,
                        email: newEmail,
                    }
                }
                else {
                    return user;
                }
            })
            setUsers(newUsers);
            setMessage("");
            editingState("");
        }
        else if (oldEmail !== currentEmail) {
            setMessage("Old Email Incorrect.");
        }
        else if (oldEmail === newEmail || currentEmail === newEmail) {
            setMessage("New Email cannot be the same as Old Email.")
        }
        
    }

    return (
        <form className="editForm" onSubmit={edit}>
            <button onClick={() => editingState("")}><XIcon size={24} className="icon close" /></button>
            <p>{message}</p>
            <label htmlFor="oldEmail">Old Email</label>
            <input type="text" name="oldEmail" onChange={(e) => setOldEmail(e.target.value)} />
            <label htmlFor="newEmail">New Email</label>
            <input type="text" name="newEmail" onChange={(e) => setNewEmail(e.target.value)} />
            <button className="button" type="submit">Save</button>
        </form>
    )
}

export default EditEmail;