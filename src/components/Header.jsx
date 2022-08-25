import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-10 flex items-center text-gray-500 bg-black cursor-pointer justify-center">
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
};

export default Header;
