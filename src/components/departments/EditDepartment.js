import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditDepartment = () => {
  let navigate = useNavigate();
  const { id } = useParams();
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
    await axios.put(
      `http://localhost:8888/departments/update/${id}`,
      department
    );
    navigate("/");
  };

  useEffect(() => {
    loadDepartment();
  }, []);

  const loadDepartment = async () => {
    const result = await axios.get(
      `http://localhost:8888/departments/get/${id}`
    );
    setDepartment(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 mt-5">
        <h2 className="text-center mb-4">Edit Department</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="departmentName" className="form-label">
              Department Name
            </label>
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
            <label htmlFor="departmentAddress" className="form-label">
              Department Address
            </label>
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
            <label htmlFor="departmentCode" className="form-label">
              Department Code
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Department Code"
              name="departmentCode"
              value={departmentCode}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Edit Department</button>
        </form>
      </div>
    </div>
  );
};

export default EditDepartment;
