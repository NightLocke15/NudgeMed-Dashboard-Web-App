import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";
import '../Styles/Patients.css'
import Octicon, { PlusIcon, SearchIcon, XIcon } from '@primer/octicons-react';

function Patients() {
    const { setUsers, users, currentUser } = useContext(UserContext);
    const [patientName, setPatientName] = useState("");
    const [patientID, setPatientID] = useState("");
    const [adding, setAdding] = useState(false);
    const [search, setSearch] = useState("");

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
            <div className="patientsList">
                <section className="patientsHeader">
                    <article className="headerSect">
                        <h2 className="pageHeadings">Patients</h2>
                        <button onClick={() => setAdding(true)}>
                            <PlusIcon className="icon" size={24} />
                        </button>
                    </article>
                    <article className="headerSect">
                        <input className="searchInput" type="text" placeholder="Search..."/>
                        <button>
                            <SearchIcon className="icon" size={24} />
                        </button>
                    </article>
                </section>            
                <section>
                    {users.filter((user) => user.id === currentUser)[0].patients && users.filter((user) => user.id === currentUser)[0].patients.map((patient) => (
                        <Link to={`/patients/${patient.nudgeID}`} className="link" key={patient.nudgeID}><p className="patientPageItem patient">{patient.name}</p></Link>
                    ))}
                </section>
                {adding ? (
                    <form className="addPatient" onSubmit={addPatient}>
                        <XIcon  className="close" size={24} onClick={() => setAdding(false)} />
                        <label htmlFor="patientID">Patient NUDGE ID</label>
                        <input type="text" name="patientID" onChange={(e) => setPatientID(e.target.value)} placeholder="NUDGE ID..." />
                        <label htmlFor="patientName">Patient Name</label>
                        <input type="text" name="patientName" onChange={(e) => setPatientName(e.target.value)} placeholder="Name..." />
                        <button className="button" type="submit">Add</button>
                    </form>
                ) : (
                    <React.Fragment></React.Fragment>
                )}
            </div>            
        </React.Fragment>
    )
}

export default Patients;