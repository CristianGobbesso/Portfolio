import { ArrowUp } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Nombre */}
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Cristian Gobbesso
          </p>

          <p className="mt-1 text-xs text-zinc-400">
            Frontend Developer - Comerio Exterior
          </p>
        </div>

        {/* Redes */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/CristianGobbesso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition-colors hover:text-zinc-900"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/cristian-gobbesso-7833591b2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 transition-colors hover:text-zinc-900"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="#inicio"
            aria-label="Volver al inicio"
            className="flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-900"
          >
            Volver arriba
            <ArrowUp size={15} />
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer