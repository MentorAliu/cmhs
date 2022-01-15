import React from "react";
import BodyHolder from "../ReusableComponents/BodyHolder";
import DisplayList from "../ReusableComponents/DisplayList";
import HeaderHolder from "../ReusableComponents/HeaderHolder";
import Pagination from "../ReusableComponents/Pagination";
const CarList = ({ carData }) => {
  console.log(carData);
  return (
    <>
      <HeaderHolder>Car List</HeaderHolder>
      <BodyHolder>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <DisplayList>
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Manufacturer
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Table Details
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {carData.map((car, index) => (
                      <tr key={car.chasis}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {car.manufacturer}
                              </div>
                              <div className="text-sm text-gray-500">
                                {car.model}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {car.table}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {car.carStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {car.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            href="google.com"
                            className="text-indigo-600 hover:text-indigo-900 mx-1"
                            // onClick={viewProfile}
                          >
                            View
                          </button>
                          <button
                            href="google.com"
                            className="text-indigo-600 hover:text-indigo-900 mx-1"
                            // onClick={editProfile}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </DisplayList>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </BodyHolder>
    </>
  );
};

export default CarList;
