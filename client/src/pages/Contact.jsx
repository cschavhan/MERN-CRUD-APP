import { useState } from "react";
import { useAuth } from "../contexts/Auth";

function Contact() {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setUserInput({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      if (res.ok) {
        setUserInput({
          username: user.username,
          email: user.email,
          message: "",
        });
        alert("message sent successfully");
      }
    } catch (error) {
      console.log("contact error", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[90vh] bg-gray-800">
      <form
        onSubmit={onSubmitForm}
        className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]"
      >
        <h1 className="text-3xl font-semibold">Contact Form</h1>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="username" className="text-xl font-semibold">
            Username
          </label>
          <input
            className="bg-transparent border px-2 py-1 rounded-sm"
            id="username"
            type="text"
            placeholder="Enter your name"
            name="username"
            onChange={handleUserInput}
            value={userInput.username}
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email" className="text-xl font-semibold">
            Email
          </label>
          <input
            className="bg-transparent border px-2 py-1 rounded-sm"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleUserInput}
            value={userInput.email}
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="message" className="text-xl font-semibold">
            Message
          </label>
          <textarea
            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
            id="message"
            name="message"
            placeholder="Enter your message"
            onChange={handleUserInput}
            value={userInput.message}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-500  hover:text-black transition-all ease-in-out duration-300 rounded-sm py-2 font-bold text-lg cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
