import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Page";
import Error from "./pages/error/Page";
import Login from "./pages/login/Page";
import Register from "./pages/register/Page";
import Products from "./pages/products/Page";
import Detailed from "./pages/products/detailed/Page";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/products",
    element: <Products />,
    children: [
      {
        path: "/products/:id",
        element: <Detailed />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);
export default Router;
