import { useState } from "react";
import logo from "../../public/logo.png";
import menu from "../../public/menu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav className="h-24 flex justify-between items-center">
      {/* Left */}
      <div className="flex-[3_3_0%] flex items-center gap-12">
        <a className="font-bold text-xl flex gap-2.5 items-center" href="/">
          <img className="w-7" src={logo} alt="" />
          <span className="md:hidden sm:[display:initial]">YashEstate</span>
        </a>
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/">
          About
        </a>
        <a className="nav-link" href="/">
          Contact
        </a>
        <a className="nav-link" href="/">
          Agents
        </a>
      </div>

      {/* Right */}
      <div className="flex-[2_2_0%] flex items-center justify-end bg-sea-shell h-full lg:bg-transparent md:bg-transparent sm:bg-transparent">
        {user ? (
          <div className="flex items-center gap-7 mr-8 sm:gap-0">
            {/* User Info Button */}
            <button className="flex items-center gap-4 px-3 py-1 rounded-md hover:bg-gray-100 transition-all sm:gap-0 sm:hover:bg-transparent">
              <img
                src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg"
                alt="User"
                className="w-12 h-12 rounded-full object-cover border border-gray-300 sm:h-9 sm:w-9"
              />
              <span className="text-sm font-bold text-gray-800 sm:hidden">
                John Doe
              </span>
            </button>

            {/* Profile Link with Notification Badge */}
            <Link
              to="profile"
              className="relative px-5 py-2 bg-mustard text-black text-sm font-bold hover:bg-yellow-600 transition-all sm:hidden"
            >
              Profile
              {/* Badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </Link>
          </div>
        ) : (
          <>
            <a
              className="px-6 py-3 m-5 transition-all duration-[400ms] ease-in-out hover:scale-105 sm:hidden"
              href="/"
            >
              Sign In
            </a>
            <a
              className="bg-mustard px-6 py-3 m-5 transition-all duration-[400ms] ease-in-out hover:scale-105 sm:hidden"
              href="/"
            >
              Sign Up
            </a>{" "}
          </>
        )}

        {/* Menu Icon */}
        <div className="hidden sm:[display:initial] z-[999]">
          <img
            className="h-9 w-9 cursor-pointer"
            onClick={() => setOpen(!open)}
            src={menu}
            alt=""
          />
        </div>

        {/* Side Menu */}
        <div
          className={`hidden text-2xl flex-col items-center justify-center absolute bg-black text-white min-h-screen w-2/4 top-0 ${
            open
              ? "transition-all duration-1000 ease-in-out right-0 sm:[display:flex]"
              : "right-[-50%]"
          }`}
        >
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:[display:initial] hidden"
            href="/"
          >
            Home
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:[display:initial] mt-5 hidden"
            href="/"
          >
            About
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:[display:initial] mt-5 hidden"
            href="/"
          >
            Contact
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:[display:initial] mt-5 hidden"
            href="/"
          >
            Agents
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:[display:initial] mt-5 hidden"
            href="/"
          >
            Sign In
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:[display:initial] mt-5 hidden"
            href="/"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
