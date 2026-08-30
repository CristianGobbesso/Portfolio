function Experience() {
  return (
    <section
      id="experiencia"
      className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-violet-600 dark:text-violet-400">
            Experiencia
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Experiencia profesional
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Una trayectoria profesional en comercio exterior que hoy se
            complementa con mi formación en desarrollo de software.
          </p>
        </div>

        {/* Experiencia principal */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Años */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
            <p className="text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
              13+
            </p>

            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
              años de experiencia
            </p>
          </div>

          {/* Contenido */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.05)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none sm:p-8">
            <div>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    Comercio Exterior
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    Operaciones · Aduana · Comercio internacional
                  </p>
                </div>

                <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
                  13+ años
                </span>
              </div>

              <p className="mt-6 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
                Experiencia profesional desarrollada en el ámbito del comercio
                exterior, adquiriendo conocimientos sobre operaciones,
                procesos y documentación relacionados con el comercio
                internacional y la actividad aduanera.
              </p>
            </div>
          </div>
        </div>

        {/* Diferencial */}
        <div className="mt-16 rounded-2xl border border-violet-200 bg-violet-50/70 p-8 shadow-[0_8px_30px_rgba(124,58,237,0.06)] dark:border-violet-500/20 dark:bg-violet-500/5 dark:shadow-none sm:p-10">
          <p className="text-sm font-medium tracking-wide text-violet-600 dark:text-violet-400">
            Mi diferencial
          </p>

          <h3 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            Tecnología aplicada a problemas reales.
          </h3>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-400">
            Mi formación en programación me permite complementar esta
            experiencia con herramientas de desarrollo frontend y crear
            soluciones digitales orientadas a necesidades concretas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience