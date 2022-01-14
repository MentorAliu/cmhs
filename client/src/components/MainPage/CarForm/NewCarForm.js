import React, { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { carDetails } from "../../../api/carDetails/cars";
import { useForm } from "react-hook-form";
import BodyHolder from "../UI/BodyHolder";
import HeaderHolder from "../UI/HeaderHolder";

const NewCarForm = ({ getCarData }) => {
  const { register, handleSubmit, reset } = useForm();

  const [openModal, setOpenModal] = useState(false);

  const cancelButtonRef = useRef(null);

  function onSubmit(data, event) {
    event.preventDefault();
    getCarData(data);
    reset();
    setOpenModal(!openModal);
  }

  return (
    <BodyHolder>
        <HeaderHolder>Add New Car</HeaderHolder>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-slate-700 sm:p-6">
              <div className="grid grid-cols-6 gap-5">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="manufacturer"
                    className="block text-sm font-medium text-white"
                  >
                    Car Manufacturer
                  </label>
                  <select
                    id="manufacturer"
                    {...register("manufacturer")}
                    name="manufacturer"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {carDetails.map((car) => (
                      <option key={car.name}>{car.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="model"
                    className="block text-sm font-medium text-white"
                  >
                    Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    {...register("model", { required: true })}
                    id="model"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="table"
                    className="block text-sm font-medium text-white"
                  >
                    Table Details
                  </label>
                  <input
                    type="text"
                    {...register("table")}
                    name="table"
                    id="table"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mileage"
                    className="block text-sm font-medium text-white"
                  >
                    Car Mileage / KM
                  </label>
                  <input
                    type="number"
                    {...register("mileage")}
                    name="mileage"
                    id="mileage"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-3">
                  <label
                    htmlFor="carDetails"
                    className="block text-sm font-medium text-white"
                  >
                    Car Details
                  </label>
                  <input
                    type="text"
                    {...register("carDetails")}
                    name="carDetails"
                    id="carDetails"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="chasis"
                    className="block text-sm font-medium text-white"
                  >
                    Chasis Number
                  </label>
                  <input
                    type="text"
                    {...register("chasis")}
                    name="chasis"
                    id="chasis"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="countryOrigin"
                    className="block text-sm font-medium text-white"
                  >
                    Country of Origin
                  </label>
                  <input
                    type="text"
                    {...register("countryOrigin")}
                    name="countryOrigin"
                    id="countryOrigin"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="carColor"
                    className="block text-sm font-medium text-white"
                  >
                    Car Color
                  </label>
                  <input
                    type="text"
                    {...register("carColor")}
                    name="carColor"
                    id="carColor"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="carState"
                    className="block text-sm font-medium text-white"
                  >
                    Car State
                  </label>
                  <select
                    id="carState"
                    {...register("carState")}
                    name="carState"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>New</option>
                    <option>Used</option>
                  </select>
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
                        New Car Added Successfully
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
    </BodyHolder>
  );
};

export default NewCarForm;
