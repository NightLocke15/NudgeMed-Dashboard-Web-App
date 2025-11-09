import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Octicon, { PlusIcon, SearchIcon, XIcon } from '@primer/octicons-react';
import '../../Styles/CreateAccount.css'

function EditPracticeNumber({ editingState, currentPracticeNumber }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newPracticeNumber, setNewPracticeNumber] = useState(currentPracticeNumber);

    function edit() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    practiceNum: newPracticeNumber,
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
            <label htmlFor="newPracticeNumber">New Practice Number</label>
            <input type="text" name="newPracticeNumber" value={newPracticeNumber} onChange={(e) => setNewPracticeNumber(e.target.value)} />
            <button className="button" type="submit">Save</button>
        </form>
    )
}

export default EditPracticeNumber;