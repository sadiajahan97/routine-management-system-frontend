import { ResourceIcon } from "./types";

export const AcademicProgramPaidClassIcon: ResourceIcon = function ({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} fill="none">
      <g clipPath="url(#academic-program-paid-class-icon_svg__a)">
        <path
          fill={color}
          fillRule="evenodd"
          d="M.8 1.167v8.705l5.5 1.65 5.5-1.65V1.167l-.868-.578L6.3 1.979 1.668.589zm5.5 1.855-4.5-1.35v7.456l4 1.2V4.626l1-.3v6.002l4-1.2V1.672zm3.5.406-2 .6v1.044l2-.6z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="academic-program-paid-class-icon_svg__a">
          <path fill={color} d="M.3 0h12v12H.3z" />
        </clipPath>
      </defs>
    </svg>
  );
};
