import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./router/homepage";
import AboutUs from "./router/aboutus";
import ContactUs from "./router/contactus";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
  ]);
  return <RouterProvider router={router} />;
}
