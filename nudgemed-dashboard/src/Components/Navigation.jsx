import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link, useLocation } from "react-router-dom";
import '../Styles/Navigation.css'

function Navigation() {
    const { authenticated } = useContext(UserContext);
    const pages = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Patients",
            href: "/patients",
        },
        {
            name: "Account",
            href: "/account",
        },
    ]

    const location = useLocation();

    return (
        <header>
            <Link className="logoHolder" to="/">
                <p className="logoOne">NUDGE</p>
                <p className="logoTwo">med</p>
            </Link>            
            {authenticated ? (
                <section className="linksHolderNav">
                    {pages.map((page, key) => (
                        <Link key={key} to={page.href} className="link"><p className={location.pathname === page.href ? "navButton" : "notCurrent"}>{page.name}</p></Link>
                    ))}
                </section>
            ) : (
                <React.Fragment></React.Fragment>
            )}
        </header>
    )
}

export default Navigation;