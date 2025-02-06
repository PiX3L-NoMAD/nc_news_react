import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="flex list-none justify-center mt-3 text-base md:text-xl md:items-center gap-5 p-2 sticky">
      {["Home", "Articles", "Topics"].map((item) => (
        <motion.div
          key={item}
          whileHover={{ scale: 1.2, color: "#4e1eb6" }}
          transition={{ type: "spring", stiffness: 400}}
        >
          <NavLink to={`/${item.toLowerCase()}`} className="font-medium text-[#231136] no-underline relative hover:text-[#4e1eb6] after:block after:h-[2px] after:w-0 after:bg-[#4e1eb6] after:transition-all after:duration-300 after:ease-out hover:after:w-full">
            {item}
          </NavLink>
        </motion.div>
      ))}
    </nav>
  );
};

export default NavBar;
