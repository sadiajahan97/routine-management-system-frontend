import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClockFour } from "@fortawesome/free-regular-svg-icons";
import { RESOURCES } from "@routine-management-system/constants";
import {
  determineLessonDateTimeColor,
  Timeline,
} from "@routine-management-system/lib";
import { MouseEventHandler } from "react";
import { ResourceButton } from "./components";

interface LessonDateTime {
  day: string;
  hours: string;
  minutes: string;
  month: string;
  year: string;
}

interface LessonProps {
  chapter?: string;
  datetime?: LessonDateTime;
  onClick: MouseEventHandler<HTMLDivElement>;
  subject?: string;
  timeline: Timeline;
}

export function Lesson({
  chapter = "চেপটার ১ - ভৌত বিজ্ঞান",
  datetime = {
    day: "৩",
    hours: "২",
    minutes: "৫৫",
    month: "মে",
    year: "২০২৫",
  },
  onClick,
  subject = "বাংলা ১ম পত্র",
  timeline,
}: LessonProps) {
  return (
    <div>
      <div
        className={`flex font-semibold gap-3 py-2 text-lg ${determineLessonDateTimeColor(
          timeline
        )}`}
      >
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon className="h-auto w-3" icon={faCalendar} />
          <div>
            {datetime.day} {datetime.month}, {datetime.year}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon className="h-auto w-3.25" icon={faClockFour} />
          <div>
            {datetime.hours} টা {datetime.minutes} মিনিট
          </div>
        </div>
      </div>
      <div
        className={`border ${
          timeline === "present" ? "border-green-g300" : "border-neutral-b40"
        } flex flex-col gap-3 hover:cursor-pointer p-3 rounded-[12px]`}
        onClick={onClick}
      >
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-lg text-neutral-b700">
            {subject}
          </div>
          <div className="font-normal text-base text-neutral-b300">
            {chapter}
          </div>
        </div>
        <div className="flex gap-4">
          {RESOURCES.map((resource, index) => (
            <ResourceButton
              Icon={resource.icon}
              isGhost={index === 2 && timeline === "past"}
              key={index}
              name={resource.name}
              timeline={timeline}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
