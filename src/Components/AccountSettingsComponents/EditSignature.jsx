import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Octicon, { PlusIcon, SearchIcon, XIcon } from '@primer/octicons-react';
import '../../Styles/CreateAccount.css'

function EditSignature({ editingState, currentSignature }) {
    const { users, currentUser, setUsers } = useContext(UserContext);
    const [newSignature, setNewSignature] = useState(currentSignature);

    function edit() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    signature: newSignature,
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
            <label htmlFor="newSignature">New Signature</label>
            <input type="file" accept="image/*" name="newSignature" onChange={(e) => setNewSignature(URL.createObjectURL(e.target.files[0]))} />
            <button className="button" type="submit">Save</button>
        </form>
    )
}

export default EditSignature;