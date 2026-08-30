import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import TechnologyBadge from "./TechnologyBadge"

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-zinc-800 dark:bg-[#0d1117] dark:hover:border-violet-500/40 dark:hover:shadow-violet-500/5">

      {/* Imagen */}
      <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 sm:p-7">

        {/* Título */}
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechnologyBadge
              key={technology}
              technology={technology}
            />
          ))}
        </div>

        {/* Enlaces */}
        <div className="mt-7 flex items-center justify-between border-t border-zinc-100 pt-5 dark:border-zinc-800">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
          >
            <span>Ver demo</span>
            <ExternalLink size={17} />
          </a>

        </div>
      </div>
    </article>
  )
}

export default ProjectCard