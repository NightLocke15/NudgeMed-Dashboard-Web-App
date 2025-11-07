import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

function EditCity({ editingState, currentCity }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newCity, setNewCity] = useState(currentCity);

    function edit() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    city: newCity,
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
            <label htmlFor="newCity">New City</label>
            <input type="text" name="newCity" value={newCity} onChange={(e) => setNewCity(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}

export default EditCity;