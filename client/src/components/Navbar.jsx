import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left */}
        <div>
          <h1 className="font-semibold text-xl">MERN</h1>
        </div>
        {/* Right */}
        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink exact to="/" className="hover:underline ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:underline">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="hover:underline">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" className="hover:underline">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
