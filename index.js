import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Contact from "./src/components/Contact/Contact";
import ErrorComponent from "./src/components/ErrorComponent/ErrorComponent";
import MainContainer from "./src/components/MainContainer/MainContainer";
import RestaurantDetails from "./src/components/RestaurantDetails/RestaurantDetails";

const Grocery = lazy(() => import("./src/components/Grocery/Grocery"));
const About = lazy(() => import("./src/components/About/About"));

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
        element: (
          <Suspense fallback={<h2>LOADING</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>LOADING</h2>}>
            <Grocery />
          </Suspense>
        ),
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
