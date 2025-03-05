import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/home/Home";
import Candidate from "../pages/candidates/Candidate";
import Recruiter from "../pages/recruiters/Recruiter";
import Contact from "../pages/contact/Contact";
import Job from "../pages/FindJobs/Job";
import JobDetail from "../pages/FindJobs/JobDetail";
import RecruiterProfile from "../pages/recruiters/RecruiterProfile";
import CandidateProfile from "../pages/candidates/CandidateProfile";
import NotFound from "../components/NotFound";

//AuthProviders
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Register from "../components/Register";

//Dashboard users
import Dashboard from "../pages/dashboard/Dashboard";
import EmployeeDashboard from "../pages/empDashboard/Dashboard";

//Profile users
import Profile from "../pages/editProfile/Profile";
import EmployeeProfile from "../pages/empProfile/Profile";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//Middleware
import { AuthorizeUser, ProtectRoute } from "../middleware/auth";
import { useAuthStore } from "../store/authStore";

const AppRoutes = () => {
  const { auth } = useAuthStore();

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/job", element: <Job /> },
    { path: "/job/:jobId", element: <JobDetail /> },
    { path: "/candidate", element: <Candidate /> },
    { path: "/candidate/:id", element: <CandidateProfile /> },
    { path: "/recruiters", element: <Recruiter /> },
    { path: "/recruiters/:recruiterId", element: <RecruiterProfile /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/dashboard/:id",
      element:
        auth.role === "candidate" ? (
          <AuthorizeUser>
            <Dashboard />
          </AuthorizeUser>
        ) : (
          <AuthorizeUser>
            <EmployeeDashboard />
          </AuthorizeUser>
        ),
    },
    {
      path: "/profile/:id",
      element:
        auth.role === "candidate" ? (
          <AuthorizeUser>
            <Profile />
          </AuthorizeUser>
        ) : (
          <AuthorizeUser>
            <EmployeeProfile />
          </AuthorizeUser>
        ),
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/register", element: <Register /> },
  ];

  const location = useLocation();
  const noNavbarFooterPaths = ["/login", "/signup", "/register"];

  const isNoNavbarFooter = noNavbarFooterPaths.includes(location.pathname);

  return (
    <div id="root">
      <div className="main">
        {!isNoNavbarFooter && <Navbar />}
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      {!isNoNavbarFooter && <Footer />}
    </div>
  );
};

export default AppRoutes;
