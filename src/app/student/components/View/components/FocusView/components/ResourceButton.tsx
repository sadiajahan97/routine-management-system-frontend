import {
  ResourceIcon,
  ResourceIconColor,
} from "@routine-management-system/components/icons";
import { Button } from "@routine-management-system/components/ui";

interface ResourceButtonProps {
  Icon: ResourceIcon;
  name: string;
}

export function ResourceButton({ Icon, name }: ResourceButtonProps) {
  return (
    <Button className="bg-white border border-neutral-b40 flex gap-1 hover:cursor-pointer hover:bg-green-g50 p-1 rounded-[8px] w-full">
      <Icon color={ResourceIconColor.GREEN_G300} />
      <div className="font-normal text-green-g300 text-sm">{name}</div>
    </Button>
  );
}
