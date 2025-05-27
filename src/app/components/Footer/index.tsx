import { GooglePlay, Logo } from "@routine-management-system/components/icons";
import { Button } from "@routine-management-system/components/ui";
import {
  COMPANY_INFORMATION,
  CONTACT,
  LINK,
} from "@routine-management-system/constants";
import { List } from "./components";

export function Footer() {
  return (
    <footer className="flex flex-col gap-8 p-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 mb-8">
            <Logo width={50} />
            <div className="font-semibold text-xl w-32">
              গড়ছি আগামীর বাংলাদেশ
            </div>
          </div>
          <div className="font-medium text-lg">মোবাইল অ্যাপ ডাউনলোড করুন</div>
          <Button className="flex hover:cursor-pointer py-6 w-fit">
            <GooglePlay />
            <div className="flex flex-col items-start">
              <div className="text-xs">GET IT ON</div>
              <div className="text-base">Google Play</div>
            </div>
          </Button>
        </div>
        <List isLink={true} items={LINK.items} title={LINK.title} />
        <List
          isLink={false}
          items={COMPANY_INFORMATION.items}
          title={COMPANY_INFORMATION.title}
        />
        <div>
          <List isLink={false} items={CONTACT.items} title={CONTACT.title} />
        </div>
      </div>
      <div className="font-normal text-base text-center">
        স্বত্ব © ২০১৫ - ২০২৪ ACS FUTURE স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
      </div>
    </footer>
  );
}
