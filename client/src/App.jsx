import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";
import Candidate from "./pages/candidates/Candidate";
import Recruiter from "./pages/recruiters/Recruiter";
import Contact from "./pages/contact/Contact";
import Job from "./pages/FindJobs/Job";
import JobDetail from "./pages/FindJobs/JobDetail";
import RecruiterProfile from "./pages/recruiters/RecruiterProfile";
import CandidateProfile from "./pages/candidates/CandidateProfile";
import NotFound from "./components/NotFound";

//AuthProviders
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Register from "./auth/Register";

//Dashboard users
import Dashboard from "./pages/dashboard/Dashboard";
import EmployeeDashboard from "./pages/empDashboard/Dashboard";

//Profile users
import Profile from "./pages/editProfile/Profile";
import EmployeeProfile from "./pages/empProfile/Profile";

const AppContent = () => {
  const location = useLocation();
  const noNavbarFooterPaths = ["/login", "/signup", "/register", "*"];

  const isNoNavbarFooter = noNavbarFooterPaths.includes(location.pathname);

  return (
    <div id="root">
      <div className="main">
        {!isNoNavbarFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Job />} />
          <Route path="/job/:jobId" element={<JobDetail />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/candidate/:id" element={<CandidateProfile />} />
          <Route path="/recruiters" element={<Recruiter />} />
          <Route
            path="/recruiters/:recruiterId"
            element={<RecruiterProfile />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard/:id" element={<Dashboard />} /> */}
          <Route path="/dashboard/:id" element={<EmployeeDashboard />} />
          {/* <Route path="/profile/:id" element={<Profile />} /> */}
          <Route path="/profile/:id" element={<EmployeeProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isNoNavbarFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
