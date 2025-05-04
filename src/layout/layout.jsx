import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // Layout

    <div className="sm:min-h-screen h-screen max-w-1366 lg:max-w-1280 md:max-w-768 sm:max-w-640 mx-auto px-5 flex flex-col">
      {/* NAvbar */}
      <div>
        <Navbar />
      </div>
      {/* HomePage */}
      <div className="flex-1 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
