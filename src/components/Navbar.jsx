import { Mail, Moon } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo / Nombre */}
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-tight text-zinc-900"
        >
          Cristian Gobbesso
        </a>

        {/* Navegación */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#proyectos"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Proyectos
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

        {/* Redes */}
        <div className="flex items-center gap-4">

          <a
            href="#"
            aria-label="GitHub"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="#"
            aria-label="Email"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <Mail size={18} />
          </a>

        </div>

      </nav>
    </header>
  )
}

export default Navbar