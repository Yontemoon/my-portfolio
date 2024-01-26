import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 500 500"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M250 500C111.929 500 0 388.071 0 250S111.929 0 250 0s250 111.929 250 250-111.929 250-250 250Zm-85-397v280h189.156v-69.9H237.724V103H165Z"
    />
  </svg>
)
export default SvgComponent


