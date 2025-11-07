import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

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
        <form onSubmit={edit}>
            <button onClick={() => editingState("")}>Cancel</button>
            <label htmlFor="newNumber">New Number</label>
            <input type="text" name="newNumber" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}

export default EditNumber;