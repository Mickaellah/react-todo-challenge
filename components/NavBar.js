import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/all">All</NavLink></li>
                    <li><NavLink to="/Active">Active</NavLink></li>
                    <li><NavLink to="/completed">Completed</NavLink></li>
                </ul>
            </nav>
            <hr />
        </>
    )
}

export default NavBar