import { useRoutes, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const SignupPage = lazy(() => import("../pages/signUp"));
const LoginPage = lazy(() => import("../pages/login"));
const Verification = lazy(() => import("../pages/verification"));
const Home = lazy(() => import("../pages/dashboard/home"));
const DashboardLayout = lazy(() => import("../layouts/dashboard"));
const Contact = lazy(() => import("../pages/dashboard/contact"));
const Faq = lazy(() => import("../pages/dashboard/faq"));
const Calendar = lazy(() => import("../pages/dashboard/calendar"));

function Router() {
  const router = useRoutes([
    {
      path: "/",
      element: (
        <DashboardLayout>
          {/* <Suspense fallback={<>Loading</>}> */}
          <Outlet />
          {/* </Suspense> */}
        </DashboardLayout>
      ),
      children: [
        { element: <Home />, index: true },
        { path: "/contact", element: <Contact /> },
        { path: "/faq", element: <Faq /> },
        { path: "/calendar", element: <Calendar /> },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <SignupPage /> },
    { path: "/verification", element: <Verification /> },
  ]);

  return <Suspense fallback={<p>Loading...</p>}>{router}</Suspense>;
}

export default Router;
