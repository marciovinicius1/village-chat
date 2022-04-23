import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHands = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <linearGradient
      xmlns="http://www.w3.org/2000/svg"
      id="hands_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={45}
      x2={45}
      y1={60}
      y2={52}
    >
      <stop offset={0} stopColor="#80583c" />
      <stop offset={0.32} stopColor="#896142" />
      <stop offset={0.84} stopColor="#a17954" />
      <stop offset={1} stopColor="#aa825a" />
    </linearGradient>
    <linearGradient
      xmlns="http://www.w3.org/2000/svg"
      id="hands_svg__b"
      gradientUnits="userSpaceOnUse"
      x1={13.38}
      x2={50.987}
      y1={31.5}
      y2={31.5}
    >
      <stop stopColor="#a7ff8e" offset={0} />
      <stop stopColor="#00e58a" offset={0.5} />
      <stop stopColor="#00e58a" offset={1} />
    </linearGradient>
    <linearGradient
      xmlns="http://www.w3.org/2000/svg"
      id="hands_svg__c"
      x1={26}
      x2={26}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xlinkHref="#hands_svg__a"
      y1={62}
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M45 52a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z"
      fill="url(#hands_svg__a)"
      data-original="url(#linear-gradient)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M43 54a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6z"
      fill="#80583c"
      data-original="#80583c"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M50.974 18.88a2.437 2.437 0 0 0-2.684-2.411A2.534 2.534 0 0 0 46.098 19l-.012 2L41 22l4.617-9.33a3.51 3.51 0 0 0-.09-2.749L43.85 6.315a2.696 2.696 0 0 0-5.086 1.79l1.494 3.41L35 21V9h-6v12L25.564 6.833a3.094 3.094 0 0 0-2.648-2.814 2.99 2.99 0 0 0-3.322 3.263l3.577 20.202-3.051-1.36-1.442-3.57a2.789 2.789 0 0 0-5.002 2.467l2.004 5.294L25 39v20h16V39a10.243 10.243 0 0 0 3-7.243V27l4.305-1.502a4 4 0 0 0 2.682-3.795z"
      fill="url(#hands_svg__b)"
      data-original="url(#linear-gradient-2)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m40.864 6.314 1.677 3.608a3.511 3.511 0 0 1 .09 2.748l-4.94 9.98L41 22l4.617-9.33a3.51 3.51 0 0 0-.09-2.749L43.85 6.315a2.678 2.678 0 0 0-4.029-1.33 2.62 2.62 0 0 1 1.042 1.33zM50.974 18.88a2.437 2.437 0 0 0-2.684-2.411 2.296 2.296 0 0 0-1.238.52 2.421 2.421 0 0 1 .935 1.89L48 21.704a4 4 0 0 1-2.682 3.795L41.013 27v4.757a10.243 10.243 0 0 1-3 7.243v20H41V39a10.243 10.243 0 0 0 3-7.243V27l4.305-1.502a4 4 0 0 0 2.682-3.795z"
      fill="#00b489"
      data-original="#7db91f"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M39 56a4 4 0 0 0-3.672 2.418 9.994 9.994 0 0 0-14.106-5.204A7.979 7.979 0 0 0 9.262 62H43v-2a4 4 0 0 0-4-4z"
      fill="url(#hands_svg__c)"
      data-original="url(#linear-gradient-3)"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M31 33a5.491 5.491 0 0 0-5.28-7h-2.812l.263 1.484 2.84.187A5.34 5.34 0 0 1 31 33zM33 9h2v12h-2z"
      fill="#00b489"
      data-original="#7db91f"
    />
    <ellipse
      xmlns="http://www.w3.org/2000/svg"
      cx={32}
      cy={9}
      fill="#ff0050"
      rx={3}
      ry={1}
      data-original="#c2dd75"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M33.25 2a1.497 1.497 0 0 0-1.25.673 1.498 1.498 0 1 0-1.5 2.302V9c0 .276.672.5 1.5.5s1.5-.224 1.5-.5V4.975A1.498 1.498 0 0 0 33.25 2z"
      fill="#e6e7e8"
      data-original="#e6e7e8"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M33.25 2a1.474 1.474 0 0 0-.618.144 1.494 1.494 0 0 1-.382 2.83v4.518c.709-.04 1.25-.244 1.25-.492V4.975A1.498 1.498 0 0 0 33.25 2z"
      fill="#c1c1c1"
      data-original="#c1c1c1"
    />
  </svg>
);

export default SvgHands;
