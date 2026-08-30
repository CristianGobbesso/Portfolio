import { ArrowUpRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer
      className="
        border-t border-zinc-200/80
        bg-white
        px-6 py-8
        dark:border-zinc-800/80
        dark:bg-zinc-950
      "
    >
      <div
        className="
          mx-auto flex max-w-6xl flex-col gap-6
          sm:flex-row sm:items-center sm:justify-between
        "
      >
        {/* Identidad */}
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            Cristian Gobbesso
          </p>

          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
            Frontend Developer · Comercio Exterior & Aduanas
          </p>
        </div>

        {/* Redes y navegación */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/CristianGobbesso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-zinc-200
              bg-white
              text-zinc-500
              transition-all duration-200
              hover:-translate-y-1
              hover:border-violet-300
              hover:text-violet-600
              hover:shadow-sm
              dark:border-zinc-800
              dark:bg-zinc-900
              dark:text-zinc-400
              dark:hover:border-violet-500
              dark:hover:text-violet-400
            "
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/cristian-gobbesso-7833591b2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-zinc-200
              bg-white
              text-zinc-500
              transition-all duration-200
              hover:-translate-y-1
              hover:border-violet-300
              hover:text-violet-600
              hover:shadow-sm
              dark:border-zinc-800
              dark:bg-zinc-900
              dark:text-zinc-400
              dark:hover:border-violet-500
              dark:hover:text-violet-400
            "
          >
            <FaLinkedin size={17} />
          </a>

          <a
            href="#inicio"
            aria-label="Volver al inicio"
            className="
              ml-2 flex items-center gap-2
              text-xs font-medium
              text-zinc-500
              transition-colors
              hover:text-violet-600
              dark:text-zinc-400
              dark:hover:text-violet-400
            "
          >
            Volver arriba
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mx-auto mt-6 max-w-6xl border-t border-zinc-100 pt-5 dark:border-zinc-900">
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} Cristian Gobbesso. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer