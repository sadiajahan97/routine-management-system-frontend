import {
  AcademicProgramPaidClassIcon,
  CqExamIcon,
  McqExamIcon,
  OneShotRevisionClassIcon,
  PreparationBookIcon,
  ResourceIcon,
} from "@routine-management-system/components/icons";

interface List {
  items: string[];
  title: string;
}

interface Resource {
  icon: ResourceIcon;
  name: string;
}

export const BANGLA_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export const BANGLA_MONTHS = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

export const BANGLA_WEEKDAYS = [
  "রবিবার",
  "সোমবার",
  "মঙ্গলবার",
  "বুধবার",
  "বৃহস্পতিবার",
  "শুক্রবার",
  "শনিবার",
];

export const COMPANY_INFORMATION: List = {
  items: [
    "বাণিজ্য লাইসেন্স নম্বর: 413135456451654",
    "ইটিন নম্বর: 4556456845615",
  ],
  title: "কোম্পানির তথ্য",
};

export const CONTACT: List = {
  items: [
    "কল করুন: 16910",
    "হোয়াটসঅ্যাপ: +8801896016252",
    "ইমেইল: ACSfutureschool@gmail.com",
  ],
  title: "যোগাযোগ",
};

export const HOURS = Array.from({ length: 24 }, (_, index) =>
  String(index).padStart(2, "0")
);

export const LINK: List = {
  items: [
    "আমাদের সম্পর্কে",
    "ফিউচার স্কুল ক্যারিয়ার",
    "ব্যবহারের শর্তাবলী",
    "রিফান্ড নীতিমালা",
  ],
  title: "লিঙ্ক",
};

export const MINUTES = Array.from({ length: 60 }, (_, index) =>
  String(index).padStart(2, "0")
);

export const NAVIGATION_LINKS = [
  "হোম",
  "বার্ষিক পরিক্ষার প্রস্ততি",
  "শিক্ষকবৃন্দ",
  "আমাদের দল",
  "কমিউনিটি",
];

export const RESOURCES: Resource[] = [
  { icon: AcademicProgramPaidClassIcon, name: "একাডেমিক প্রোগ্রাম পেইড ক্লাস" },
  { icon: OneShotRevisionClassIcon, name: "ওয়ান শট রিভিশন ক্লাস" },
  { icon: PreparationBookIcon, name: "প্রিপারেশন বুক" },
  { icon: McqExamIcon, name: "এমসিকিউ এক্সাম" },
  { icon: CqExamIcon, name: "সিকিউ এক্সাম" },
];
