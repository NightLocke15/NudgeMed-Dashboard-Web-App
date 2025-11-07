import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';

function Home() {
    const { authenticated, logout, users, currentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [today, setToday] = useState(`${new Date().getFullYear()}-${String(new Date().getMonth()).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`);
    

    return (
        <React.Fragment>
            {authenticated ? (
                <React.Fragment>
                    <section>
                        <article>
                            <Calendar value={today} onChange={(e) => {setToday(e.toISOString().split("T")[0])
                                console.log(e.toISOString().split("T")[0])
                            }}/>
                        </article>
                        <article>
                            <h2>Reminders</h2>
                        </article>
                    </section>
                    <section>
                        <article>
                            <p>Time</p>
                            {users.filter((user) => user.id === currentUser)[0].appointments && users.filter((user) => user.id === currentUser)[0].appointments.map((appointment, key) => (
                                <p key={key}>{appointment}</p>
                            ))}
                        </article>
                        <article>
                            <p>Patient</p>
                            {users.filter((user) => user.id === currentUser)[0].appointments && users.filter((user) => user.id === currentUser)[0].appointments.map((appointment, key) => {
                                const patientCurr = users.filter((user) => user.id === currentUser)[0].patientAppointments && users.filter((user) => user.id === currentUser)[0].patientAppointments.filter((app) => app.date === today && app.time === appointment);
                                if (patientCurr[0] && patientCurr[0].date === today && patientCurr[0].time === appointment) {
                                    return <Link to={`/patients/${patientCurr[0] && patientCurr[0].patient}`} key={patientCurr[0] && patientCurr[0].patient}>{users.filter((user) => user.id === currentUser)[0].patients && users.filter((user) => user.id === currentUser)[0].patients.filter((patient) => patient.nudgeID === patientCurr[0].patient)[0].name}</Link>
                                }    
                                else {
                                    return <p key={key}></p>
                                }                            
                            })}
                        </article>
                    </section>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <h1>Welcome to NUDGEmed</h1>
                    <Link to={"/login"}><p>Log In</p></Link>
                    <Link to={"/createaccount"}><p>Create Account</p></Link>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Home;