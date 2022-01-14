import Pagination from "./Pagination";
import CustomerDescriptionList from "../ClientForm/CustomerDescriptionList";
import React, { useState } from "react";
import faker from "faker";

const CustomerList = ({ customerData }) => {
  const [showDescList, setShowDescList] = useState(false);

  const editProfile = () => {};

  const viewProfile = (event) => {
    event.preventDefault();
    setShowDescList(!showDescList);
  };

  const printFaker = () => {
    let fakerList = [];

    for (let i = 0; i < 10; i++) {
      fakerList.push({ fakerName: faker.name.findName() });
    }
    return fakerList;
  };

  const fakerData = printFaker();

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Emri Mbiemri
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID Number
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
                {customerData.map((person) => (
                  <tr key={person.idNumber}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.mbiemri} {person.emri}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.idNumber}
                      </div>
                      <div className="text-sm text-gray-500">
                        {person.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        href="google.com"
                        className="text-indigo-600 hover:text-indigo-900 mx-1"
                        onClick={viewProfile}
                      >
                        View
                      </button>
                      <button
                        href="google.com"
                        className="text-indigo-600 hover:text-indigo-900 mx-1"
                        onClick={editProfile}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination />
      {showDescList && (
        <CustomerDescriptionList
          customerData={customerData}
          showDescList={showDescList}
        />
      )}
    </div>
  );
};

export default CustomerList;
