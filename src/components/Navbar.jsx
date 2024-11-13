import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className='py-10 w-full'>
            <ul className="flex justify-center gap-10 text-4xl font-bold">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-4 border-blue-500'
                                : 'border-b-4 border-transparent hover:border-blue-500 transition-all duration-300'
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-4 border-blue-500'
                                : 'border-b-4 border-transparent hover:border-blue-500 transition-all duration-300'
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/skill"
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-4 border-blue-500'
                                : 'border-b-4 border-transparent hover:border-blue-500 transition-all duration-300'
                        }
                    >
                        Skill
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/project"
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-4 border-blue-500'
                                : 'border-b-4 border-transparent hover:border-blue-500 transition-all duration-300'
                        }
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? 'border-b-4 border-blue-500'
                                : 'border-b-4 border-transparent hover:border-blue-500 transition-all duration-300'
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
