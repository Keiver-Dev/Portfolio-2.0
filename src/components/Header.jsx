import { useState } from "react";
import { NavLink } from "react-router-dom";

import Bolt from "../icons/Bolt";
import Bar from "../icons/Bar";

// Social Icons
import Instagram from "../icons/Instagram";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const appLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/Keiver-Dev",
      text: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/Keiver-Dev", text: "GitHub" },
    { icon: Instagram, href: "https://instagram.com", text: "Instagram" },
  ];

  const baseClasses = "transition-colors";
  const activeClasses = "text-[#DAFDBA]";
  const hoverClasses = "hover:text-[#DAFDBA]";

  return (
    <>
      <header className="flex items-center justify-between w-full h-[5vh] px-0 xl:px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <Bolt
            aria-hidden="true"
            className={`${baseClasses} ${hoverClasses}`}
          />
        </NavLink>

        {/* Navegación interna */}
        <nav>
          <ul className="flex gap-6 font-semibold text-lg items-center">
            {appLinks.map(({ name, to }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${baseClasses} ${hoverClasses} ${
                      isActive ? activeClasses : ""
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón sidebar */}
        <nav aria-label="Redes sociales">
          <ul className="flex gap-3 items-center text-2xl">
            <li>
              <button
                aria-label="Abrir menú"
                className="cursor-pointer ml-4"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Bar className="h-6 w-6 hover:text-[#DAFDBA]" />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[35%] xl:w-[20%] bg-[#151515] border-l-2 border-l-zinc-600 text-white shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <button
            onClick={() => setSidebarOpen(false)}
            className="self-end text-xl hover:text-[#DAFDBA]"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold">Contact</h2>
          <ul className="flex flex-col gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href} className="flex items-center gap-3">
                  <a
                    aria-label={link.text}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClasses} ${hoverClasses} flex items-center gap-2`}
                  >
                    <Icon className="h-7 w-7" />
                    <span>{link.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
