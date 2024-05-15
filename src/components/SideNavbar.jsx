import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@radix-ui/react-icons";

function Navbar() {
  return (
    <nav className="sidebar flex flex-col justify-between h-full">
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center">Dog App</h1>
        <div className="home-area group hover:bg-indigo-300 transition-colors duration-300 hover:bg-opacity-50 rounded">
          <ul className="list-none">
            <li className="mb-2 flex items-center justify-center">
              <Link
                to="/breeds"
                className="hover:text-primary flex items-center gap-4"
              >
                <HomeIcon className="icon" /> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm opacity-50">
        <p>© {new Date().getFullYear()} Dog App</p>
        <p>Divyanshu Vijaywargiya</p>
      </div>
    </nav>
  );
}

export default Navbar;
