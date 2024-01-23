import * as React from "react"
import { SVGProps } from "react"
const BackArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    fill="currentColor"
    style={{
      "--darkreader-inline-fill": "currentColor",
    }}
    viewBox="-2 -2 24 24"
    {...props}
  >
    <path d="M5.293 9.293a.997.997 0 0 0 0 1.414l4.243 4.243a1 1 0 1 0 1.414-1.414L8.414 11H14a1 1 0 0 0 0-2H8.414l2.536-2.536A1 1 0 1 0 9.536 5.05L5.293 9.293zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
)
export default BackArrow
