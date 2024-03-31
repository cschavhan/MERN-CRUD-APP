import { NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function AdminLayout() {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="bg-gray-900 text-white w-64 flex-shrink-0">
          <div className="flex flex-col h-full">
            <div className="p-4">
              <h2 className="text-lg font-semibold">Admin Panel</h2>
            </div>

            <nav className="flex-1">
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/admin/users"
                    className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-800"
                  >
                    <FaUsers />
                    <span>Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/contacts"
                    className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-800"
                  >
                    <FaMessage />
                    <span>Contacts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-800"
                  >
                    <FaRegListAlt />
                    <span>Services</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-800"
                  >
                    <FaHome />
                    <span>Home</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gray-100 p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AdminLayout;
