import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Octicon, { PlusIcon, SearchIcon, XIcon } from '@primer/octicons-react';
import '../../Styles/CreateAccount.css'

function EditPassword({ editingState, currentPassword }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [message, setMessage] = useState("");

    function edit() {
        if (oldPassword === currentPassword && oldPassword !== newPassword) {
            const newUsers = users.map((user) => {
                if (user.id === currentUser) {
                    return {
                        ...user,
                        password: newPassword,
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
        else if (oldPassword !== currentPassword) {
            setMessage("Old Password Incorrect.");
        }
        else if (oldPassword === newPassword || currentPassword === newPassword) {
            setMessage("New password cannot be the same as the old password.")
        }
        
    }

    return (
        <form className="editForm" onSubmit={edit}>
            <button onClick={() => editingState("")}><XIcon size={24} className="icon close" /></button>
            <p>{message}</p>
            <label htmlFor="oldPassword">Old Password</label>
            <input type="text" name="oldPassword" onChange={(e) => setOldPassword(e.target.value)} />
            <label htmlFor="newPassword">New Password</label>
            <input type="text" name="newPassword" onChange={(e) => setNewPassword(e.target.value)} />
            <button className="button" type="submit">Save</button>
        </form>
    )
}

export default EditPassword;