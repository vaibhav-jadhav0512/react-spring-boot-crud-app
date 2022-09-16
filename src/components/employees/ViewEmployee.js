import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Image } from "cloudinary-react";

const ViewEmployee = () => {
  const [employee, setEmployee] = useState({
    empId: 0,
    empName: "",
    email: "",
    departmentId: 0,
    imgUrl: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadEmployee();
  }, []);
  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8888/employee/get/${id}`);
    setEmployee(result.data);
  };
  return (
    <div className="container py-4">
      <h4 className="display-6">Employee Id: {id}</h4>
      <Image
        style={{ width: 200 }}
        cloudName="dncbs5vqt"
        publicId={employee.imgUrl}
      />
      <hr />
      <ul className="list-group w-80">
        <li className="list-group-item">Employee Name: {employee.empName}</li>
        <li className="list-group-item">Email: {employee.email}</li>
        <li className="list-group-item">
          Department Id: {employee.departmentId}
        </li>
      </ul>
      <Link
        className="btn btn-outline-success mt-3"
        to={`/view/employees/${employee.departmentId}`}
      >
        Back
      </Link>
    </div>
  );
};

export default ViewEmployee;
