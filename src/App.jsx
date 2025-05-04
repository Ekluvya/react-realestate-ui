import Layout from "./layout/layout";
import HomePage from "./routes/homePage/homePage";

import {
  createBrowserRouter,
  Route,
  Link,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/react-realestate-ui/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "list",
          element: <ListPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
