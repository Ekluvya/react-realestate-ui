import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-24 flex justify-between items-center">
      {/* Left */}
      <div className="flex-[3_3_0%] flex items-center gap-12">
        <a className="font-bold text-xl flex gap-2.5 items-center" href="/">
          <img className="w-7" src="/logo.png" alt="" />
          <span className="md:hidden sm:[display:initial]">YashEstate</span>
        </a>
        <a
          className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:hidden"
          href="/"
        >
          Home
        </a>
        <a
          className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:hidden"
          href="/"
        >
          About
        </a>
        <a
          className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:hidden"
          href="/"
        >
          Contact
        </a>
        <a
          className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:hidden"
          href="/"
        >
          Agents
        </a>
      </div>

      {/* Right */}
      <div className="flex-[2_2_0%] flex items-center justify-end bg-sea-shell h-full lg:bg-transparent md:bg-transparent sm:bg-transparent">
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
        </a>

        {/* Menu Icon */}
        <div className="hidden sm:[display:initial] z-[999]">
          <img
            className="h-9 w-9 cursor-pointer"
            onClick={() => setOpen(!open)}
            src="/menu.png"
            alt=""
          />
        </div>

        {/* Side Menu */}
        <div
          className={` transition-all duration-1000 ease-in-out text-2xl flex flex-col items-center justify-center absolute bg-black text-white h-screen w-2/4 top-0 ${
            open ? "right-0" : "right-[-50%]"
          }`}
        >
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 sm:[display:initial] hidden"
            href="/"
          >
            Home
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 mt-5 sm:[display:initial] hidden"
            href="/"
          >
            About
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 mt-5 sm:[display:initial] hidden"
            href="/"
          >
            Contact
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 mt-5 sm:[display:initial] hidden"
            href="/"
          >
            Agents
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 mt-5 sm:[display:initial] hidden"
            href="/"
          >
            Sign In
          </a>
          <a
            className="transition-all duration-[400ms] ease-in-out hover:scale-105 mt-5 sm:[display:initial] hidden"
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
