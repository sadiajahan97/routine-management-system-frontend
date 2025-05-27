import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Logo } from "@routine-management-system/components/icons";
import { NAVIGATION_LINKS } from "@routine-management-system/constants";
import { NavigationBar } from "./components";

export function Header() {
  return (
    <header className="flex items-center">
      <Logo />
      <NavigationBar links={NAVIGATION_LINKS} />
      <FontAwesomeIcon className="text-neutral-b300 w-5" icon={faBell} />
    </header>
  );
}
