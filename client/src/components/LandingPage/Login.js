import React, { useEffect, useState } from "react";
import ButtonSubmit from "../MainPage/ReusableComponents/ButtonSubmit";
import { useNavigate } from "react-router-dom";
import ButtonCancel from "../MainPage/ReusableComponents/ButtonCancel";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "../MainPage/ReusableComponents/Modal";

const Login = () => {
  const navigateRegister = useNavigate();
  const [login, setLogin] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const submitHandler = (data, event) => {
    event.preventDefault();
    reset();
    setLogin(data);
  };

  return (
    <>
      <Modal>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          method="POST"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                {...register("password")}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <ButtonSubmit>Sign in</ButtonSubmit>
            <ButtonCancel
              onClick={() => navigateRegister("/register")}
              className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </ButtonCancel>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default Login;
