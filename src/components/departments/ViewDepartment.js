import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewDepartment = () => {
  const [department, setDepartment] = useState({
    departmentName: "",
    departmentAddress: "",
    departmentCode: "",
  });
  const { id } = useParams();
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
    <div className="container py-4">
      <h4 className="display-6">Department Id: {id}</h4>
      <ul className="list-group w-80">
        <li className="list-group-item">Name: {department.departmentName}</li>
        <li className="list-group-item">
          Address: {department.departmentAddress}
        </li>
        <li className="list-group-item">Code: {department.departmentCode}</li>
      </ul>
      <Link className="btn btn-outline-success mt-3" to="/">
        Back
      </Link>
    </div>
  );
};

export default ViewDepartment;
