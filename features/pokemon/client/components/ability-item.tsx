interface AbilityItemProps {
  name: string;
}

export function AbilityItem({ name }: AbilityItemProps) {
  return (
    <li className="capitalize w-fit px-3 py-2 bg-secondary rounded-full">
      {name}
    </li>
  );
}
