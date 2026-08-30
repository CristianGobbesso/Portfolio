function TimelineItem({ item }) {
  if (!item) {
    return null
  }

  return (
    <div className="relative pl-8">

      {/* Punto de la timeline */}
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-zinc-900 ring-1 ring-zinc-300" />

      <div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            {item.type}
          </span>

          <span className="text-xs font-medium text-zinc-400">
            {item.duration}
          </span>

        </div>

        <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">
          {item.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-zinc-500">
          {item.institution}
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
          {item.description}
        </p>
      </div>

    </div>
  )
}

export default TimelineItem