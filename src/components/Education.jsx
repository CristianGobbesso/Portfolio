import TimelineItem from "./TimelineItem"
import {
  programmingEducation,
  commerceEducation,
} from "../data/education"

function Education() {
  return (
    <section
      id="formacion"
      className="border-t border-zinc-200 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-zinc-500">
            Formación
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Formación académica y técnica
          </h2>

          <p className="mt-4 text-zinc-500">
            Una formación multidisciplinaria que combina programación,
            desarrollo de software y comercio exterior.
          </p>
        </div>

        {/* Programación */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
              Programación
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Formación enfocada en desarrollo de software y tecnologías web.
            </p>
          </div>

          <div className="relative space-y-10 border-l border-zinc-200">
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
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
              Comercio Exterior
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Formación y especialización que acompañan mi experiencia
              profesional en el sector.
            </p>
          </div>

          <div className="relative space-y-10 border-l border-zinc-200">
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