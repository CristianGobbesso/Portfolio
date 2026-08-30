import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Imagen */}
      <div className="aspect-video overflow-hidden bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">

        <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-5">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <FaGithub size={17} />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <ExternalLink size={17} />
            Demo
          </a>

        </div>

      </div>
    </article>
  )
}

export default ProjectCard