import Bolt from "../icons/Bolt";
import Bar from "../icons/Bar";
import { NavLink } from "react-router-dom";

const Header = () => {
  // Rutas internas de la app
  const appLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  // Rutas externas (redes sociales)
  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "GitHub", href: "https://github.com" },
  ];

  const baseClasses = "transition-colors";
  const activeClasses = "text-[#DAFDBA]";
  const hoverClasses = "hover:text-[#DAFDBA]";

  return (
    <header className="flex items-center justify-between w-full h-auto">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-3">
        <Bolt aria-hidden="true" className={`${baseClasses} ${hoverClasses}`} />
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

      {/* Redes sociales */}
      <nav aria-label="Redes sociales">
        <ul className="flex gap-6 font-semibold text-lg items-center">
          {socialLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} ${hoverClasses}`}
              >
                {name}
              </a>
            </li>
          ))}
          <li>
            <button aria-label="Abrir menú" className="cursor-pointer">
              <Bar className="h-6 w-6 hover:text-[#DAFDBA]" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
