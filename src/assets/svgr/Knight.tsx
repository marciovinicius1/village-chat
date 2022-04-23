import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKnight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    id="knight_svg__Camada_1"
    xmlns="http://www.w3.org/2000/svg"
    x="1em"
    y="1em"
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
        ".knight_svg__st0{fill:#ffc8be}.knight_svg__st1{fill:#ffaaa5}.knight_svg__st2{fill:#c7cfe1}.knight_svg__st6{fill:#dfe7f4}.knight_svg__st9{fill:#6356aa}.knight_svg__st10{fill:#4a3d8e}"
      }
    </style>
    <path
      className="knight_svg__st0"
      d="M111.4 351.3H79.3c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1h32.1c8.3 0 15 6.7 15 15v64.3c0 8.2-6.7 14.9-15 14.9z"
    />
    <path
      className="knight_svg__st1"
      d="M432.7 351.3h-32.1c-8.3 0-15-6.7-15-15V272c0-8.3 6.7-15 15-15h32.1c26 0 47.1 21.1 47.1 47.1s-21.1 47.2-47.1 47.2z"
    />
    <path
      className="knight_svg__st2"
      d="M416 512H109.6c-18.2 0-31.7-16.7-28-34.5 3.2-15.5 24.3-75.8 94.5-75.8h158.2c25.6 0 50.4 9.7 68.5 27.8 18.1 18 28 42 28 67.5.2 8.3-6.5 15-14.8 15z"
    />
    <path
      d="M431 497c0-25.5-10-49.5-28-67.5-18.1-18.1-42.9-27.8-68.5-27.8H256V512h160c8.3 0 15-6.7 15-15z"
      style={{
        fill: "#a7b9d8",
      }}
    />
    <path
      d="M320.3 431.7H191.7c-52.7 0-95.3-42.6-95.3-95.3V223.9c0-8.3 6.7-15 15-15h289.2c8.3 0 15 6.7 15 15v112.5c0 52.6-42.6 95.3-95.3 95.3z"
      style={{
        fill: "#ffe1d2",
      }}
    />
    <path
      className="knight_svg__st0"
      d="M415.6 336.3V223.9c0-8.3-6.7-15-15-15H256v222.8h64.3c52.7 0 95.3-42.7 95.3-95.4z"
    />
    <path
      d="M102.4 150.7c-3.8-2.8-6-7.3-6-12C96.4 68.8 149 31.4 184 20.9L251.7.6c2.8-.8 5.8-.8 8.6 0L328 20.9c35 10.5 87.6 47.9 87.6 117.8 0 4.7-2.2 9.2-6 12-3.8 2.8-8.7 3.7-13.3 2.3L256 111l-140.3 42.1c-2.4.7-7.9 1.6-13.3-2.4z"
      style={{
        fill: "#f0f7ff",
      }}
    />
    <path
      className="knight_svg__st6"
      d="M409.6 150.7c3.8-2.8 6-7.3 6-12 0-69.9-52.6-107.3-87.6-117.8L260.3.6c-1.4-.4-2.8-.6-4.3-.6v111l140.3 42.1c4.5 1.3 9.4.5 13.3-2.4z"
    />
    <path
      className="knight_svg__st6"
      d="M416.7 238.9H95.3c-8.3 0-15-6.7-15-15v-80.3c0-6.6 4.3-12.5 10.7-14.4L251.7 81c2.8-.8 5.8-.8 8.6 0L421 129.2c6.3 1.9 10.7 7.7 10.7 14.4v80.3c0 8.3-6.7 15-15 15z"
    />
    <path
      className="knight_svg__st2"
      d="M431.7 223.9v-80.3c0-6.6-4.3-12.5-10.7-14.4L260.3 81c-1.4-.4-2.9-.6-4.3-.6v158.5h160.7c8.3 0 15-6.7 15-15z"
    />
    <path
      className="knight_svg__st1"
      d="M304.2 367.4h-96.4c-8.3 0-15-6.7-15-15s6.7-15 15-15h96.4c8.3 0 15 6.7 15 15s-6.7 15-15 15z"
    />
    <circle
      cx={207.8}
      cy={288.1}
      r={15}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#37372d",
      }}
    />
    <circle
      cx={304.2}
      cy={288.1}
      r={15}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#0f140a",
      }}
    />
    <path
      className="knight_svg__st9"
      d="M232.9 86.6v152.2h-30V95.6l30-9zM156.6 109.5v129.4h-30V118.5l30-9z"
    />
    <path
      className="knight_svg__st10"
      d="M385.4 118.5v120.4h-30V109.5l30 9zM309.1 95.6v143.2h-30V86.6l30 9z"
    />
    <path
      className="knight_svg__st6"
      d="M110.3 512H15c-8.2 0-15-6.6-15-14.9-.1-52.8 42.6-95.6 95.5-95.5 8.2 0 14.9 6.8 14.9 15V512z"
    />
    <path
      className="knight_svg__st2"
      d="M401.7 512H497c8.2 0 15-6.6 15-14.9.1-52.8-42.6-95.6-95.5-95.5-8.2 0-14.9 6.8-14.9 15V512z"
    />
    <path
      d="M319.2 352.4c0-8.3-6.7-15-15-15H256v30h48.2c8.3 0 15-6.7 15-15z"
      style={{
        fill: "#ff8787",
      }}
    />
  </svg>
);

export default SvgKnight;
