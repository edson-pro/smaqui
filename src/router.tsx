import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ArticleDetails from "./pages/articles/ArticleDetails";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/articles",
        children: [
          {
            path: ":id",
            element: <ArticleDetails />,
          },
        ],
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

export default router;
