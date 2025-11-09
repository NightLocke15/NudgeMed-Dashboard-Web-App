import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Octicon, { PlusIcon, SearchIcon, XIcon } from '@primer/octicons-react';
import '../../Styles/CreateAccount.css'

function EditSuburb({ editingState, currentSuburb }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newSuburb, setNewSuburb] = useState(currentSuburb);

    function edit() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    suburb: newSuburb,
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
            <label htmlFor="newSuburb">New Suburb</label>
            <input type="text" name="newSuburb" value={newSuburb} onChange={(e) => setNewSuburb(e.target.value)} />
            <button className="button" type="submit">Save</button>
        </form>
    )
}

export default EditSuburb;