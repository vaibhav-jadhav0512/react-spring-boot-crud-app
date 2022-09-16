import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    empId: 0,
    empName: "",
    email: "",
    departmentId: 0,
  });
  const { empId, empName, email, departmentId } = employee;
  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8888/employee/update/${id}`, employee);
    navigate(`/view/employees/${departmentId}`);
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8888/employee/get/${id}`);
    setEmployee(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 mt-5">
        <h2 className="text-center mb-4">Edit Employee</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="empName" className="form-label">
              Employee Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Department Name"
              name="empName"
              value={empName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Employee Mail Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Department Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="departmentId" className="form-label">
              Department ID
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Department ID"
              name="departmentId"
              value={departmentId}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Edit Employee</button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
