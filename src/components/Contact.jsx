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
        bg-zinc-50/50
        px-6 py-24
        dark:border-zinc-800/80
        dark:bg-zinc-950
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-violet-600 dark:text-violet-400">
            Contacto
          </p>

          <h2
            className="
              mt-2 text-3xl font-bold tracking-tight
              text-zinc-900
              sm:text-4xl
              dark:text-white
            "
          >
            ¿Trabajamos juntos?
          </h2>

          <p
            className="
              mt-4 leading-7
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Estoy interesado en oportunidades relacionadas con desarrollo
            frontend y en proyectos donde pueda combinar tecnología con mi
            experiencia en comercio exterior.
          </p>
        </div>

        {/* Email */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          
          <div
            className="
              flex items-center gap-3
              text-zinc-700
              dark:text-zinc-300
            "
          >
            <Mail
              size={20}
              className="text-violet-600 dark:text-violet-400"
            />

            <span className="text-sm font-medium">
              {email}
            </span>
          </div>

          <button
            onClick={copyEmail}
            className="
              inline-flex w-fit items-center gap-2
              rounded-lg
              border border-zinc-300
              bg-white
              px-4 py-2
              text-sm font-medium
              text-zinc-700
              transition-all duration-200
              hover:-translate-y-0.5
              hover:border-violet-400
              hover:text-violet-600
              hover:shadow-sm

              dark:border-zinc-700
              dark:bg-zinc-900
              dark:text-zinc-300
              dark:hover:border-violet-500
              dark:hover:text-violet-400
              dark:hover:bg-zinc-800
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
        <div className="mt-10 flex items-center gap-4">

          <a
            href="https://github.com/CristianGobbesso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              group
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
              dark:bg-zinc-900
              dark:text-zinc-400
              dark:hover:border-violet-500
              dark:hover:text-violet-400
              dark:hover:bg-zinc-800
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
              group
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
              dark:bg-zinc-900
              dark:text-zinc-400
              dark:hover:border-violet-500
              dark:hover:text-violet-400
              dark:hover:bg-zinc-800
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
    </section>
  )
}

export default Contact