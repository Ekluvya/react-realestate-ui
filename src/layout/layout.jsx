import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Layout = () => {
  return (
    // Layout

    <div className="sm:h-full md:overflow-scroll scrollbar-none h-screen max-w-1366 lg:max-w-1280 md:max-w-768 sm:max-w-640 mx-auto px-5 flex flex-col">
      {/* NAvbar */}
      <div>
        <Navbar />
      </div>
      {/* HomePage */}
      <div className="flex-1 h-full">
        <Outlet />
      </div>
    </div>
  );
};

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      <Navigate to="/login" />;
    }
  }, [currentUser]);
  return currentUser ? (
    // Layout

    <div className="sm:h-full md:overflow-scroll scrollbar-none h-screen max-w-1366 lg:max-w-1280 md:max-w-768 sm:max-w-640 mx-auto px-5 flex flex-col">
      {/* NAvbar */}
      <div>
        <Navbar />
      </div>
      {/* HomePage */}
      <div className="flex-1 h-full">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export { Layout, RequireAuth };
