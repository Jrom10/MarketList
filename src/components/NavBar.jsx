import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <>
            <div className="header">
                <div className="headerTittleContainer">
                    <NavLink to='/' className="links">
                    <h1 className="headerTittle">Market List</h1>
                    </NavLink>
                </div>
            </div>;
        </>
    )
}

export default NavBar;