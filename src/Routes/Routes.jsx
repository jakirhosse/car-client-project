import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import Privateroute from "./Privateroure/Privateroute";
import EditBooking from "../Pages/Bookings/EditBooking";
import About from "../Pages/Home/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "book/:id",
        element: <Privateroute><BookService></BookService></Privateroute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "booking",
        element: (
          <Privateroute>
            <Bookings></Bookings>
          </Privateroute>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <Privateroute>
            <EditBooking />
          </Privateroute>
        ),
      },
    ],
  },
]);
