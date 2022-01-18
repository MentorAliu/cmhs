import Modal from "../MainPage/ReusableComponents/Modal";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../MainPage/ReusableComponents/ButtonSubmit";
import ButtonCancel from "../MainPage/ReusableComponents/ButtonCancel";

const Register = () => {
  const navigateLogin = useNavigate();

  return (
    <Modal>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign Up
      </h2>

      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="userName" className="sr-only">
              Username
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
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
            />
          </div>
        </div>

        <div className="flex justify-between">
          <ButtonSubmit>Submit</ButtonSubmit>
          <ButtonCancel onClick={() => navigateLogin("/login")}>
            Cancel
          </ButtonCancel>
        </div>
      </form>
    </Modal>
  );
};

export default Register;