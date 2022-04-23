import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSword = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    id="sword_svg__Camada_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <style>
      {
        ".sword_svg__st0{fill:#fdbf00}.sword_svg__st1{fill:#ff9f00}.sword_svg__st2{fill:#47568c}.sword_svg__st3{fill:#29376d}.sword_svg__st4{fill:#dfe7f4}.sword_svg__st6{fill:#61729b}"
      }
    </style>
    <path
      className="sword_svg__st0"
      d="m87.4 445.8-10.6-10.6-10.6-10.6H23.8l-10.6 10.6c-17.5 17.5-17.5 46.1 0 63.6s46.1 17.5 63.6 0l10.6-10.6v-42.4z"
    />
    <path
      className="sword_svg__st1"
      d="m76.8 498.8 10.6-10.6v-42.4l-10.6-10.6-63.6 63.6c17.5 17.6 46.1 17.6 63.6 0z"
    />
    <path
      className="sword_svg__st2"
      d="m129.8 403.4-10.6-10.6-10.6-10.6H66.2l-42.4 42.4 31.8 31.8 31.8 31.8 42.4-42.4v-42.4z"
    />
    <path
      className="sword_svg__st3"
      d="M129.8 445.8v-42.4l-10.6-10.6-63.6 63.6 31.8 31.8 42.4-42.4z"
    />
    <path
      className="sword_svg__st4"
      d="M512 99.9V15c0-4.1-1.7-7.9-4.4-10.6C504.9 1.7 501.1 0 497 0h-84.9c-4 0-7.8 1.6-10.6 4.4L98 307.9l53 53 53 53 303.5-303.5c2.9-2.8 4.5-6.6 4.5-10.5z"
    />
    <path
      d="M507.6 110.5c2.8-2.8 4.4-6.6 4.4-10.6V15c0-4.1-1.7-7.9-4.4-10.6L151 361l53 53 303.6-303.5z"
      style={{
        fill: "#c7cfe1",
      }}
    />
    <path
      className="sword_svg__st6"
      d="m151 361-31.8-31.8-53 53L98 414l31.8 31.8 53-53L151 361z"
    />
    <path
      className="sword_svg__st2"
      d="m98 414 53-53 31.8 31.8-53 53L98 414z"
    />
    <path
      className="sword_svg__st0"
      d="m225.3 414-63.6-63.6L98 286.7c-5.9-5.9-15.4-5.9-21.2 0-5.9 5.9-5.9 15.4 0 21.2l63.6 63.6 63.6 63.6c5.9 5.9 15.4 5.9 21.2 0s6-15.2.1-21.1z"
    />
    <path
      className="sword_svg__st1"
      d="M225.3 435.2c5.9-5.9 5.9-15.4 0-21.2l-63.6-63.6-21.2 21.2 63.6 63.6c5.8 5.9 15.3 5.9 21.2 0z"
    />
    <path
      className="sword_svg__st0"
      d="m445.8 424.6-10.6 10.6-10.6 10.6v42.4l10.6 10.6c17.5 17.5 46.1 17.5 63.6 0s17.5-46.1 0-63.6l-10.6-10.6h-42.4z"
    />
    <path
      className="sword_svg__st1"
      d="m498.8 435.2-10.6-10.6h-42.4l-10.6 10.6 63.6 63.6c17.6-17.5 17.6-46.1 0-63.6z"
    />
    <path
      className="sword_svg__st2"
      d="m403.4 382.2-10.6 10.6-10.6 10.6v42.4l42.4 42.4 31.8-31.8 31.8-31.8-42.4-42.4h-42.4z"
    />
    <path
      className="sword_svg__st3"
      d="M445.8 382.2h-42.4l-10.6 10.6 63.6 63.6 31.8-31.8-42.4-42.4z"
    />
    <path
      d="M99.9 0H15C10.9 0 7.1 1.7 4.4 4.4S0 10.9 0 15v84.9c0 4 1.6 7.8 4.4 10.6L307.9 414l53-53 53-53L110.5 4.4C107.6 1.6 103.8 0 99.9 0z"
      style={{
        fill: "#f0f7ff",
      }}
    />
    <path
      className="sword_svg__st4"
      d="M110.5 4.4C107.6 1.6 103.8 0 99.9 0H15C10.9 0 7.1 1.7 4.4 4.4L361 361l53-53L110.5 4.4z"
    />
    <path
      className="sword_svg__st6"
      d="m361 361-31.8 31.8 53 53L414 414l31.8-31.8-53-53L361 361z"
    />
    <path
      className="sword_svg__st2"
      d="m360.9 361 31.8-31.8 53 53-31.8 31.8-53-53z"
    />
    <path
      className="sword_svg__st0"
      d="m414 286.7-63.6 63.6-63.7 63.7c-5.9 5.9-5.9 15.4 0 21.2 5.9 5.9 15.4 5.9 21.2 0l63.6-63.6 63.6-63.6c5.9-5.9 5.9-15.4 0-21.2-5.8-6-15.2-6-21.1-.1z"
    />
    <path
      className="sword_svg__st1"
      d="M435.2 286.7c-5.9-5.9-15.4-5.9-21.2 0l-63.6 63.6 21.2 21.2 63.6-63.6c5.9-5.8 5.9-15.3 0-21.2z"
    />
  </svg>
);

export default SvgSword;
