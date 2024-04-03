import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authorizationToken } = useAuth();

  const fetchAllUsersData = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsersData();
  }, []);

  const deleteUser = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete user");
      }

      if (res.ok) {
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-gray-300 h-[90vh] p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 py-8 text-center">
          Admin users data
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Update</th>
              <th></th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((currUser) => (
              <tr key={currUser._id} className="border-b border-gray-200">
                <td className="px-4 py-2">{currUser.username}</td>
                <td className="px-4 py-2">{currUser.email}</td>
                <td className="px-4 py-2">{currUser.phone}</td>
                <td className="px-4 py-2 rounded text-black bg-blue-600 text-center w-4">
                  <Link to={`/admin/users/${currUser._id}/edit`}>Edit</Link>
                </td>
                <td className="px-4 py-2 w-4"></td>
                <td
                  className=" cursor-pointer px-4 py-2  bg-red-500 text-black text-center w-4"
                  onClick={() => deleteUser(currUser._id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminUsers;
