import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

function Prescription({ state, patientID }) {
    const { setUsers, users, currentUser, currentUserInfo } = useContext(UserContext);
    const [prescription, setPrescription] = useState({});

    function createPrescription() {
        const script = {
            ...prescription,
            id: Date.now().toString(36)
        }
        setPrescription(script);

        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                const newPatients = user.patients.map((patient) => {
                    if (patient.nudgeID === patientID) {
                        return {
                            ...patient,
                            prescriptions: [...patient.prescriptions, prescription]
                        }
                    }
                    else {
                        return patient;
                    }
                });

                return {
                    ...user,
                    patients: newPatients,
                }
            }
            else {
                return user;
            }
        })
        setUsers(newUsers);
        state(false);
    }

    return (
        <React.Fragment>
            <form onSubmit={createPrescription}>
                <h2>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].username}</h2>
                <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].practiceNum}</p>
                <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].address}</p>
                <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].suburb}</p>
                <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].city}</p>
                <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].number}</p>
                <label htmlFor="date">Date:</label>
                <input type="text" name="date" placeholder="Date..." onChange={(e) => setPrescription({...prescription, date: e})} />
                <label htmlFor="icdcode">ICD Code:</label>
                <input type="text" name="icdcode" placeholder="ICD Code..." onChange={(e) => setPrescription({...prescription, code: e})} />
                <label htmlFor="prescription">Prescription:</label>
                <textarea name="icdcode" aria-multiline="true" onChange={(e) => setPrescription({...prescription, content: e})}  />
                {users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].signature !== "" ? (
                    <img src={users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].signature} />
                ) : (
                    <React.Fragment></React.Fragment>
                )}
                <button type="submit">Send</button>
            </form>
        </React.Fragment>
    )
}

export default Prescription;