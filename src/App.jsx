import Layout from "./layout/layout";
import HomePage from "./routes/homePage/homePage";

import { createHashRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/react-realestate-ui/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <HomePage />,
  //       },
  //       {
  //         path: "list",
  //         element: <ListPage />,
  //       },
  //       {
  //         path: ":id",
  //         element: <SinglePage />,
  //       },
  //     ],
  //   },
  // ]);

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "list", element: <ListPage /> },
        { path: ":id", element: <SinglePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
