import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();

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
      const responce = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (responce.ok) {
        const res_data = await responce.json();
        storeTokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log("login", error);
    }
  };
  return (
    <div className=" flex flex-col justify-center items-center h-[90vh] bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
      >
        <h1 className="text-center text-2xl font-bold">Login Page</h1>

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
          Sign In
        </button>

        <p className="text-center">
          Dont have an account? {""}
          <Link to="/sign-up" className="link text-accent cursor-pointer">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
