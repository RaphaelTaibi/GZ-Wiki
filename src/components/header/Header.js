import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black text-white text-opacity-70 flex flex-col items-center px-5 py-3 space-y-3">
      <Link
        to="/"
        className="text-xl no-underline text-white text-opacity-70 hover:text-cyan-900"
      >
        Gray Zone Warfare Wiki
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/social" className="hover:text-cyan-900">
              Social
            </Link>
          </li>
          <li>
            <Link to="/quests" className="hover:text-cyan-900">
              Quests
            </Link>
          </li>
          <li>
            <Link to="/maps" className="hover:text-cyan-900">
              Maps
            </Link>
          </li>
          <li>
            <Link to="/protections" className="hover:text-cyan-900">
              Protections
            </Link>
          </li>
          <li>
            <Link to="/balistics" className="hover:text-cyan-900">
              Ballistics
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
