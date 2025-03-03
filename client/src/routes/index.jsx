import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";

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

const Routes = () => {
  const { token, currentUser } = useAuth();

  const routesForPublic = [
    { path: "/", element: <Home /> },
    { path: "/job", element: <Job /> },
    { path: "/job/:jobId", element: <JobDetail /> },
    { path: "/candidate", element: <Candidate /> },
    { path: "/candidate/:id", element: <CandidateProfile /> },
    { path: "/recruiters", element: <Recruiter /> },
    { path: "/recruiters/:recruiterId", element: <RecruiterProfile /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/dashboard/:id",
          element:
            currentUser && currentUser.role === "candidate" ? (
              <Dashboard />
            ) : (
              <EmployeeDashboard />
            ),
        },
        {
          path: "/profile/:id",
          element:
            currentUser && currentUser.role === "candidate" ? (
              <Profile />
            ) : (
              <EmployeeProfile />
            ),
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/register", element: <Register /> },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
