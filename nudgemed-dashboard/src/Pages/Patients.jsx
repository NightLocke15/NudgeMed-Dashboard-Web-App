import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";

function Patients() {
    const { setUsers, users, currentUser } = useContext(UserContext);
    const [patientName, setPatientName] = useState("");
    const [patientID, setPatientID] = useState("");
    const [adding, setAdding] = useState(false);

    function addPatient() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    patients: [...user.patients, {nudgeID: patientID, id: "", name: patientName, birthday: "", medAid: "", medAidNum: "", number: "", email: "", diagnosis: "", notes: "", prescriptions: []}],
                }
            }
            else {
                return user;
            }
        })
        setUsers(newUsers);
        setAdding(false);
    }

    return (
        <React.Fragment>
            <h2>Patients</h2>
            <button onClick={() => setAdding(true)}>Add</button>
            <input type="text" />
            <button>Search</button>
            <section>
                {users.filter((user) => user.id === currentUser)[0].patients && users.filter((user) => user.id === currentUser)[0].patients.map((patient) => (
                    <Link to={`/patients/${patient.nudgeID}`} key={patient.nudgeID}>{patient.name}</Link>
                ))}
            </section>
            {adding ? (
                <form onSubmit={addPatient}>
                    <label htmlFor="patientID">Patient NUDGE ID</label>
                    <input type="text" name="patientID" onChange={(e) => setPatientID(e.target.value)} />
                    <label htmlFor="patientName">Patient Name</label>
                    <input type="text" name="patientName" onChange={(e) => setPatientName(e.target.value)} />
                    <button type="submit">Add</button>
                </form>
            ) : (
                <React.Fragment></React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Patients;