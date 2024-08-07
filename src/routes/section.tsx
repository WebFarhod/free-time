import { useRoutes, Outlet } from "react-router-dom";
import { Suspense } from "react";
import SignupPage from "../pages/signUp";
import LoginPage from "../pages/login";
import Verification from "../pages/verification";
import Home from "../pages/dashboard/home";
// import DashboardLayout from "./layouts/DashboardLayout";
// import AdminIndexPage from "./pages/AdminIndexPage";
// import AdminTeachers from "./pages/AdminTeachers";
// import AdminClasses from "./pages/AdminClasses";
// import AdminPrograms from "./pages/AdminPrograms";
// import AdminNews from "./pages/AdminNews";
// import AdminOpinions from "./pages/AdminOpinions";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";

function Router() {
  const router = useRoutes([
    {
      path: "/",
      element: (
        // <DashboardLayout>
        <Suspense>
          <Outlet />
        </Suspense>
        // </DashboardLayout>
      ),
      children: [
        { element: <Home />, index: true },
        // { path: "teachers", element: <AdminTeachers /> },
        // { path: "classes", element: <AdminClasses /> },
        // { path: "programs", element: <AdminPrograms /> },
        // { path: "news", element: <AdminNews /> },
        // { path: "opinions", element: <AdminOpinions /> },
      ],
    },
    { path: "login", element: <LoginPage /> },
    { path: "register", element: <SignupPage /> },
    { path: "verification", element: <Verification /> },
  ]);

  return router;
}

export default Router;
