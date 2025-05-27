import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "@routine-management-system/components/icons";
import { NAVIGATION_LINKS } from "@routine-management-system/constants";
import { NavigationBar, Profile } from "./components";

export function Header() {
  return (
    <header className="border-b border-neutral-b40 flex items-center justify-between px-33.75 py-2">
      <div className="flex gap-12.75 items-center">
        <Logo />
        <NavigationBar links={NAVIGATION_LINKS} />
      </div>
      <div className="flex gap-5 items-center">
        <div className="p-0.5">
          <FontAwesomeIcon
            className="h-auto text-neutral-b300 w-5"
            icon={faBell}
          />
        </div>
        <div className="flex gap-4 items-center">
          <Profile />
          <div className="h-7.5 w-7.5">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </header>
  );
}
