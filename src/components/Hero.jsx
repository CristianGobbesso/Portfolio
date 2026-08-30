function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Brillo decorativo */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/15" />

      <div className="mx-auto max-w-4xl text-center">

        {/* Foto */}
        <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <img
            src="/profile.webp"
            alt="Cristian Gobbesso"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Presentación */}
        <p className="mb-4 text-base font-medium tracking-wide text-violet-600 dark:text-violet-400 sm:text-lg">
  Hola, soy Cristian Gobbesso
</p>

        {/* Título principal */}
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
          Frontend Developer
        </h1>

        {/* Tecnologías */}
        <p className="mt-4 text-xl font-medium text-zinc-500 sm:text-2xl dark:text-zinc-400">
          JavaScript · React · Desarrollo Web
        </p>

        {/* Descripción */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
          Técnico Superior en Programación con más de 13 años de experiencia
          en Comercio Exterior y Aduanas. Combino tecnología y conocimiento
          del negocio para desarrollar soluciones digitales que resuelvan
          problemas reales.
        </p>

        {/* Tecnologías destacadas */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            React
          </span>

          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            JavaScript
          </span>

          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            HTML & CSS
          </span>

          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            Git
          </span>
        </div>

        {/* Botones */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <a
            href="#proyectos"
            className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/20 dark:bg-white dark:text-zinc-900 dark:hover:bg-violet-500 dark:hover:text-white"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-medium text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-violet-500 dark:hover:text-violet-400"
          >
            Contactarme
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero