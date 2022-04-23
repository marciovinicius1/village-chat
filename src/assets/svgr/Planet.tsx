import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlanet = ({
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
        d="M460.937 251C458.272 140.264 367.365 51 256 51c-56.462 0-107.664 22.946-144.775 60L51.063 261C53.728 371.736 144.634 461 256 461c56.461 0 107.664-22.946 144.775-60z"
        fill="#6aa9ff"
        data-original="#6aa9ff"
      />
      <path
        d="m400.775 401 60.161-150C458.272 140.264 367.365 51 256 51v410c56.461 0 107.664-22.946 144.775-60z"
        fill="#6e76e5"
        data-original="#6e76e5"
      />
      <path
        d="M241 221c0-20.044-14.817-36.691-34.075-39.562C215.533 174.096 221 163.174 221 151c0-22.056-17.944-40-40-40h-69.775C74.038 148.129 51 199.424 51 256c0 1.672.023 3.338.063 5H201c22.056 0 40-17.944 40-40z"
        fill="#00ec89"
        data-original="#00ec89"
      />
      <path
        d="M461 256c0-1.672-.023-3.338-.063-5H331c-22.056 0-40 17.944-40 40 0 11.934 5.254 22.665 13.569 30H301c-22.056 0-40 17.944-40 40s17.944 40 40 40h99.775C437.962 363.871 461 312.576 461 256z"
        fill="#00cbb1"
        data-original="#00cbb1"
      />
      <path
        d="M342 155v-25h-5c-19.33 0-35-15.67-35-35V35c0-19.33 15.67-35 35-35h140c19.33 0 35 15.67 35 35v60c0 19.33-15.67 35-35 35h-64.738l-45.891 36.713C356.549 174.57 342 167.577 342 155z"
        fill="#f7f7f7"
        data-original="#ff7d47"
      />
      <path
        d="M477 0h-70v134.209l5.262-4.209H477c19.33 0 35-15.67 35-35V35c0-19.33-15.67-35-35-35z"
        fill="#b2b2b2"
        data-original="#ff405c"
      />
      <path
        d="M367 80h80c8.284 0 15-6.716 15-15s-6.716-15-15-15h-80c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
        fill="#b2b2b2"
        data-original="#ff405c"
      />
      <path
        d="M447 50h-40v30h40c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
        fill="#606060"
        data-original="#d0004f"
      />
      <path
        d="m145.63 508.685-45.891-36.713H35c-19.33 0-35-15.67-35-35v-60c0-19.33 15.67-35 35-35h140c19.33 0 35 15.67 35 35v60c0 19.33-15.67 35-35 35h-5v25c0 12.577-14.549 19.57-24.37 11.713z"
        fill="#f7f7f7"
        data-original="#fff36c"
      />
      <path
        d="M175 341.972h-70v134.209l40.63 32.503c9.821 7.857 24.37.865 24.37-11.713v-25h5c19.33 0 35-15.67 35-35v-60c0-19.329-15.67-34.999-35-34.999z"
        fill="#b2b2b2"
        data-original="#ffcd00"
      />
      <path
        d="M145 421.972H65c-8.284 0-15-6.716-15-15s6.716-15 15-15h80c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
        fill="#b2b2b2"
        data-original="#ffcd00"
      />
      <path
        d="M145 391.972h-40v30h40c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
        fill="#606060"
        data-original="#ff9f22"
      />
    </g>
  </svg>
);

export default SvgPlanet;
