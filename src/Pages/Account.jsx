import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import EditUsername from "../Components/AccountSettingsComponents/EditUsername";
import EditEmail from "../Components/AccountSettingsComponents/EditEmail";
import EditPassword from "../Components/AccountSettingsComponents/EditPassword";
import EditSignature from "../Components/AccountSettingsComponents/EditSignature";
import { useNavigate } from "react-router-dom";
import EditQualifications from "../Components/AccountSettingsComponents/EditQualifications";
import EditPracticeNumber from "../Components/AccountSettingsComponents/EditPracticeNumber";
import EditAddress from "../Components/AccountSettingsComponents/EditAddress";
import EditSuburb from "../Components/AccountSettingsComponents/EditSuburb";
import EditCity from "../Components/AccountSettingsComponents/EditCity";
import EditNumber from "../Components/AccountSettingsComponents/EditNumber";
import '../Styles/Account.css'

function Account() {
    const { users, currentUser, logout } = useContext(UserContext);
    const [editing, setEditing] = useState("");
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <section className="accountArea">
                <h1 className="pageHeadings">Account</h1>
                <article>
                    <div className="accountDetail">
                    <p>Username:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].username}</p>        
                    </div>            
                    <button className="otherButton" onClick={() => setEditing("username")}>Edit</button>
                </article>
                <article>
                    <div className="accountDetail">
                    <p>Email:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].email}</p>
                    </div>
                    <button className="otherButton" onClick={() => setEditing("email")}>Edit</button>
                </article>
                <article>
                    <div className="accountDetail">
                    <p>Password:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].password}</p>
                    </div>
                    <button className="otherButton" onClick={() => setEditing("password")}>Edit</button>
                </article>
                <h3>Doctor Details</h3>
                <article>
                    <div className="accountDetail">
                    <p>Qualifications:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].qualifications}</p>
                    </div>
                    <button className="otherButton" onClick={() => setEditing("qualifications")}>Edit</button>
                </article>
                <article>
                    <div className="accountDetail">
                    <p>Practice Number:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].practiceNum}</p>
                    </div>
                    <button className="otherButton" onClick={() => setEditing("practiceNumber")}>Edit</button>
                </article>
                <article>
                    <div className="accountDetail">
                    <p>Street Address:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].address}</p>
                    </div>
                    <button className="otherButton" onClick={() => setEditing("address")}>Edit</button>
                </article>
                <article>
                    <div className="accountDetail">
                    <p>Suburb:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].suburb}</p>
                    </div>
                    <button className="otherButton" onClick={() => setEditing("suburb")}>Edit</button>
                </article>
                <article>
                    <div className="accountDetail">
                    <p>City/Town:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].city}</p>
                    </div>
                    <button className="otherButton" onClick={() => setEditing("city")}>Edit</button>
                </article>
                <article>
                    <div className="accountDetail">
                    <p>Telephone Number:</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].number}</p>
                    </div>
                    <button className="otherButton" onClick={() => setEditing("number")}>Edit</button>
                </article>
                <article>
                    <div className="accountDetail">
                    <p>Signature:</p>
                    {users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].signature !== "" ? (
                        <img src={users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].signature} />
                    ) : (
                        <React.Fragment></React.Fragment>
                    )}
                    </div>
                    <button className="otherButton" onClick={() => setEditing("signature")}>Edit</button>
                </article>
                <button className="button" onClick={logout}>Logout</button>
            </section>
            {editing === "username" ? (
                <EditUsername editingState={setEditing} currentUsername={users.filter((user) => user.id === currentUser)[0].username} />
            ) : 
            editing === "email" ? (
                <EditEmail editingState={setEditing} currentEmail={users.filter((user) => user.id === currentUser)[0].email} />
            ) : 
            editing === "password" ? (
                <EditPassword editingState={setEditing} currentPassword={users.filter((user) => user.id === currentUser)[0].password} />
            ) : 
            editing === "signature" ? (
                <EditSignature editingState={setEditing} currentSignature={users.filter((user) => user.id === currentUser)[0].signature} />
            ) : 
            editing === "qualifications" ? (
                <EditQualifications editingState={setEditing} currentQualifications={users.filter((user) => user.id === currentUser)[0].qualifications} />
            ) : 
            editing === "practiceNumber" ? (
                <EditPracticeNumber editingState={setEditing} currentPracticeNumber={users.filter((user) => user.id === currentUser)[0].practiceNum} />
            ) : 
            editing === "address" ? (
                <EditAddress editingState={setEditing} currentAddress={users.filter((user) => user.id === currentUser)[0].address} />
            ) : 
            editing === "suburb" ? (
                <EditSuburb editingState={setEditing} currentSuburb={users.filter((user) => user.id === currentUser)[0].suburb} />
            ) : 
            editing === "city" ? (
                <EditCity editingState={setEditing} currentCity={users.filter((user) => user.id === currentUser)[0].city} />
            ) : 
            editing === "number" ? (
                <EditNumber editingState={setEditing} currentNumber={users.filter((user) => user.id === currentUser)[0].number} />
            ) : (
                <React.Fragment>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Account;