import * as React from "react"
import { SVGProps } from "react"
const ProjectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.width}
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-layers"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)
export default ProjectIcon
