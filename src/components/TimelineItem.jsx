function TimelineItem({ item }) {
  if (!item) {
    return null
  }

  return (
    <div className="relative pl-8 sm:pl-10">
      {/* Punto de la timeline */}
      <div className="absolute -left-1.25 top-6 h-3 w-3 rounded-full border-2 border-white bg-violet-600 ring-4 ring-violet-100 dark:border-zinc-950 dark:bg-violet-400 dark:ring-violet-500/10" />

      {/* Tarjeta */}
      <div
        className="
          rounded-2xl
          border border-zinc-200
          bg-white
          p-6
          shadow-[0_8px_30px_rgba(15,23,42,0.05)]
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-violet-200
          hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]
          dark:border-zinc-800
          dark:bg-zinc-900
          dark:shadow-none
          dark:hover:border-violet-800
        "
      >
        {/* Tipo y duración */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            {item.type}
          </span>

          <span className="text-xs font-medium text-zinc-400">
            {item.duration}
          </span>
        </div>

        {/* Título */}
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
          {item.title}
        </h3>

        {/* Institución */}
        <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {item.institution}
        </p>

        {/* Descripción */}
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default TimelineItem