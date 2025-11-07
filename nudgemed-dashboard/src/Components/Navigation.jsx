import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";

function Navigation() {
    const { authenticated } = useContext(UserContext);
    const pages = [
        {
            name: "Home",
            href: "/",
            class: "notCurrent",
        },
        {
            name: "Patients",
            href: "/patients",
            class: "notCurrent",
        },
        {
            name: "Account",
            href: "/account",
            class: "notCurrent",
        },
    ]

    return (
        <React.Fragment>
            <h1>NUDGEmed</h1>
            {authenticated ? (
                <section>
                    {pages.map((page, key) => (
                        <Link key={key} className={page.class} to={page.href}>{page.name}</Link>
                    ))}
                </section>
            ) : (
                <React.Fragment></React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Navigation;