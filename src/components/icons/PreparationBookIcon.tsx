import { ResourceIcon } from "./types";

export const PreparationBookIcon: ResourceIcon = function ({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none">
      <path
        fill={color}
        d="M3.75 14.25h9.375V13H3.758c-.29-.008-.633-.122-.633-.625s.344-.617.632-.625h9.368V3c0-.69-.56-1.25-1.25-1.25H3.75c-.754 0-1.875.5-1.875 1.875v8.75c0 1.376 1.121 1.875 1.875 1.875M3.125 5.5V3.625c0-.503.344-.618.625-.625h8.125v7.5h-8.75z"
      />
      <path fill={color} d="M5 4.25h5.625V5.5H5z" />
    </svg>
  );
};
