import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/all-articles">Articles</NavLink>
        </nav>
    )
}

export default NavBar;