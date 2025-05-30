import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClockFour } from "@fortawesome/free-regular-svg-icons";
import { Routine } from "@routine-management-system/lib";

interface FocusViewProps {
  routine: Routine & { id: string };
}

export function FocusView({ routine }: FocusViewProps) {
  return (
    <div>
      <div className="font-semibold text-base text-neutral-b700">
        এসিএস ফিউচার স্কুল স্টাডি প্ল্যানার ২০২৫
      </div>
      <div className="border-[0.48px] border-neutral-b40 px-3 py-2">
        <div>
          <div className="font-semibold text-base text-neutral-b700">
            {routine.subject}
          </div>
          <div className="font-normal text-sm text-neutral-b300">
            {routine.chapter}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-neutral-b10 flex gap-2 items-center pl-3 py-1 rounded-[8px]">
            <FontAwesomeIcon
              className="text-green-g300 w-3.75"
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
              className="text-red-r300 w-3.75"
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
              className="text-blue-b300 w-4.25"
              icon={faClockFour}
            />
            <div className="flex flex-col">
              <div className="font-semibold text-neutral-b700 text-sm">
                Duration
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
        </div>
      </div>
    </div>
  );
}
