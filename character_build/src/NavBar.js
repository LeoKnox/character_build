import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li class="links">
                <Link to="/">Home</Link>
            </li>
            <li class="links">
                <Link to="/about">About</Link>
            </li>
            <li class="links">
                <Link to="/characters-list">Characters List</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;