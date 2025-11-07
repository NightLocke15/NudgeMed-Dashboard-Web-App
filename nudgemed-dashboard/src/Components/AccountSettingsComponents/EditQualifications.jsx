import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

function EditQualifications({ editingState, currentQualifications }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newQualifications, setNewQualifications] = useState(currentQualifications);

    function edit() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    qualifications: newQualifications,
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
            <label htmlFor="newQualifications">New Qualifications</label>
            <input type="text" name="newQualifications" value={newQualifications} onChange={(e) => setNewQualifications(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}

export default EditQualifications;