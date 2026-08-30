import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
} from "react-icons/fa"

const technologyIcons = {
  React: FaReact,
  JavaScript: FaJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Node.js": FaNodeJs,
  Python: FaPython,
}

function TechnologyBadge({ technology }) {
  const Icon = technologyIcons[technology]

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
      {Icon && <Icon size={13} />}
      {technology}
    </span>
  )
}

export default TechnologyBadge