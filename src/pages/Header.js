import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <Link to="/">All</Link>
                </li>
                <li className="nav-item">
                    <Link to="/active">Active</Link>
                </li>
                <li className="nav-item">
                    <Link to="/completed">Compaleted</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header