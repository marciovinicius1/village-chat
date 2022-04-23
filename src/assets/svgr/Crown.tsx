import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCrown = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M91 300v90h330v-90zm0 0"
      fill="#ff9f00"
      data-original="#ff9f00"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M256 300h165v90H256zm0 0"
      fill="#ff7816"
      data-original="#ff7816"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m422.5 169.2-24.3 47.398H113.8l-24.3-47.399C125.2 119.7 187.3 90 256 90s130.8 29.7 166.5 79.2zm0 0"
      fill="#ff4b00"
      data-original="#ff4b00"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m422.5 169.2-24.3 47.398H256V90c68.7 0 130.8 29.7 166.5 79.2zm0 0"
      fill="#cc1e0d"
      data-original="#cc1e0d"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M477.102 139.2 421 330H91L34.898 139.2 72.7 124.8c17.102 32.7 49.801 51.9 76.5 55.2h15.602c34.5-5.398 60.297-58.2 70.8-108.602h40.801c10.5 50.403 36.301 103.204 70.797 108.602h15.602c26.699-3.3 59.398-22.5 76.5-55.2zm0 0"
      fill="#fdbf00"
      data-original="#fdbf00"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M477.102 139.2 421 330H256V71.398h20.398C286.902 121.801 312.7 174.602 347.2 180h15.602c26.699-3.3 59.398-22.5 76.5-55.2zM46 150c-24.813 0-46-20.188-46-45s21.188-45 46-45 45 20.188 45 45-20.188 45-45 45zm0 0"
      fill="#ff9f00"
      data-original="#ff9f00"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M466 150c-24.813 0-45-20.188-45-45s20.188-45 45-45 46 20.188 46 45-21.188 45-46 45zm0 0"
      fill="#ff7816"
      data-original="#ff7816"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M256 0c-24.902 0-45 20.098-45 45 0 24.898 20.098 45 45 45s45-20.102 45-45c0-24.902-20.098-45-45-45zm0 0"
      fill="#ff9f00"
      data-original="#ff9f00"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M256 173.7 204.7 225l51.3 51.3 51.3-51.3zm0 0"
      fill="#ff4b00"
      data-original="#ff4b00"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m346 233.785 21.21 21.211L346 276.207l-21.21-21.21zm0 0"
      fill="#cc1e0d"
      data-original="#cc1e0d"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m166 233.785 21.21 21.211L166 276.207l-21.21-21.21zm0 0"
      fill="#ff4b00"
      data-original="#ff4b00"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M256 90V0c24.902 0 45 20.098 45 45 0 24.898-20.098 45-45 45zm0 0"
      fill="#ff7816"
      data-original="#ff7816"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M307.3 225 256 276.3V173.7zm0 0"
      fill="#cc1e0d"
      data-original="#cc1e0d"
    />
  </svg>
);

export default SvgCrown;