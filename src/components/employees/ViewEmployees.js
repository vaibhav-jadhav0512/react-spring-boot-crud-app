import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const ViewEmployees = () => {
  const { id } = useParams();
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    loadEmployees();
  }, []);
  const loadEmployees = async () => {
    const result = await axios.get(
      `http://localhost:8888/departments/get/employees/${id}`
    );
    setEmployees(result.data.reverse());
  };
  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8888/employee/delete/${id}`);
    loadEmployees();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Employees</h1>
        <table className="table table-striped border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Department ID</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.empName}</td>
                <td>{employee.email}</td>
                <td>{employee.departmentId}</td>
                <td>
                  <Link
                    class="btn btn-outline-dark me-2"
                    to={`/view/employee/${employee.empId}`}
                  >
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary me-2"
                    to={`/edit/employee/${employee.empId}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-outline-danger"
                    to={`/view/employees/${employee.departmentId}`}
                    onClick={() => deleteEmployee(employee.empId)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-outline-dark me-2" to="/add/employee">
          Add Employees
        </Link>
        <Link className="btn btn-outline-warning" to="/">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ViewEmployees;
