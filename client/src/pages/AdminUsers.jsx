import { useEffect, useState } from "react";
import { useAuth } from "../contexts/Auth";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await res.json();
      console.log("admin", data);

      if (res.ok) {
        setUsers(data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
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
              {users &&
                users.map((curVal, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-4 py-2">{curVal.username}</td>
                    <td className="px-4 py-2">{curVal.email}</td>
                    <td className="px-4 py-2">{curVal.phone}</td>
                    <td className="px-4 py-2 rounded text-black bg-blue-600 text-center w-4">
                      Edit
                    </td>

                    <td className="px-4 py-2 w-4"></td>
                    <td className="px-4 py-2  bg-red-500 text-black text-center w-4">
                      Delete
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminUsers;
