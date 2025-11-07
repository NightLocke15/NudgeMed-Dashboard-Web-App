import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

function EditAddress({ editingState, currentAddress }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newAddress, setNewAddress] = useState(currentAddress);

    function edit() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    address: newAddress,
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
            <label htmlFor="newAddress">New Address</label>
            <input type="text" name="newAddress" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}

export default EditAddress;