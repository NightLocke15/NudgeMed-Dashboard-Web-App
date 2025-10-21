import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

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
        <form onSubmit={edit}>
            <button onClick={() => editingState("")}>Cancel</button>
            <label htmlFor="newUsername">New Username</label>
            <input type="text" name="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}

export default EditUsername;