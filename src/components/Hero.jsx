function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-4xl text-center">

        {/* Foto */}
        <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100">
          <img
            src="/profile.webp"
            alt="Cristian Gobbesso"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Presentación */}
        <p className="mb-3 text-sm font-medium text-zinc-500">
          Hola, soy Cristian Gobbesso
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
          Software Developer
        </h1>

        <p className="mt-3 text-xl font-medium text-zinc-500 sm:text-2xl">
          Comercio Exterior & Aduanas
        </p>

        {/* Descripción */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
          Técnico Superior en Programación con más de 13 años de experiencia
          en Comercio Exterior. Busco combinar tecnología y conocimiento del
          sector para desarrollar soluciones digitales que resuelvan problemas
          reales.
        </p>

        {/* Formación destacada */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600">
            React
          </span>

          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600">
            JavaScript
          </span>

          <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600">
            Full Stack
          </span>
        </div>

        {/* Botones */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#proyectos"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
          >
            Contactarme
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero