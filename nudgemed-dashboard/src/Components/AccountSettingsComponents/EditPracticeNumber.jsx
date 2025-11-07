import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

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
        <form onSubmit={edit}>
            <button onClick={() => editingState("")}>Cancel</button>
            <label htmlFor="newPracticeNumber">New Practice Number</label>
            <input type="text" name="newPracticeNumber" value={newPracticeNumber} onChange={(e) => setNewPracticeNumber(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}

export default EditPracticeNumber;