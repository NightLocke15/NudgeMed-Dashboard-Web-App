import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import Prescription from "./Prescriptions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PatientDetails() {
    const { setUsers, users, currentUser, currentUserInfo } = useContext(UserContext);
    const { id } = useParams();
    const [editing, setEditing] = useState(false);
    const [birthday, setBirthday] = useState(currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].birthday);
    const [patientID, setPatientID] = useState(currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].id);
    const [nudgeID, setNudgeID] = useState(currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].nudgeID);
    const [medAid, setMedAid] = useState(currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].medAid);
    const [medAidNum, setMedAidNum] = useState(currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].medAidNum);
    const [number, setNumber] = useState(currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].number);
    const [email, setEmail] = useState(currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].email);
    const [diagnosis, setDiagnosis] = useState(currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].diagnosis);
    const [notes, setNotes] = useState(currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].notes);
    const [saving, setSaving] = useState(false);
    const [perscriptionState, setPerscriptionState] = useState(false);
    const [viewPresc, setViewPresc] = useState({state: false, presc: {}});
    const [appointment, setAppointment] = useState(false);
    const [appointmentDetails, setAppointmentDetails] = useState({});

    useEffect(() => {
        if (!diagnosis || !notes) {
            setSaving(false);
        }
        setSaving(true);

        const timer = setTimeout(() => {
            const newUsers = users.map((user) => {
                if (user.id === currentUser) {
                    const newPatients = user.patients.map((patient) => {
                        if (patient.nudgeID === id) {
                            return {
                                ...patient,
                                diagnosis: diagnosis,
                                notes: notes,
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
        }, 1000);

        return () => {
            clearTimeout(timer);
        }

    }, [diagnosis, notes])

    function startEdit() {
        setEditing(true);
    }

    function edit() {
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                const newPatients = user.patients.map((patient) => {
                    if (patient.nudgeID === id) {
                        return {
                            ...patient,
                            birthday: birthday,
                            id: id,
                            nudgeID: nudgeID,
                            medAid: medAid,
                            medAidNum: medAidNum,
                            number: number,
                            email: email
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
        setEditing(false);
    }

    function applyAppointment(e) {
        e.preventDefault();
        const newUsers = users.map((user) => {
            if (user.id === currentUser) {
                return {
                    ...user,
                    patientAppointments: [...user.patientAppointments, {patient: id, date: appointmentDetails.date, time: appointmentDetails.time}],
                }
            }
            else {
                return user;
            }
        })
        setUsers(newUsers);
        setAppointment(false);
        console.log(newUsers);
    }

    return (
        <React.Fragment>
            <h2>{currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].name}</h2>
            <section>
                <article>
                    <h3>Patient Details</h3>
                    <button onClick={editing ? edit : startEdit}>{editing ? "Done" : "Edit"}</button>
                    {editing ? (
                        <React.Fragment>
                            <p>Birthday:</p>
                            <input type="text" onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                            <p>ID:</p>
                            <input type="text" onChange={(e) => setPatientID(e.target.value)} value={patientID} />
                            <p>NUDGE ID:</p>
                            <input type="text" onChange={(e) => setNudgeID(e.target.value)} value={nudgeID} />
                            <p>Medical Aid:</p>
                            <input type="text" onChange={(e) => setMedAid(e.target.value)} value={medAid} />
                            <p>Medical Aid Number:</p>
                            <input type="text" onChange={(e) => setMedAidNum(e.target.value)} value={medAidNum} />
                            <p>Number:</p>
                            <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} />
                            <p>Email:</p>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <p>Birthday:</p>
                            <p>{currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].birthday}</p>
                            <p>ID:</p>
                            <p>{currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].id}</p>
                            <p>NUDGE ID:</p>
                            <p>{currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].nudgeID}</p>
                            <p>Medical Aid:</p>
                            <p>{currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].medAid}</p>
                            <p>Medical Aid Number:</p>
                            <p>{currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].medAidNum}</p>
                            <p>Number:</p>
                            <p>{currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].number}</p>
                            <p>Email:</p>
                            <p>{currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].email}</p>
                        </React.Fragment>
                    )}
                    
                </article>
                <article>
                    <h3>Patient Diagnosis</h3>
                    <textarea onChange={(e) => setDiagnosis(e.target.value)} value={diagnosis} aria-multiline="true" />
                </article>
                <article>
                    <h3>Other Notes</h3>
                    <textarea onChange={(e) => setNotes(e.target.value)} value={notes} aria-multiline="true" />
                </article>
                <article>
                    <button onClick={() => setPerscriptionState(true)}>New Prescription</button>
                    <button onClick={() => setAppointment(true)}>New Appointment</button>
                </article>
                <article>
                    <h3>Previous Prescriptions: </h3>
                    {currentUserInfo.patients.filter((patient) => patient.nudgeID === id)[0].prescriptions.map((pres) => (
                        <button onClick={() => setViewPresc({state: true, presc: pres})} key={pres.id}>{pres.date}</button>
                    ))}
                </article>
            </section>
            {perscriptionState ? (
                <section>
                    <Prescription state={setPerscriptionState} patientID={id} />
                </section>
            ) : (
                <React.Fragment>
                </React.Fragment>
            )}
            {viewPresc.state ? (
                <section>
                    <button onClick={() => setViewPresc({state: false, presc: {}})}>Close</button>
                    <h2>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].username}</h2>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].practiceNum}</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].address}</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].suburb}</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].city}</p>
                    <p>{users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].number}</p>
                    <p>Date: {viewPresc.presc.date}</p>
                    <p>ICD Code: {viewPresc.presc.code}</p>
                    <p>{viewPresc.presc.content}</p>
                    {users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].signature !== "" ? (
                        <img src={users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].signature} />
                    ) : (
                        <React.Fragment></React.Fragment>
                    )}                    
                </section>
            ) : (
                <React.Fragment></React.Fragment>
            )}
            {appointment ? (
                <form onSubmit={(e) => applyAppointment(e)}>
                    <p>Date:</p>
                    <DatePicker selected={appointmentDetails.date} onChange={(date) => setAppointmentDetails({...appointmentDetails, date: date.toISOString().split("T")[0]})} dateFormat='yyyy-MM-dd' />
                    <p>Time:</p>
                    <select onChange={(e) => setAppointmentDetails({...appointmentDetails, time: e.target.value})} defaultValue="placeHolder">
                        <option value="placeHolder">Select a time.</option>
                        {users.filter((user) => user.id === currentUser)[0] && users.filter((user) => user.id === currentUser)[0].appointments.map((app, key) => (
                            <option key={key} value={app}>{app}</option>
                        ))}
                    </select>
                    <button type="submit">Set Appointment</button>
                </form>
            ) : (
                <React.Fragment></React.Fragment>
            )}
        </React.Fragment>
    )
}

export default PatientDetails;