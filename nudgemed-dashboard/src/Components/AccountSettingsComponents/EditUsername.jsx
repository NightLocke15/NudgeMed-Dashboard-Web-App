import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Octicon, { PlusIcon, SearchIcon, XIcon } from '@primer/octicons-react';
import '../../Styles/CreateAccount.css'

function EditUsername({ editingState, currentUsername }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newUsername, setNewUsername] = useState(currentUsername);

    function edit() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    username: newUsername,
                }
            }
            else {
                return user;
            }
        })
        setUsers(newUsers);
        editingState("");
    }

    return (
        <form className="editForm" onSubmit={edit}>
            <button onClick={() => editingState("")}><XIcon size={24} className="icon close" /></button>
            <label htmlFor="newUsername">New Username</label>
            <input type="text" name="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
            <button className="button" type="submit">Save</button>
        </form>
    )
}

export default EditUsername;