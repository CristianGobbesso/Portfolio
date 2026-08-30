import TimelineItem from "./TimelineItem"

import {
  programmingEducation,
  commerceEducation,
} from "../data/education"

function Education() {
  return (
    <section
      id="formacion"
      className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-violet-600 dark:text-violet-400">
            Formación
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Formación académica y técnica
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Una formación multidisciplinaria que combina programación,
            desarrollo de software y comercio exterior.
          </p>
        </div>

        {/* Programación */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Programación
            </h3>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Formación enfocada en desarrollo de software y tecnologías web.
            </p>
          </div>

          <div className="relative space-y-6 border-l border-zinc-200 dark:border-zinc-800">
            {programmingEducation.map((item) => (
              <TimelineItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* Comercio Exterior */}
        <div className="mt-20">
          <div className="mb-8">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Comercio Exterior
            </h3>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Formación y especialización que acompañan mi experiencia
              profesional en el sector.
            </p>
          </div>

          <div className="relative space-y-6 border-l border-zinc-200 dark:border-zinc-800">
            {commerceEducation.map((item) => (
              <TimelineItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education