import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  let navigate = useNavigate();
  const [employee, setEmployee] = useState({
    empName: "",
    email: "",
    departmentId: "",
    imgUrl: "",
  });
  const { empName, email, departmentId, imgUrl } = employee;
  let param = "";
  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const [imageSelected, setImageSelected] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "image-management");
    await axios
      .post("https://api.cloudinary.com/v1_1/dncbs5vqt/image/upload", formData)
      .then((response) => {
        param = response.data.secure_url;
        setEmployee({ ...employee, imgUrl: response.data.secure_url });
      });
    console.log(employee);
    await axios
      .post("http://localhost:8888/employee/save", employee)
      .then((resp) =>
        axios.put(
          `http://localhost:8888/employee/url?id=${JSON.stringify(
            resp.data.empId
          )}&url=${param}`
        )
      );
    navigate(`/view/employees/${departmentId}`);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 mt-5">
        <h2 className="text-center mb-4">Add Employee</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Employee Name"
              name="empName"
              value={empName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Department ID"
              name="departmentId"
              value={departmentId}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg mb-3"
              name="imgUrl"
              onChange={(e) => setImageSelected(e.target.files[0])}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
