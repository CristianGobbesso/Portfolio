import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import TechnologyBadge from "./TechnologyBadge"

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl">
      
      <div className="aspect-video overflow-hidden bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6 sm:p-7">

        <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
  {project.technologies.map((technology) => (
    <TechnologyBadge
      key={technology}
      technology={technology}
    />
  ))}
</div>

        <div className="mt-7 flex items-center justify-between border-t border-zinc-100 pt-5">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
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