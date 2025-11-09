import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Octicon, { PlusIcon, SearchIcon, XIcon } from '@primer/octicons-react';
import '../../Styles/CreateAccount.css'

function EditNumber({ editingState, currentNumber }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newNumber, setNewNumber] = useState(currentNumber);

    function edit() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    number: newNumber,
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
            <label htmlFor="newNumber">New Number</label>
            <input type="text" name="newNumber" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
            <button className="button" type="submit">Save</button>
        </form>
    )
}

export default EditNumber;