import { useState } from "react"
import { Mail, Copy, Check } from "lucide-react"
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
      className="border-t border-zinc-200 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-zinc-500">
            Contacto
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            ¿Trabajamos juntos?
          </h2>

          <p className="mt-4 leading-7 text-zinc-500">
            Estoy interesado en oportunidades relacionadas con desarrollo
            frontend y en proyectos donde pueda combinar tecnología con mi
            experiencia en comercio exterior.
          </p>
        </div>

        {/* Email */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

          <div className="flex items-center gap-3">
            <Mail
              size={20}
              className="text-zinc-400"
            />

            <span className="text-sm font-medium text-zinc-700">
              {email}
            </span>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
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
        <div className="mt-10 flex items-center gap-5">

          <a
            href="https://github.com/CristianGobbesso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition-colors hover:text-zinc-900"
          >
            <FaGithub size={21} />
          </a>

          <a
            href="https://www.linkedin.com/in/cristian-gobbesso-7833591b2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 transition-colors hover:text-zinc-900"
          >
            <FaLinkedin size={21} />
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact