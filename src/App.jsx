import { Layout, RequireAuth } from "./layout/layout";
import HomePage from "./routes/homePage/homePage";

import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import UpdateUser from "./routes/updateUser/updateUser";
import NewPostPage from "./routes/createPostPage/createPostPage";
import { listPageLoader, singlePageLoader } from "./loaders/loaders";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <HomePage /> },

        {
          path: "post/:id",
          loader: singlePageLoader,
          element: <SinglePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "update",
          element: <UpdateUser />,
        },
        {
          path: "createPost",
          element: <NewPostPage />,
        },
        { path: "list", loader: listPageLoader, element: <ListPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
