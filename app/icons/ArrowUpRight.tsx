import * as React from 'react'
import { SVGProps } from 'react'
const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-arrow-up-right duration-200"
    {...props}>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
)
export default ArrowUpRight
