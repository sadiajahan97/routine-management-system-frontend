import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClockFour } from "@fortawesome/free-regular-svg-icons";
import { RESOURCES } from "@routine-management-system/constants";
import { Routine } from "@routine-management-system/lib";
import { ResourceButton } from "./components";

interface FocusViewProps {
  routine: Routine & { id: string };
}

export function FocusView({ routine }: FocusViewProps) {
  return (
    <div className="border-[0.48px] border-neutral-b40 flex flex-col gap-4 px-3 py-2">
      <div>
        <div className="font-semibold text-base text-neutral-b700">
          {routine.subject}
        </div>
        <div className="font-normal text-sm text-neutral-b300">
          {routine.chapter}
        </div>
      </div>
      <div className="gap-3 grid grid-cols-3">
        <div className="bg-neutral-b10 flex gap-2 items-center pl-3 py-1 rounded-[8px]">
          <FontAwesomeIcon
            className="h-auto text-green-g300 w-3.75"
            icon={faCalendar}
          />
          <div className="flex flex-col">
            <div className="font-semibold text-neutral-b700 text-sm">
              Start Date
            </div>
            <div className="font-normal text-base text-neutral-b300">
              {new Intl.DateTimeFormat("en-GB", {
                day: "2-digit",
                hour: "numeric",
                hour12: true,
                minute: "2-digit",
                month: "long",
                year: "numeric",
              })
                .format(new Date(`${routine.date}T${routine.startTime}`))
                .replace(" at ", ", ")
                .replace("am", "AM")
                .replace("pm", "PM")}
            </div>
          </div>
        </div>
        <div className="bg-neutral-b10 flex gap-2 items-center pl-3 py-1 rounded-[8px]">
          <FontAwesomeIcon
            className="h-auto text-red-r300 w-3.75"
            icon={faCalendar}
          />
          <div className="flex flex-col">
            <div className="font-semibold text-neutral-b700 text-sm">
              End Date
            </div>
            <div className="font-normal text-base text-neutral-b300">
              {new Intl.DateTimeFormat("en-GB", {
                day: "2-digit",
                hour: "numeric",
                hour12: true,
                minute: "2-digit",
                month: "long",
                year: "numeric",
              })
                .format(new Date(`${routine.date}T${routine.endTime}`))
                .replace(" at ", ", ")
                .replace("am", "AM")
                .replace("pm", "PM")}
            </div>
          </div>
        </div>
        <div className="bg-neutral-b10 flex gap-2 items-center pl-3 py-1 rounded-[8px]">
          <FontAwesomeIcon
            className="h-auto text-blue-b300 w-4.25"
            icon={faClockFour}
          />
          <div className="flex flex-col">
            <div className="font-semibold text-neutral-b700 text-sm">
              Duration
            </div>
            <div className="font-normal text-base text-neutral-b300">
              {parseFloat(routine.endTime.split("-")[0].split(":")[0]) * 60 +
                parseFloat(routine.endTime.split("-")[0].split(":")[1]) -
                (parseFloat(routine.startTime.split("-")[0].split(":")[0]) *
                  60 +
                  parseFloat(
                    routine.startTime.split("-")[0].split(":")[1]
                  ))}{" "}
              minutes
            </div>
          </div>
        </div>
      </div>
      <div className="gap-x-2.75 gap-y-2 grid grid-cols-2">
        {RESOURCES.map((resource, index) => (
          <div className="first:col-span-2" key={index}>
            <ResourceButton Icon={resource.icon} name={resource.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
