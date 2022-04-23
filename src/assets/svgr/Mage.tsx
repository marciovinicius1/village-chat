import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMage = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    id="mage_svg__Camada_1"
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
        ".mage_svg__st0{fill:#ffc8be}.mage_svg__st3{fill:#4a3d8e}.mage_svg__st6{fill:#faf5f0}"
      }
    </style>
    <path
      className="mage_svg__st0"
      d="M111.4 367.4H79.3c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1h32.1c8.3 0 15 6.7 15 15v64.3c0 8.2-6.7 14.9-15 14.9z"
    />
    <path
      d="M432.7 367.4h-32.1c-8.3 0-15-6.7-15-15v-64.3c0-8.3 6.7-15 15-15h32.1c26 0 47.1 21.1 47.1 47.1s-21.1 47.2-47.1 47.2z"
      style={{
        fill: "#ffaaa5",
      }}
    />
    <path
      d="M368.5 158.5h-225c-5.2 0-10-2.7-12.8-7.1s-3-9.9-.7-14.6L194.4 8.3c2.5-5.1 7.7-8.3 13.4-8.3H497c7.2 0 13.4 5.1 14.7 12.2 1.4 7.1-2.5 14.1-9.2 16.8L357 87.1l24.8 49.7c2.3 4.6 2.1 10.2-.7 14.6s-7.4 7.1-12.6 7.1z"
      style={{
        fill: "#6356aa",
      }}
    />
    <path
      className="mage_svg__st3"
      d="M381.2 151.4c2.7-4.4 3-9.9.7-14.6L357 87.1l145.5-58.2c6.7-2.7 10.5-9.7 9.2-16.8C510.4 5.1 504.2 0 497 0H256v158.5h112.5c5.2 0 10-2.7 12.7-7.1z"
    />
    <path
      d="M400.6 415.6c-8.3 0-15-6.7-15-15 0-27.2-22.1-49.3-49.2-49.3H175.7c-27.2 0-49.2 22.1-49.2 49.2 0 8.3-6.7 15-15 15s-15-6.7-15-15V207.8c0-8.3 6.7-15 15-15h289.2c8.3 0 15 6.7 15 15v192.8c-.1 8.3-6.8 15-15.1 15z"
      style={{
        fill: "#ffe1d2",
      }}
    />
    <path
      className="mage_svg__st0"
      d="M385.6 400.6c0 8.3 6.7 15 15 15s15-6.7 15-15V207.8c0-8.3-6.7-15-15-15H256v158.5h80.4c27.1 0 49.2 22.1 49.2 49.3z"
    />
    <path
      d="M336.3 321.3H175.7c-43.7 0-79.3 35.6-79.3 79.3V497c0 8.3 6.7 15 15 15s15-6.7 15-15v-16.1c0-36.1 29.2-65.3 65.3-65.3h128.5c36.1 0 65.3 29.2 65.3 65.3V497c0 8.3 6.7 15 15 15s15-6.7 15-15v-96.4c.1-43.7-35.5-79.3-79.2-79.3z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      className="mage_svg__st6"
      d="M385.6 480.9V497c0 8.3 6.7 15 15 15s15-6.7 15-15v-96.4c0-43.7-35.6-79.3-79.3-79.3H256v94.3h64.3c36 0 65.3 29.2 65.3 65.3z"
    />
    <path
      className="mage_svg__st6"
      d="M400.6 512c8.3 0 15-6.7 15-15v-16.1c0-52.7-42.7-95.3-95.3-95.3-35.5 0-64.3-28.8-64.3-64.3 0 35.5-28.8 64.3-64.3 64.3-52.6 0-95.3 42.6-95.3 95.3V497c0 8.3 6.7 15 15 15h289.2z"
    />
    <path
      d="M415.6 497v-16.1c0-52.7-42.7-95.3-95.3-95.3-35.5 0-64.3-28.8-64.3-64.3V512h144.6c8.3 0 15-6.7 15-15z"
      style={{
        fill: "#f0e9e1",
      }}
    />
    <circle
      cx={191.7}
      cy={272.1}
      r={15}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#37372d",
      }}
    />
    <circle
      cx={320.3}
      cy={272.1}
      r={15}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#0f140a",
      }}
    />
    <path
      className="mage_svg__st3"
      d="m503.7 194.4-124.1-62H132.4l-124.1 62c-6.2 3.1-9.5 10.1-7.9 16.9S8 222.8 15 222.8h482c7 0 13-4.8 14.6-11.6 1.6-6.7-1.7-13.7-7.9-16.8z"
    />
    <path
      d="M511.6 211.2c1.6-6.8-1.7-13.8-7.9-16.9l-124.1-62H256v90.4h241c7 .1 13-4.7 14.6-11.5z"
      style={{
        fill: "#37375b",
      }}
    />
  </svg>
);

export default SvgMage;
