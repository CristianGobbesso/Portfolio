import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

function Projects() {
  return (
    <section
      id="proyectos"
      className="border-t border-zinc-200 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-zinc-500">
            Portfolio
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Proyectos
          </h2>

          <p className="mt-4 text-zinc-500">
            Una selección de proyectos que estoy desarrollando mientras
            continúo creciendo como Frontend Developer.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects