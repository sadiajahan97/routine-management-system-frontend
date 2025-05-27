interface NavigationBarProps {
  links: string[];
}

export function NavigationBar({ links }: NavigationBarProps) {
  return (
    <nav>
      <ul className="flex gap-12.5 items-center">
        {links.map((link, index) => (
          <li
            className="font-semibold hover:cursor-pointer hover:text-green-g300 text-base text-neutral-b700"
            key={index}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}
