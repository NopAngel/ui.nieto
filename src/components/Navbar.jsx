import GithubIcon from "../assets/GithubIcon.svg";
import React from "react";

function Navbar() {
  return (
    <header>
      <nav>
        <ul className="flex justify-around p-[6px] items-center *:ml-[60px]">
          <li>
            <a href="#">nieto.ui</a>
          </li>
          <div>
            <li>
              <a href="https://github.com/Angel45003/ui.nieto" target="_blank">
                <img className="w-[30px]" src={GithubIcon} alt="" />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
