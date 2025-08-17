import Bolt from "../icons/Bolt";
import Bar from "../icons/Bar";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 flex items-center justify-between w-full h-16 px-6">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3">
        <Bolt aria-hidden="true" className="hover:text-[#DAFDBA]" />
      </a>

      {/* Navegación */}
      <nav aria-label="Redes sociales">
        <ul className="flex gap-6 font-semibold text-lg items-center">
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#DAFDBA]"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#DAFDBA]"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#DAFDBA]"
            >
              GitHub
            </a>
          </li>
          <li>
            <button className="cursor-pointer">
              <Bar className="hover:text-[#DAFDBA] h-6 w-6" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
