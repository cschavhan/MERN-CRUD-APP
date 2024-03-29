import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left */}
        <div>
          <h1 className="font-semibold text-xl">
            <NavLink to="/">MERN</NavLink>
          </h1>
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
              <NavLink to="/courses" className="hover:underline">
                Courses
              </NavLink>
            </li>

            {isLoggedIn ? (
              <li>
                <NavLink to="/logout" className="hover:underline">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
