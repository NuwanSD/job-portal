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
import DashboardCandidate from "../pages/dashboardCandidate/Dashboard";
import DashboardRecruiter from "../pages/dashboardRecruiter/Dashboard";

//Profile users
import ProfileCandidate from "../pages/profileCandidate/Profile";
import ProfileRecruiter from "../pages/profileRecruiter/Profile";

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
            <DashboardCandidate />
          </AuthorizeUser>
        ) : (
          <AuthorizeUser>
            <DashboardRecruiter />
          </AuthorizeUser>
        ),
    },
    {
      path: "/profile/:id",
      element:
        auth.role === "candidate" ? (
          <AuthorizeUser>
            <ProfileCandidate />
          </AuthorizeUser>
        ) : (
          <AuthorizeUser>
            <ProfileRecruiter />
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
