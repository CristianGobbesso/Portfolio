import { Mail, Moon, Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6">

        {/* Barra principal */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo / Nombre */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-tight text-zinc-900"
          >
            Cristian Gobbesso
          </a>

          {/* Navegación Desktop */}
          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#proyectos"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Proyectos
            </a>

            <a
              href="#experiencia"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Experiencia
            </a>

            <a
              href="#formacion"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Formación
            </a>

            <a
              href="#contacto"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Contacto
            </a>

            <button
              className="text-zinc-500 transition-colors hover:text-zinc-900"
              aria-label="Cambiar tema"
            >
              <Moon size={18} />
            </button>

          </div>

          {/* Redes Desktop */}
          <div className="hidden items-center gap-4 md:flex">

            <a
              href="https://github.com/CristianGobbesso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/cristian-gobbesso-7833591b2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#contacto"
              aria-label="Contacto"
              className="text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <Mail size={18} />
            </a>

          </div>

          {/* Botón Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-600 transition-colors hover:text-zinc-900 md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Menú Mobile */}
        {menuOpen && (
          <div className="border-t border-zinc-200 py-6 md:hidden">

            <div className="flex flex-col gap-5">

              <a
                href="#proyectos"
                onClick={closeMenu}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                Proyectos
              </a>

              <a
                href="#experiencia"
                onClick={closeMenu}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                Experiencia
              </a>

              <a
                href="#formacion"
                onClick={closeMenu}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                Formación
              </a>

              <a
                href="#contacto"
                onClick={closeMenu}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                Contacto
              </a>

              <div className="flex items-center gap-5 border-t border-zinc-200 pt-5">

                <a
                  href="https://github.com/CristianGobbesso"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/cristian-gobbesso-7833591b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  <FaLinkedin size={19} />
                </a>

                <a
                  href="#contacto"
                  onClick={closeMenu}
                  aria-label="Contacto"
                  className="text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  <Mail size={19} />
                </a>

                <button
                  className="text-zinc-500 transition-colors hover:text-zinc-900"
                  aria-label="Cambiar tema"
                >
                  <Moon size={19} />
                </button>

              </div>

            </div>

          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar