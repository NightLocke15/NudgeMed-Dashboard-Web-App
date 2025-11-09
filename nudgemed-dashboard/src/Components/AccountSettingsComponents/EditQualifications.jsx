import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Octicon, { PlusIcon, SearchIcon, XIcon } from '@primer/octicons-react';
import '../../Styles/CreateAccount.css'

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
        <form  className="editForm" onSubmit={edit}>
            <button onClick={() => editingState("")}><XIcon size={24} className="icon close" /></button>
            <label htmlFor="newQualifications">New Qualifications</label>
            <input type="text" name="newQualifications" value={newQualifications} onChange={(e) => setNewQualifications(e.target.value)} />
            <button className="button" type="submit">Save</button>
        </form>
    )
}

export default EditQualifications;