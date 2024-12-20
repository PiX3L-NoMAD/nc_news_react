import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/topics">Topics</NavLink>
        </nav>
    )
}

export default NavBar;