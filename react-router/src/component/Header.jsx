import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav className="bg-purple-600 p-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "mx-6 cursor-pointer text-red-200 active text-xl" : "mx-6 cursor-pointer text-white text-xl"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "mx-6 cursor-pointer text-red-200 active text-xl" : "mx-6 cursor-pointer text-white text-xl"
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "mx-6 cursor-pointer text-red-200 active text-xl" : "mx-6 cursor-pointer text-white text-xl"
                        }
                    >
                        About
                    </NavLink>
                </nav>
            </header>
        </>
    );
}
