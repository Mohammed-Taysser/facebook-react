import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink activeClassName='is_active' exact to="/">home</NavLink></li>
                <li><NavLink activeClassName='is_active' exact to="/about">about</NavLink></li>
                <li><NavLink activeClassName='is_active' exact to="/users">users</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;