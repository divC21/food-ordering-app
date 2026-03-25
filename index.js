import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import ErrorComponent from "./src/components/ErrorComponent/ErrorComponent";
import MainContainer from "./src/components/MainContainer/MainContainer";
import RestaurantDetails from "./src/components/RestaurantDetails/RestaurantDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>,
);
