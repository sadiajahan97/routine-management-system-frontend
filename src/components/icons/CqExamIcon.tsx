import { ResourceIcon } from "./types";

export const CqExamIcon: ResourceIcon = function ({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} fill="none">
      <path
        stroke={color}
        strokeWidth={0.8}
        d="m14.6 12.288-.067.1-1 1.5-.333.5-.333-.5-.934-1.4V13a1.4 1.4 0 0 1-1.4 1.4H3.2A1.4 1.4 0 0 1 1.8 13V3a1.4 1.4 0 0 1 1.4-1.4h7.333a1.4 1.4 0 0 1 1.4 1.4v1.74c.069-.145.16-.28.277-.396l.102-.094a1.4 1.4 0 0 1 1.878.094l.093.102a1.4 1.4 0 0 1 .318.887z"
      />
    </svg>
  );
};
