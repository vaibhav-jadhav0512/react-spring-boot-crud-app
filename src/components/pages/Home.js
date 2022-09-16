import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [departments, setDepartment] = useState([]);
  useEffect(() => {
    loadDepartments();
  }, []);
  const loadDepartments = async () => {
    const result = await axios.get("http://localhost:8888/departments/get/all");
    setDepartment(result.data.reverse());
  };
  const deleteDepartment = async (id) => {
    await axios.delete(`http://localhost:8888/departments/delete/${id}`);
    loadDepartments();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Departments</h1>
        <table className="table table-striped border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Code</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department, index) => (
              <tr key={department.departmentId}>
                <td>{department.departmentId}</td>
                <td>{department.departmentName}</td>
                <td>{department.departmentAddress}</td>
                <td>{department.departmentCode}</td>
                <td>
                  <Link
                    class="btn btn-outline-dark me-2"
                    to={`/view/department/${department.departmentId}`}
                  >
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary me-2"
                    to={`/edit/department/${department.departmentId}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-outline-danger me-2"
                    to="/"
                    onClick={() => deleteDepartment(department.departmentId)}
                  >
                    Delete
                  </Link>
                  <Link
                    class="btn btn-outline-success"
                    to={`/view/employees/${department.departmentId}`}
                  >
                    Employees
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-outline-dark" to="/add/department">
          Add Department
        </Link>
      </div>
    </div>
  );
};

export default Home;
