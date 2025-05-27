interface ListProps {
  isLink: boolean;
  items: string[];
  title: string;
}

export function List({ isLink, items, title }: ListProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-semibold text-xl">{title}</div>
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => (
          <li
            className={`font-normal text-base${
              isLink && " hover:cursor-pointer hover:underline"
            }`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
