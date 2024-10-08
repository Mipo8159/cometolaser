import React from "react";

const Quote: React.FC = () => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="12 15 175 160"
      height="80"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
      aria-label=""
    >
      <defs>
        <style>
          {`
            .fillColor { fill: #000; }
          `}
        </style>
      </defs>
      <g>
        <path
          className="fillColor"
          d="M114.733 174.579c45.255-32.506 41.878-73.139 31.072-75.172-9.457-1.355-18.913-4.064-27.018-11.515-15.536-15.576-16.21-40.633-.676-56.208a39.47 39.47 0 0 1 56.064 0c23.641 24.379 12.157 71.787-6.08 101.585-8.105 13.546-19.588 31.154-48.632 46.732l-4.73-5.422z"
        />
        <path
          className="fillColor"
          d="M20.442 174.579c45.255-32.506 41.878-73.139 31.071-75.172-9.457-1.355-18.913-4.064-27.018-11.515-15.536-15.577-16.211-40.634-.676-56.209a39.47 39.47 0 0 1 56.064 0c23.641 24.379 12.157 71.787-6.08 101.585C65.697 146.814 54.215 164.422 25.17 180l-4.728-5.421z"
        />
      </g>
    </svg>
  );
};

export default Quote;
