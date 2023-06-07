import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./router/homepage";
import AboutUs from "./router/aboutus";
import ContactUs from "./router/contactus";
import RootLayout from "./config/rootLayout";
import FoodDetails from "./router/foodDetails";
import FoodInfo from "./router/foodInfo";
import Admin from "./router/admin";
import Food from "./router/food";
import Users from "./router/users";
export default function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/food",
          element: <Food />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/food/:id",
          element: <FoodDetails />,
        },
        {
          path: "/food-info",
          element: <FoodInfo />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
