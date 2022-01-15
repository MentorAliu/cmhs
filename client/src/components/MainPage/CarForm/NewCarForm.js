import React, { useState } from "react";

import { carDetails } from "../../../api/carDetails/cars";
import { useForm } from "react-hook-form";
import BodyHolder from "../ReusableComponents/BodyHolder";
import HeaderHolder from "../ReusableComponents/HeaderHolder";

const NewCarForm = ({ getCarData }) => {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data, event) {
    event.preventDefault();
    getCarData(data);
    reset();
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
                    htmlFor="carStatus"
                    className="block text-sm font-medium text-white"
                  >
                    Car Status
                  </label>
                  <select
                    id="carStatus"
                    {...register("carStatus")}
                    name="carState"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Active</option>
                    <option>Passive</option>
                    <option>Defect</option>
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
    </BodyHolder>
  );
};

export default NewCarForm;
