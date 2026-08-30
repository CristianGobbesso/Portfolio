function Experience() {
  return (
    <section
      id="experiencia"
      className="border-t border-zinc-200 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-zinc-500">
            Experiencia
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Experiencia profesional
          </h2>

          <p className="mt-4 text-zinc-500">
            Una trayectoria profesional en comercio exterior que hoy se
            complementa con mi formación en desarrollo de software.
          </p>
        </div>

        {/* Experiencia principal */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[220px_1fr]">

          {/* Años */}
          <div>
            <p className="text-6xl font-bold tracking-tight text-zinc-900">
              13+
            </p>

            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-zinc-400">
              años de experiencia
            </p>
          </div>

          {/* Contenido */}
          <div className="border-l border-zinc-200 pl-8">

            <div>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    Comercio Exterior
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Operaciones · Aduana · Comercio internacional
                  </p>
                </div>

                <span className="text-sm text-zinc-400">
                  13+ años
                </span>
              </div>

              <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
                Experiencia profesional desarrollada en el ámbito del comercio
                exterior, adquiriendo conocimientos sobre operaciones,
                procesos y documentación relacionados con el comercio
                internacional y la actividad aduanera.
              </p>
            </div>

          </div>

        </div>

        {/* Diferencial */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10">

          <p className="text-sm font-medium text-zinc-500">
            Mi diferencial
          </p>

          <h3 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Tecnología aplicada a problemas reales.
          </h3>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-500">
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