import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:p-8 p-3 mb-2 flex flex-col items-center md:flex-row md:justify-evenly">
            <Logo />
            <NavBar />
        </header>
    )
}

export default Header;
