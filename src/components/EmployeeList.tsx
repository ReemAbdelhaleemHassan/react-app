import React, { useState } from "react";
import employeesData from "data/employees.json/employees.json";
import "./EmployeeList_styles.css";

interface Employee {
  id: number;
  name_in_english: string;
  department: string;
  job_title_english: string;
  marital_status: string;
  religion: string;
  national_id: string;
  expire_date: string;
  gender: string;
  date_of_birth: string;
  place_of_birth: string;
}

const EmployeeList: React.FC = () => {
  const allColumns: string[] = [
    "ID",
    "Name",
    "Department",
    "Job Title",
    "Marital Status",
    "Religion",
    "National ID",
    "Expire Date",
    "Gender",
    "Date of Birth",
    "Place of Birth",
  ];

  const [selectedColumns, setSelectedColumns] = useState<string[]>(allColumns);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedColumns(selectedOptions.includes("All") ? allColumns : selectedOptions);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <div>
        <button onClick={toggleDropdown}>Select Columns</button>
        {showDropdown && (
          <div>
            
            <select
              id="columns"
              multiple
              value={selectedColumns}
              onChange={handleColumnChange}
              style={{ height: "100px" }}
            >
              <option value="All">All</option>
              {allColumns.map((column) => (
                <option key={column} value={column}>
                  {column}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <table>
        <thead>
          <tr>
            {selectedColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee) => (
            <tr key={employee.id}>
              {selectedColumns.map((column) => (
                <td key={column}>{employee[column.toLowerCase().replace(/\s+/g, "_") as keyof Employee]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
