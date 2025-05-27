"use client";

import { Avatar, AvatarImage } from "@routine-management-system/components/ui";
import { useState } from "react";

type Class =
  | "১"
  | "২"
  | "৩"
  | "৪"
  | "৫"
  | "৬"
  | "৭"
  | "৮"
  | "৯"
  | "১০"
  | "১১"
  | "১২";

interface IProfile {
  class: Class;
  name: string;
  picture: string;
}

export function Profile() {
  const [profile] = useState<IProfile>({
    class: "৯",
    name: "ফাইরুজ খালেদ",
    picture: "https://github.com/shadcn.png",
  });
  return (
    <div className="flex gap-3 items-center">
      <Avatar>
        <AvatarImage height={42} src={profile.picture} width={42} />
      </Avatar>
      <div className="flex flex-col gap-0.5">
        <div className="font-semibold text-neutral-b700">{profile.name}</div>
        <div className="font-medium text-base text-neutral-b100">
          ক্লাস {profile.class}
        </div>
      </div>
    </div>
  );
}
