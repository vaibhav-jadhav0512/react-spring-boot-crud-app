import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddDepartment from "./components/departments/AddDepartment";
import EditDepartment from "./components/departments/EditDepartment";
import ViewDepartment from "./components/departments/ViewDepartment";
import ViewEmployees from "./components/employees/ViewEmployees";
import AddEmployee from "./components/employees/AddEmployee";
import ViewEmployee from "./components/employees/ViewEmployee";
import EditEmployee from "./components/employees/EditEmployee";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add/department" element={<AddDepartment />} />
          <Route path="/add/employee" element={<AddEmployee />} />
          <Route path="/edit/department/:id" element={<EditDepartment />} />
          <Route path="/view/department/:id" element={<ViewDepartment />} />
          <Route path="/view/employee/:id" element={<ViewEmployee />} />
          <Route path="/edit/employee/:id" element={<EditEmployee />} />
          <Route path="/view/employees/:id" element={<ViewEmployees />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
