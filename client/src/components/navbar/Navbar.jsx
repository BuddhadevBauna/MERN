import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";


const Navabar = () => {
    const { isLoggedIn } = useAuth();
    // console.log(isLoggedIn);
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to={'/'}>Buddhadev</NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/services'}>Services</NavLink>
                            </li>
                            {isLoggedIn ?
                                <li>
                                    <NavLink to={'/logout'}>Logout</NavLink>
                                </li>
                                :
                                <>
                                    <li>
                                        <NavLink to={'/register'}>Register</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/login'}>Login</NavLink>
                                    </li>
                                </>
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navabar;