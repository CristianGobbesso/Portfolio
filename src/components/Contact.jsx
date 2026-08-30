import { useState } from "react"
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Contact() {
  const [copied, setCopied] = useState(false)

  const email = "cristiangobbesso.it@gmail.com"

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error("No se pudo copiar el email:", error)
    }
  }

  return (
    <section
      id="contacto"
      className="
        border-t border-zinc-200/80
        bg-zinc-50/70
        px-6 py-24
        dark:border-zinc-800/80
        dark:bg-zinc-950
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Contenedor principal */}
        <div
          className="
            rounded-3xl
            border border-zinc-200
            bg-white
            p-8
            shadow-[0_12px_40px_rgba(15,23,42,0.06)]
            sm:p-10
            lg:p-12
            dark:border-zinc-800
            dark:bg-zinc-900
            dark:shadow-none
          "
        >
          {/* Encabezado */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-violet-600 dark:text-violet-400">
              Contacto
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              ¿Trabajamos juntos?
            </h2>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
              Estoy interesado en oportunidades relacionadas con desarrollo
              frontend y en proyectos donde pueda combinar tecnología con mi
              experiencia en comercio exterior.
            </p>
          </div>

          {/* Email */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div
              className="
                flex min-h-11 items-center gap-3
                rounded-xl
                border border-zinc-200
                bg-zinc-50
                px-4
                text-zinc-700
                dark:border-zinc-800
                dark:bg-zinc-950
                dark:text-zinc-300
              "
            >
              <Mail
                size={19}
                className="shrink-0 text-violet-600 dark:text-violet-400"
              />

              <span className="text-sm font-medium">
                {email}
              </span>
            </div>

            <button
              onClick={copyEmail}
              className="
                inline-flex min-h-11 w-fit items-center gap-2
                rounded-xl
                border border-zinc-300
                bg-zinc-900
                px-5
                text-sm font-medium
                text-white
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-violet-600
                hover:shadow-lg hover:shadow-violet-200/50
                dark:border-zinc-700
                dark:bg-zinc-100
                dark:text-zinc-900
                dark:hover:bg-violet-500
                dark:hover:text-white
                dark:hover:shadow-none
              "
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Email copiado
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copiar email
                </>
              )}
            </button>
          </div>

          {/* Redes */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/CristianGobbesso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-zinc-200
                bg-white
                text-zinc-500
                transition-all duration-200
                hover:-translate-y-1
                hover:border-violet-400
                hover:text-violet-600
                hover:shadow-sm
                dark:border-zinc-800
                dark:bg-zinc-950
                dark:text-zinc-400
                dark:hover:border-violet-500
                dark:hover:text-violet-400
              "
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/cristian-gobbesso-7833591b2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-zinc-200
                bg-white
                text-zinc-500
                transition-all duration-200
                hover:-translate-y-1
                hover:border-violet-400
                hover:text-violet-600
                hover:shadow-sm
                dark:border-zinc-800
                dark:bg-zinc-950
                dark:text-zinc-400
                dark:hover:border-violet-500
                dark:hover:text-violet-400
              "
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="#inicio"
              aria-label="Volver al inicio"
              className="
                ml-2
                flex items-center gap-2
                text-sm font-medium
                text-zinc-500
                transition-colors
                hover:text-violet-600
                dark:text-zinc-400
                dark:hover:text-violet-400
              "
            >
              Volver arriba
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact