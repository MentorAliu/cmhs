import React, { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useForm } from "react-hook-form";

const NewClientForm = ({ getCustomerData }) => {
  const { register, handleSubmit, reset } = useForm();

  const [openModal, setOpenModal] = useState(false);

  const cancelButtonRef = useRef(null);

  function onSubmit(data, event) {
    event.preventDefault();
    getCustomerData(data);
    reset();
    setOpenModal(!openModal);
    console.log(data);
  }

  return (
    <>
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
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpenModal}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        New Customer Added Successfully
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpenModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default NewClientForm;
