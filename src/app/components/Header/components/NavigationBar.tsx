interface NavigationBarProps {
  links: string[];
}

export function NavigationBar({ links }: NavigationBarProps) {
  return (
    <nav>
      <ul className="flex gap-4">
        {links.map((link, index) => (
          <li
            className="font-semibold hover:text-green-g300 text-base text-neutral-b700"
            key={index}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}
