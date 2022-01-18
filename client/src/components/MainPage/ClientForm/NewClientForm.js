import React from "react";
import BodyHolder from "../ReusableComponents/BodyHolder";
import { useForm } from "react-hook-form";
import HeaderHolder from "../ReusableComponents/HeaderHolder";

const NewClientForm = ({ fetchCustomerData }) => {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data, event) {
    event.preventDefault();
    fetchCustomerData(data);
    reset();
  }

  return (
    <BodyHolder>
      <HeaderHolder>Add New Customer</HeaderHolder>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-slate-700 sm:p-6">
              <div className="grid grid-cols-6 gap-5">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mbiemri"
                    className="block text-sm font-medium text-white"
                  >
                    Mbiemri
                  </label>
                  <input
                    type="text"
                    name="mbiemri"
                    {...register("mbiemri", { required: true })}
                    id="mbiemri"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="emri"
                    className="block text-sm font-medium text-white"
                  >
                    Emri
                  </label>
                  <input
                    type="text"
                    {...register("emri")}
                    name="emri"
                    id="emri"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="bornDate"
                    className="block text-sm font-medium text-white"
                  >
                    Born Date
                  </label>
                  <input
                    type="date"
                    {...register("bornDate")}
                    name="bornDate"
                    id="bornDate"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-3">
                  <label
                    htmlFor="nationality"
                    className="block text-sm font-medium text-white"
                  >
                    Nationality
                  </label>
                  <input
                    type="text"
                    {...register("nationality")}
                    name="nationality"
                    id="nationality"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="expDate"
                    className="block text-sm font-medium text-white"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    {...register("expDate")}
                    name="expDate"
                    id="expDate"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="countryOrigin"
                    className="block text-sm font-medium text-white"
                  >
                    Place of Birth
                  </label>
                  <input
                    type="text"
                    {...register("birthPlace")}
                    name="birthPlace"
                    id="birthPlace"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-white"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    {...register("gender")}
                    name="carState"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="personalNumber"
                    className="block text-sm font-medium text-white"
                  >
                    Personal Number
                  </label>
                  <input
                    type="number"
                    {...register("personalNumber")}
                    name="personalNumber"
                    id="personalNumber"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="idNumber"
                    className="block text-sm font-medium text-white"
                  >
                    ID Number
                  </label>
                  <input
                    type="number"
                    {...register("idNumber")}
                    name="idNumber"
                    id="idNumber"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    placeholder="044/049-111-111"
                    type="number"
                    {...register("phoneNumber")}
                    name="phoneNumber"
                    id="phoneNumber"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-white"
                  >
                    Attach ID File
                  </label>
                  <input
                    placeholder="Attach File"
                    type="file"
                    {...register("fileAttach")}
                    name="fileAttach"
                    id="fileAttach"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </BodyHolder>
  );
};

export default NewClientForm;
