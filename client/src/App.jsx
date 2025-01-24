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
import Login from "./auth/login";
import SignUp from "./auth/SignUp";
import NotFound from "./components/NotFound";

const AppContent = () => {
  const location = useLocation();
  const noNavbarFooterPaths = ["/login", "/signUp"];

  return (
    <div id="root">
      <div className="main">
        {!noNavbarFooterPaths.includes(location.pathname) && <Navbar />}
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
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!noNavbarFooterPaths.includes(location.pathname) && <Footer />}
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
