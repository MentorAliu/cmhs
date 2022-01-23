import React, { useState } from "react";
import ButtonSubmit from "../MainPage/ReusableComponents/ButtonSubmit";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const submitNavigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    submitNavigate("/");
  };

  return (
    <div className="h-screen  flex justify-center items-center w-full bg-gray-100">
      <form onSubmit={submitHandler}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Login
            </h1>
            <p class="mt-2 text-center text-sm text-gray-600 max-w">
              <Link
                to={"/register"}
                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Register
              </Link>
            </p>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
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
            <ButtonSubmit>Login</ButtonSubmit>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
