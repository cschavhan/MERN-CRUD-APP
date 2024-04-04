import { useEffect, useState } from "react";

import { useAuth } from "../contexts/Auth";

function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authorizationToken } = useAuth();

  const fetchAllUsersContacts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setContacts(data.contacts);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsersContacts();
  }, []);

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
          Admin users Contacts
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              const { username, email, message } = contact;
              return (
                <tr key={contact._id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{username}</td>
                  <td className="px-4 py-2">{email}</td>
                  <td className="px-4 py-2">{message}</td>
                  <td className="px-4 py-2">
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminContacts;
