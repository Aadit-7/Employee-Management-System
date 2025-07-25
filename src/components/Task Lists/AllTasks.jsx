import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const rowColors = [
  "bg-red-50",
  "bg-yellow-50",
  "bg-green-50",
  "bg-blue-50",
  "bg-indigo-50",
  "bg-purple-50",
];

const AllTasks = () => {
  const authdata = useContext(AuthContext);
  const employees = authdata.employees || [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 px-20">All Employees</h1>
      <div className="bg-white p-6 rounded shadow px-20">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Employee Name",
                "Active Tasks",
                "Completed",
                "Failed",
                "New Tasks",
              ].map((heading, i) => (
                <th
                  key={i}
                  className="px-6 py-4 text-left text-base font-semibold text-black uppercase align-middle"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((employee, index) => (
              <tr
                key={employee.id || index}
                className={`${rowColors[index % rowColors.length]}`}
              >
                <td className="px-6 py-4 align-middle text-base font-medium text-gray-800 whitespace-nowrap">
                  {employee.firstName}
                </td>
                <td className="px-6 py-4 align-middle text-base text-gray-700 whitespace-nowrap">
                  {employee.taskNumbers.active}
                </td>
                <td className="px-6 py-4 align-middle text-base text-gray-700 whitespace-nowrap">
                  {employee.taskNumbers.completed}
                </td>
                <td className="px-6 py-4 align-middle text-base text-gray-700 whitespace-nowrap">
                  {employee.taskNumbers.failed}
                </td>
                <td className="px-6 py-4 align-middle text-base text-gray-700 whitespace-nowrap">
                  {employee.taskNumbers.newTask}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTasks;
