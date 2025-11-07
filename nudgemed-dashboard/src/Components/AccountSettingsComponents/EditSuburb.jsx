import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

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
        <form onSubmit={edit}>
            <button onClick={() => editingState("")}>Cancel</button>
            <label htmlFor="newSuburb">New Suburb</label>
            <input type="text" name="newSuburb" value={newSuburb} onChange={(e) => setNewSuburb(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}

export default EditSuburb;