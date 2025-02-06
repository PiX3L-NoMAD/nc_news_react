import { motion } from "framer-motion";
import logo from "../assets/nc-news-logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/home">
      <motion.img
        src={logo}
        alt="NC News Logo"
        className="h-auto md:w-auto max-w-full md:mt-1 pb-1 w-[75%] justify-self-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ rotate: -2 }}
        transition={{ type: "spring", stiffness: 400}}
      />
    </Link>
  );
}

export default Logo;