import ButtonSubmit from "../MainPage/ReusableComponents/ButtonSubmit";
import React, { useState } from "react";
import axios from "axios";
import Link from "../MainPage/ReusableComponents/Link";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "http://127.0.0.1:8800/api/auth/register",
      {
        email,
        password,
        username,
      }
    );
    console.log(response);
  };

  return (
    <div className="h-screen  flex justify-center items-center w-full bg-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Register
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600 max-w">
              Already registered?
              <Link
                href="/auth/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Sign in
              </Link>
            </p>
            <div>
              <label
                htmlFor="username"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="px-4 py-2 outline-none rounded-md w-full"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                required
                id="email"
                className="px-4 py-2 outline-none rounded-md w-full"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="px-4 py-2 outline-none rounded-md w-full"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-around content-center align">
            <ButtonSubmit onSubmit={handleSubmit}>Register</ButtonSubmit>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
