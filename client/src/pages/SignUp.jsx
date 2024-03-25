import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await fetch("http://localhost:5014/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (responce.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center h-[90vh] bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
      >
        <h1 className="text-center text-2xl font-bold">Registration Page</h1>

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
            value={user.username}
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
            value={user.email}
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
            value={user.phone}
            onChange={handleInput}
          />
        </div>
        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            required
            name="password"
            id="password"
            placeholder="Enter your password..."
            className="bg-transparent px-2 py-1 border"
            value={user.password}
            onChange={handleInput}
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold"
        >
          Create account
        </button>
        {/* if user already login then redirect user to login page */}
        <p className="text-center">
          Already have an account? {""}
          <Link to="/login" className="link text-accent cursor-pointer">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
