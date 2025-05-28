import { ResourceIcon } from "./types";

export const OneShotRevisionClassIcon: ResourceIcon = function ({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} fill="none">
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#one-shot-revision-class-icon_svg__a)"
      >
        <path d="M8.158.571h7.202a.97.97 0 0 1 .97.97v7.747a.97.97 0 0 1-.97.971H9.472M4.499 4.573A2 2 0 1 0 4.5.57a2 2 0 0 0 0 4.002" />
        <path d="M11.186 6.317c0-.648-.526-1.174-1.174-1.174H4.499A3.03 3.03 0 0 0 1.47 8.17v2.687H2.77l.433 4.572h2.594l.997-7.938h3.219c.648 0 1.174-.525 1.174-1.174" />
      </g>
      <defs>
        <clipPath id="one-shot-revision-class-icon_svg__a">
          <path fill={color} d="M.9 0h16v16H.9z" />
        </clipPath>
      </defs>
    </svg>
  );
};
