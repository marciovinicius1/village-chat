import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCyclop = ({
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
    <g xmlns="http://www.w3.org/2000/svg">
      <path
        d="M400.6 273.134c61.531 0 111.4 49.749 111.4 111.384V497c0 8.284-6.716 15-15 15H15c-8.284 0-15-6.716-15-15V384.518c0-61.516 49.764-111.384 111.384-111.384z"
        fill="#ffaaa5"
        data-original="#ffaaa5"
      />
      <path
        d="M512 497V384.518c0-61.635-49.87-111.384-111.4-111.384H256V512h241c8.284 0 15-6.716 15-15z"
        fill="#ff8787"
        data-original="#ff8787"
      />
      <path
        d="M111.4 303.134H95.333c-34.91 0-63.199-28.242-63.199-63.2 0-34.916 28.246-63.2 63.199-63.2H111.4c8.284 0 15 6.716 15 15v96.4c0 8.284-6.715 15-15 15z"
        fill="#ffc8be"
        data-original="#ffc8be"
      />
      <path
        d="M416.667 303.134H400.6c-8.284 0-15-6.716-15-15v-96.4c0-8.284 6.716-15 15-15h16.067c34.916 0 63.199 28.247 63.199 63.2 0 34.91-28.241 63.2-63.199 63.2z"
        fill="#ffaaa5"
        data-original="#ffaaa5"
      />
      <path
        d="M304.2 431.667h-96.4c-61.519 0-111.399-49.769-111.399-111.4V159.6C96.4 71.456 167.708 0 256 0c88.143 0 159.6 71.307 159.6 159.6v160.667c0 61.518-49.768 111.4-111.4 111.4z"
        fill="#ffe1d2"
        data-original="#ffe1d2"
      />
      <path
        d="M415.6 320.267V159.6C415.6 71.307 344.143 0 256 0v431.667h48.2c61.632 0 111.4-49.882 111.4-111.4z"
        fill="#ffc8be"
        data-original="#ffc8be"
      />
      <path
        d="m303.98 367.625-96.399-.449c-25.808-.12-47.035-21.075-46.913-47.353l.15-32.132c.039-8.284 6.786-14.969 15.07-14.93l160.664.749c8.284.039 14.969 6.786 14.93 15.07l-.15 32.132c-.12 25.807-21.074 47.035-47.352 46.913z"
        fill="#fff"
        data-original="#ffffff"
      />
      <path
        d="m351.332 320.711.15-32.132c.039-8.284-6.646-15.031-14.93-15.07l-80.332-.375-.44 94.266 48.2.225c26.278.122 47.232-21.106 47.352-46.914z"
        fill="#faf5f0"
        data-original="#faf5f0"
      />
      <circle
        cx={256}
        cy={159.6}
        fill="#fff"
        r={79.267}
        data-original="#ffffff"
      />
      <path
        d="M335.267 159.6c0-43.708-35.559-79.267-79.267-79.267v158.533c43.708 0 79.267-35.558 79.267-79.266z"
        fill="#faf5f0"
        data-original="#faf5f0"
      />
      <g clipRule="evenodd" fillRule="evenodd">
        <circle
          cx={256}
          cy={159.6}
          fill="#37372d"
          r={15}
          data-original="#37372d"
        />
        <path
          d="M271 159.6c0-8.28-6.72-15-15-15v30c8.28 0 15-6.72 15-15z"
          fill="#0f140a"
          data-original="#0f140a"
        />
      </g>
    </g>
  </svg>
);

export default SvgCyclop;
