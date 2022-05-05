import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMv = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2538.8 1914.6"
    xmlSpace="preserve"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={182.369}
      y1={1899.581}
      x2={175.026}
      y2={426.484}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#efefef',
        }}
      />
      <stop
        offset={0.435}
        style={{
          stopColor: '#edeced',
        }}
      />
      <stop
        offset={0.71}
        style={{
          stopColor: '#e6e4e6',
        }}
      />
      <stop
        offset={0.941}
        style={{
          stopColor: '#dad5da',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#d6d0d6',
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: 'url(#a)',
      }}
      d="m9.9 427.3 1.9 1471.9 336.7-.4L347 697.4z"
    />
    <linearGradient
      id="b"
      gradientUnits="userSpaceOnUse"
      x1={1731.629}
      y1={886.653}
      x2={1731.629}
      y2={548.372}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#efefef',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#d6d0d6',
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: 'url(#b)',
      }}
      d="m1562.5 1009.8 338.3-612.6-338.3 275.2z"
    />
    <path
      style={{
        fill: '#efefef',
      }}
      d="m1901.3 11.7-342.8 258.5-605.4 466.9-606.7-465.4L9.4 13.5l.5 413.8L347 697.4v-.3L678.6 950l275 212.5 274.5-213.2 334.4-277.2v.3l338.3-275.2.3-.5z"
    />
    <linearGradient
      id="c"
      gradientUnits="userSpaceOnUse"
      x1={1563.015}
      y1={955.294}
      x2={2523.174}
      y2={955.294}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#fbd07c',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#f7f779',
        }}
      />
    </linearGradient>
    <path
      d="m2523.2 11.7-172 337-787.3 1550.2-.9-740.9L2191.5 12.1l331.7-.4z"
      style={{
        fill: 'url(#c)',
      }}
    />
    <linearGradient
      id="d"
      gradientUnits="userSpaceOnUse"
      x1={1110.46}
      y1={155.934}
      x2={1775.626}
      y2={155.934}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#fbd07c',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#f7f779',
        }}
      />
    </linearGradient>
    <path
      d="m1775.6 11.7-379.5 288.5-285.6-288.5h665.1z"
      style={{
        fill: 'url(#d)',
      }}
    />
  </svg>
);

export default SvgMv;
