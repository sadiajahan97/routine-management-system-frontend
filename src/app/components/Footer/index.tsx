import { GooglePlay, Logo } from "@routine-management-system/components/icons";
import { Button } from "@routine-management-system/components/ui";

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 mb-8">
          <Logo width={50} />
          <div className="font-semibold text-xl w-32">গড়ছি আগামীর বাংলাদেশ</div>
        </div>
        <div className="font-medium text-lg">মোবাইল অ্যাপ ডাউনলোড করুন</div>
        <Button className="flex py-6 w-fit">
          <GooglePlay />
          <div className="flex flex-col items-start">
            <div className="text-xs">GET IT ON</div>
            <div className="text-base">Google Play</div>
          </div>
        </Button>
      </div>
    </footer>
  );
}
