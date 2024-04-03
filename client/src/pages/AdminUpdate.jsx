import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import toast from "react-hot-toast";

function AdminUpdate() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // get single user data

  const getSingleUserData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  // update the user

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:8000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        navigate("/admin/users");
        toast.success("user update successfully");
      } else {
        toast.error("user does not update");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center h-[90vh] bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
      >
        <h1 className="text-center text-2xl font-bold">Update User Data</h1>

        {/* fullname */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="font-semibold">
            Username
          </label>
          <input
            type="text"
            required
            name="username"
            id="username"
            placeholder="Enter your name..."
            className="bg-transparent px-2 py-1 border"
            value={data.username}
            onChange={handleInput}
          />
        </div>

        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder="Enter your email..."
            className="bg-transparent px-2 py-1 border"
            value={data.email}
            onChange={handleInput}
          />
        </div>
        {/* phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="font-semibold">
            Phone
          </label>
          <input
            type="number"
            required
            name="phone"
            id="phone"
            placeholder="Enter your phone number..."
            className="bg-transparent px-2 py-1 border"
            value={data.phone}
            onChange={handleInput}
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default AdminUpdate;
