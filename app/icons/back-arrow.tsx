import * as React from 'react'
import { SVGProps } from 'react'
const BackArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.width}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    className="feather feather-arrow-left-circle"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="m12 8-4 4 4 4M16 12H8" />
  </svg>
)
export default BackArrow
