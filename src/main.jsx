import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Lamborghini from "./pages/brandPages/Lamborghini";
import Ferrari from "./pages/brandPages/Ferrari";
import RollsRoyce from "./pages/brandPages/RollsRoyce";
import BMW from "./pages/brandPages/BMW";
import Mercedes from "./pages/brandPages/Mercedes";
import Luxury from "./pages/carTypesPages/Luxury";
import Sports from "./pages/carTypesPages/Sports";
import Economy from "./pages/carTypesPages/Economy";
import SUV from "./pages/carTypesPages/SUV";
import HostDashboardLayout from "./pages/host-dashboard/layout/HostDashboardLayout";
import Overview from "./pages/host-dashboard/pages/Overview";
import MyCars from "./pages/host-dashboard/pages/MyCars";
import Bookings from "./pages/host-dashboard/pages/Bookings";
import Earnings from "./pages/host-dashboard/pages/Earnings";
import Profile from "./pages/host-dashboard/pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/host-dashboard",
        element: <HostDashboardLayout />,
        children: [
          {
            path: "/host-dashboard",
            element: <Overview />,
          },
          {
            path: "/host-dashboard/my-cars",
            element: <MyCars />,
          },
          {
            path: "/host-dashboard/bookings",
            element: <Bookings />,
          },
          {
            path: "/host-dashboard/earnings",
            element: <Earnings />,
          },
          {
            path: "/host-dashboard/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forgot",
        element: <ForgotPassword />,
      },
      {
        path: "/brand/lamborghini",
        element: <Lamborghini />,
      },
      {
        path: "/brand/ferrari",
        element: <Ferrari />,
      },
      {
        path: "/brand/rolls-royce",
        element: <RollsRoyce />,
      },
      {
        path: "/brand/bmw",
        element: <BMW />,
      },
      {
        path: "/brand/mercedes",
        element: <Mercedes />,
      },
      {
        path: "/car-types/luxury",
        element: <Luxury />,
      },
      {
        path: "/car-types/sports",
        element: <Sports />,
      },
      {
        path: "/car-types/economy",
        element: <Economy />,
      },
      {
        path: "/car-types/suv",
        element: <SUV />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
