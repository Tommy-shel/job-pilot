import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; 
import FindJobs from "./findjobs";
import Employees from "./employees";
import AboutUs from "./aboutus";
import Admin from "./admin";
import Navbar from "./Navbar";
import Login from "./Login";
import ApplicationForm from "./Apply";

function Linking() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/employees" element={<Employees userRole={localStorage.getItem('role')} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Apply" element={<ApplicationForm/>} />
      </Routes>
 
    </Router>
  );
}

export default Linking;