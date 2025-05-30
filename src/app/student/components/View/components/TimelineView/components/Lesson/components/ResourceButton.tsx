import {
  ResourceIcon,
  ResourceIconColor,
} from "@routine-management-system/components/icons";
import { Button } from "@routine-management-system/components/ui";
import {
  determineResourceButtonColors,
  Timeline,
} from "@routine-management-system/lib";

interface ResourceButtonProps {
  Icon: ResourceIcon;
  isGhost: boolean;
  name: string;
  timeline: Timeline;
}

export function ResourceButton({
  Icon,
  isGhost,
  name,
  timeline,
}: ResourceButtonProps) {
  return (
    <Button
      className={`${determineResourceButtonColors(
        isGhost,
        timeline
      )} flex gap-1 py-1 rounded-[8px] w-50.75`}
    >
      <Icon
        color={
          isGhost ? ResourceIconColor.NEUTRAL_B55 : ResourceIconColor.WHITE
        }
      />
      <div className="font-normal text-sm">{name}</div>
    </Button>
  );
}
