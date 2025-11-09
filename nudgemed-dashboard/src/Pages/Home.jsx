import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
import '../Styles/Home.css'
//import 'react-calendar/dist/Calendar.css';

function Home() {
    const { authenticated, logout, users, currentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [today, setToday] = useState(`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`);
    

    return (
        <React.Fragment>
            {authenticated ? (
                <React.Fragment>
                    <div className="homePageContent">
                        <section className="calendarRemind">
                            <article className="calendarStuff">
                                    <Calendar 
                                        value={today} 
                                        onChange={(e) =>setToday(e.toLocaleDateString().split("T")[0].replace("/", "-").replace("/", "-"))}                                        
                                    />                          
                            </article>
                        </section>
                        <section className="schedule">
                            <article>
                                <p className="tableHeader">Time</p>
                                {users.filter((user) => user.id === currentUser)[0].appointments && users.filter((user) => user.id === currentUser)[0].appointments.map((appointment, key) => (
                                    <p className="timeStamp" key={key}>{appointment}</p>
                                ))}
                            </article>
                            <article>
                                <p className="tableHeader">Patient</p>
                                {users.filter((user) => user.id === currentUser)[0].appointments && users.filter((user) => user.id === currentUser)[0].appointments.map((appointment, key) => {
                                    const patientCurr = users.filter((user) => user.id === currentUser)[0].patientAppointments && users.filter((user) => user.id === currentUser)[0].patientAppointments.filter((app) => app.date === today && app.time === appointment);
                                    if (patientCurr[0] && patientCurr[0].date === today && patientCurr[0].time === appointment) {
                                        return <Link className="link" to={`/patients/${patientCurr[0] && patientCurr[0].patient}`} key={patientCurr[0] && patientCurr[0].patient}><p className="patient" >{users.filter((user) => user.id === currentUser)[0].patients && users.filter((user) => user.id === currentUser)[0].patients.filter((patient) => patient.nudgeID === patientCurr[0].patient)[0].name}</p></Link>
                                    }    
                                    else {
                                        return <p key={key} className="patient"></p>
                                    }                            
                                })}
                            </article>
                        </section>
                    </div>                    
                </React.Fragment>
            ) : (
                <React.Fragment>                    
                    <section className="logoHolderHome">
                        <p className="welcomeMsg">Welcome to</p>
                        <h1 className="logoOneHome">NUDGE</h1>
                        <p className="logoTwoHome">med</p>
                    </section>    
                    <section className="linkHolderHome">
                        <Link to={"/login"} className="link"><p className="button">Log In</p></Link>
                        <Link to={"/createaccount"} className="link"><p className="button">Create Account</p></Link>
                    </section>                      
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Home;
