import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  let navigate = useNavigate();
  const [department, setDepartment] = useState({
    departmentName: "",
    departmentAddress: "",
    departmentCode: "",
  });
  const { departmentName, departmentAddress, departmentCode } = department;
  const onInputChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8888/departments/save", department);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 mt-5">
        <h2 className="text-center mb-4">Add Department</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Department Name"
              name="departmentName"
              value={departmentName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Department Address"
              name="departmentAddress"
              value={departmentAddress}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Department Code"
              name="departmentCode"
              value={departmentCode}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Department</button>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
