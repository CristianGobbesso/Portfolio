function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-500/10" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Foto */}
        <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-zinc-100 shadow-lg shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
          <img
            src="/profile.webp"
            alt="Cristian Gobbesso"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Presentación */}
        <p className="mb-3 text-base font-semibold tracking-wide text-violet-600 dark:text-violet-400 sm:text-lg">
          Hola, soy Cristian Gobbesso
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
          Software Developer
        </h1>

        <p className="mt-3 text-xl font-medium text-zinc-600 dark:text-zinc-300 sm:text-2xl">
          Comercio Exterior & Aduanas
        </p>

        {/* Descripción */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
          Técnico Superior en Programación con más de 13 años de experiencia
          en Comercio Exterior. Busco combinar tecnología y conocimiento del
          sector para desarrollar soluciones digitales que resuelvan problemas
          reales.
        </p>

        {/* Formación destacada */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-200/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:shadow-none">
            React
          </span>

          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-200/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:shadow-none">
            JavaScript
          </span>

          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-200/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:shadow-none">
            Full Stack
          </span>
        </div>

        {/* Botones */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#proyectos"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-violet-200/50 transition-all hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-200/60 dark:shadow-none dark:hover:bg-violet-500"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
          >
            Contactarme
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero