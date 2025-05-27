import Image from "next/image";

interface LogoProps {
  width: number;
}

export function Logo({ width }: LogoProps) {
  return (
    <Image
      alt="ACS Future School Logo"
      height={(4 / 3) * width}
      src="/logo.svg"
      width={width}
    />
  );
}
