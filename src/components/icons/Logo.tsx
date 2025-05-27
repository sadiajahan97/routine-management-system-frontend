import Image from "next/image";

export function Logo() {
  return (
    <Image
      alt="ACS Future School Logo"
      height={50}
      src="/logo.svg"
      width={40}
    />
  );
}
