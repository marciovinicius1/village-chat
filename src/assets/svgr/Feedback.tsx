import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFeedback = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g xmlns="http://www.w3.org/2000/svg">
      <path
        d="m427.397 487.509-55.828-46.523H247c-24.853 0-45-20.147-45-45v-120c0-24.853 20.147-45 45-45h220c24.853 0 45 20.147 45 45v120c0 24.853-20.147 45-45 45h-15v35c0 12.717-14.833 19.665-24.603 11.523z"
        fill="#ffd83b"
        data-original="#00ec89"
      />
      <path
        d="M467 230.986H357v210h14.569l55.828 46.523c9.77 8.142 24.603 1.194 24.603-11.523v-35h15c24.853 0 45-20.147 45-45v-120c0-24.853-20.147-45-45-45z"
        fill="#e3b300"
        data-original="#00cbb1"
      />
      <path
        d="M60 325.985v-35H45c-24.853 0-45-20.147-45-45v-180c0-24.853 20.147-45 45-45h240c24.853 0 45 20.147 45 45v180c0 24.853-20.147 45-45 45H140.431l-55.828 46.523C74.833 345.65 60 338.703 60 325.985z"
        fill="#f9f9f9"
        data-original="#f9f9f9"
      />
      <path
        d="M285 20.986H165v270h120c24.853 0 45-20.147 45-45v-180c0-24.853-20.147-45-45-45z"
        fill="#e2dff4"
        data-original="#e2dff4"
      />
      <path
        d="M65 70.986c-8.284 0-15 6.716-15 15v70c0 8.284 6.716 15 15 15h85c8.284 0 15-6.716 15-15v-70c0-8.284-6.716-15-15-15z"
        fill="#ff7d47"
        data-original="#ff7d47"
      />
      <path
        d="M265 240.986H65c-8.284 0-15-6.716-15-15s6.716-15 15-15h200c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
        fill="#e2dff4"
        data-original="#e2dff4"
      />
      <g fill="#bebcdd">
        <path
          d="M265 210.986H165v30h100c8.284 0 15-6.716 15-15s-6.716-15-15-15zM265 170.986h-50c-8.284 0-15-6.716-15-15s6.716-15 15-15h50c8.284 0 15 6.716 15 15s-6.716 15-15 15zM265 100.986h-50c-8.284 0-15-6.716-15-15s6.716-15 15-15h50c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
          data-original="#bebcdd"
        />
      </g>
    </g>
  </svg>
);

export default SvgFeedback;
